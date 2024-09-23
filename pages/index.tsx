import { Button, Input, InputRef, message, Modal, Popover, Space, Table, TableColumnType } from "antd";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/app/store";
import { importData, setData } from "@/app/store/slices/vehicle";
import { useDispatch, useSelector } from "react-redux";
import Title from "antd/es/typography/Title";
import { useCallback, useEffect, useRef, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Vehicle } from "@/models/vehicle";
import { FilterDropdownProps, TableRowSelection } from "antd/es/table/interface";
import { CloseSquareOutlined, HeartOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import TableFeature from "@/components/TableFeature";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { setFavouriteData, importFavouriteData, addData } from "@/app/store/slices/favourite";
import { CSVLink } from "react-csv";

type DataIndex = keyof Vehicle;

const Home: NextPage = () => {
  // SplashScreen related useState
  const [isLoading, setIsLoading] = useState(true);
  
  // Search related useState
  const [, setSearchText] = useState('');
  const [, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  
  // Vehicle list related useState
  const importedVehicle = useSelector(importData);
  const [vehicleList, setVehicleList] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Sorting related useState
  const [sortAscending, setSortAscending] = useState(true);

  // Screen size handling
  const [isDesktop, setDesktop] = useState(false);
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  // For the Favourite Modal
  const [open, setOpen] = useState(false);
  const importFavourteList = useSelector(importFavouriteData);
  const [favouriteList, setFavouriteList] = useState([])

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
      setOpen(false);
  };

  const handleDelete = (selectedVehicle: Vehicle) => {
    const updatedList = favouriteList.filter((vehicle: Vehicle) => vehicle.key != selectedVehicle.key);
    dispatch(setFavouriteData(updatedList));
  }

  // Favourites related
  const dispatch = useDispatch();

  // Functions that handle the adding elements to the favorite list
  const addToFavourite = () => {
    const selectedVehicles = vehicleList.filter((vehicle: Vehicle) => selectedRowKeys.includes(vehicle.key));

    const duplicatesRemoved = selectedVehicles.filter((vehicle: Vehicle) => {
      return !favouriteList.some((item: Vehicle) => item.key === vehicle.key)
    });

    dispatch(addData(duplicatesRemoved))

    message.success('successfully added to favourites');
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Vehicle> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;
  
  // Handling Search
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps['confirm'],) => {
    clearFilters();
    setSearchText('');
    confirm();
  };

  const handleMenuClick = () => {
    setShowFilterMobile(!showFilterMobile);
  }

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  useEffect(() => {
    setVehicleList(importedVehicle);
    setFavouriteList(importFavourteList);
  }, [importedVehicle, importFavourteList])

  // Use effect for screen size "https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size"
  useEffect(() => {
    if (window.innerWidth > 1450) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  // Props that will be added to the search fields
  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<Vehicle> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8,  }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    }
  });

  // Logic for sorting
  const onSorterChange = useCallback((selectedSorter: any) => {
    // This function handles the sorting of a specific column that is specified within the Table Feature.
    // Uses usecallback function because we only need this function rerendered when vehiclelist changes.
    const sortedVehicleList = [...vehicleList];
    if(selectedSorter === "Name") {
      sortedVehicleList.sort((a: Vehicle, b: Vehicle) =>
        a.Name > b.Name? 1:a.Name === b.Name?0: -1
      );
    }else if(selectedSorter === "Model") {
      sortedVehicleList.sort((a: Vehicle, b: Vehicle) =>
        a.Model > b.Model? 1:a.Model === b.Model?0: -1
      );
    }else if(selectedSorter === "Type") {
      sortedVehicleList.sort((a: Vehicle, b: Vehicle) =>
        a.Type > b.Type? 1:a.Type === b.Type?0: -1
      );
    }else if(selectedSorter === "Manufacturer") {
      sortedVehicleList.sort((a: Vehicle, b: Vehicle) =>
        a.Manufacturer > b.Manufacturer? 1:a.Manufacturer === b.Manufacturer?0: -1
      );
    }else if(selectedSorter === "Seating") {
      sortedVehicleList.sort((a: Vehicle, b: Vehicle) =>
        a.Seating - b.Seating
      );
    }
    
    const finalVehicleList = sortAscending ? [...sortedVehicleList] : [...sortedVehicleList].reverse();
    setVehicleList(finalVehicleList); 
  }, [vehicleList, sortAscending]);

  // Defining the column for table
  const columns= [
    {
      title: (
      <>
        Name/<br/>Model/<br/>Manufacturer
      </>
      ),
      render: (car: any) => (
        <>
          {car.Name}
            <br />
          {car.Model}
        </>
      ),
      ...getColumnSearchProps('Name'),
      responsive: ['xs'],
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      ...getColumnSearchProps('Name'),
      responsive: ['sm'],
    },
    {
      title: 'Model',
      dataIndex: 'Model',
      key: 'Model',
      ...getColumnSearchProps('Model'),
      responsive: ['sm'],
    },
    {
      title: 'Manufacturer',
      dataIndex: 'Manufacturer',
      key: 'Manufacturer',
      ...getColumnSearchProps('Manufacturer'),
      responsive: ['sm'],
    },
    {
      title: 'Seating',
      dataIndex: 'Seating',
      key: 'Seating',
      filters: [
        {
          text: '4 seat',
          value: 4,
        },
        {
          text: '5 seat',
          value: 5,
        },
        {
          text: '6 seat',
          value: 6,
        },
        {
          text: '7 seat',
          value: 7,
        }
      ],
      onFilter: (value: any, record: { Seating: number; }) => record.Seating === value,
    },
    (open ? {
      title: '',
      dataIndex: '',
      key:'delete',
      render: (_: any, record: Vehicle) => <Button icon={<CloseSquareOutlined />} onClick={() => handleDelete(record)} />
    }: {
      width: '1%'
    })
  ];

  // Table is placed inside a Popover
  const content = (
    <div className="block">
      <TableFeature
        vehicleList={vehicleList}
        onSorterChange={onSorterChange}
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
        addToFavourite={addToFavourite}
        hasSelected={hasSelected}
      />
      <a onClick={handleMenuClick}>Close</a>
    </div>
  );

  return (

    <div>
      {vehicleList?.length === 0 || isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
      ):(
        <Content className="bg-[url('/car.jpg')] bg-cover bg-center  h-screen">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="px-6 py-6 mx-auto w-25 items-center relative z-10">
            <Title className="text-center mt-8 !text-white" level={isDesktop ? 1 : 3}>Vehicle Information</Title>
            <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-2">
                {isDesktop ? (
                  <TableFeature
                    vehicleList={vehicleList}
                    onSorterChange={onSorterChange}
                    sortAscending={sortAscending}
                    setSortAscending={setSortAscending}
                    addToFavourite={addToFavourite}
                    hasSelected={hasSelected}
                  />
                ) : (
                  <>
                    {/* when screen size is small, instead of showing the filter in a row, it shows the filter options */}
                    <Popover
                      placement="leftTop"
                      content={content}
                      title="Title"
                      trigger="click"
                      open={showFilterMobile}
                      onOpenChange={handleMenuClick}
                    >
                      <MenuOutlined onClick={handleMenuClick}/>
                    </Popover>
                  </>
                )}
                {/* Generating the modal for favourites table */}
                <Button className="w-32 float-right mb-3" onClick={showModal} icon={<HeartOutlined />} />
                <Modal
                    width={1000}
                    open={open}
                    onCancel={handleCancel}
                    footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary">
                        <CSVLink data={favouriteList}>Download</CSVLink>
                    </Button>
                    ]}
                >
                    <Table
                      // @ts-expect-error: It works fine
                      columns={columns}
                      dataSource={favouriteList}
                      className="mt-8"
                    />
                </Modal>
            </div> 
            <Table
              dataSource={vehicleList}
              // @ts-expect-error: It works fine
              columns={columns}
              pagination={{ pageSize: isDesktop ? 10 : 50 }}
              scroll={{ y: isDesktop ? 800 : 240 }}
              rowSelection={rowSelection}
              expandable={{
                expandedRowRender: (record: Vehicle) => (
                  <> 
                    <div className="flex">
                      <p className="mx-10"><b>Manufacturer Date: </b>{new Date(record['Manufacturing Date']).toLocaleDateString()} </p>
                      <p><b>Type: </b>{record.Type}</p>
                    </div>
                  </>)
              }}
              className="mt-3 mx-auto text-xs sm:text-base"
            />
          </div>
        </Content>
      )}

      
    </div>
  )
}
export default Home;

// For SSR
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(`${process.env.API_URL}/api/hello`);
    const vehicles = await res.json();

    // Generate keys for each row so that they can have a unique identifier for expanding tables
    const keyVehicles = vehicles.map((item: Vehicle, index: number) => ({
      ...item,
      key: index
    }));

    store.dispatch(setData(keyVehicles));
    return {
      props: {
        vehicles,
      }
    }
  }
)

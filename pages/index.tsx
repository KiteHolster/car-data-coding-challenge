import { Button, Input, InputRef, Popover, Space, Table, TableColumnType } from "antd";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/app/store";
import { importData, setData } from "@/app/store/slices/vehicle";
import { useSelector } from "react-redux";
import Title from "antd/es/typography/Title";
import { useCallback, useEffect, useRef, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Vehicle } from "@/models/vehicle";
import { FilterDropdownProps } from "antd/es/table/interface";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import TableFeature from "@/components/TableFeature";
import { Content } from "antd/es/layout/layout";
import React from "react";

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

  // Sorting related useState
  const [sortAscending, setSortAscending] = useState(true);

  // Screen size handling
  const [isDesktop, setDesktop] = useState(false);
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  
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

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const handleMenuClick = () => {
    setShowFilterMobile(!showFilterMobile);
  }

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  useEffect(() => {
    setVehicleList(importedVehicle);
  }, [importedVehicle])

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

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<Vehicle> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
            onClick={() => clearFilters && handleReset(clearFilters)}
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

  const columns= [
    {
      title: "Name/Model/Manufacturer",
      render: (car: any) => (
        <>
          {car.Name}
            <br />
          {car.Model}
        </>
      ),
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
  ];

  const content = (
    <div className="block">
      <TableFeature
        vehicleList={vehicleList}
        onSorterChange={onSorterChange}
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
      />
      <a onClick={handleMenuClick}>Close</a>
    </div>
  );

  return (

    <div>
      {vehicleList?.length === 0 || isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
      ):(
        <Content className="bg-gradient-to-r from-gray-200 h-screen">
          <div className="px-6 py-6 mx-auto w-25 items-center">
            <Title className="text-center mt-8">Vehicle Information</Title>
            <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-2">
                {isDesktop ? (
                  <TableFeature
                    vehicleList={vehicleList}
                    onSorterChange={onSorterChange}
                    sortAscending={sortAscending}
                    setSortAscending={setSortAscending}
                  />
                ) : (
                  <>
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
            </div>
            <Table
              dataSource={vehicleList}
              // @ts-ignore
              columns={columns}
              pagination={{ pageSize: isDesktop ? 10 : 50 }}
              scroll={{ y: isDesktop ? 800 : 240 }}
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

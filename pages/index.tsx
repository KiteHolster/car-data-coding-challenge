import { Button, Input, InputRef, Space, Table, TableColumnType } from "antd";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/app/store";
import { importData, setData } from "@/app/store/slices/vehicle";
import { useSelector } from "react-redux";
import Title from "antd/es/typography/Title";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { Vehicle } from "@/models/vehicle";
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from "@ant-design/icons";

type DataIndex = keyof Vehicle;

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, setSearchText] = useState('');
  const [, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

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

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<Vehicle> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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

  const vehicleList = useSelector(importData);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'Model',
      dataIndex: 'Model',
      key: 'Model',
      ...getColumnSearchProps('Model'),
    },
    {
      title: 'Type',
      dataIndex: 'Type',
    },
    {
      title: 'Manufacturer',
      dataIndex: 'Manufacturer',
    },
    {
      title: 'Manufacturing Date',
      dataIndex: 'Manufacturing Date',
    },
    {
      title: 'Seating',
      dataIndex: 'Seating',
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
  return (

    <div>
      {vehicleList?.length === 0 || isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)}/>
      ):(
        <div className="px-6 py-6 mx-auto w-25 bg-">
          <Title className="text-center mt-8">Vehicle Information</Title>
          <div className="md:hidden block">Some Text</div>
          <Table dataSource={vehicleList} columns={columns} />
        </div>
      )}
    </div>
  )
}
export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const vehicles = await res.json();
    console.log(vehicles);

    store.dispatch(setData(vehicles));
    return {
      props: {
        vehicles,
      }
    }
  }
)

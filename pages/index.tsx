import { Table } from "antd";
import vehicles from '../data/vehicle_data.json';
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/app/store";
import { importData, setData } from "@/app/store/slices/vehicle";
import { useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  const vehicleList = useSelector(importData);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Model',
      dataIndex: 'Model',
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
          <Search placeholder="input search text" />
          <Table dataSource={vehicleList} columns={columns} />
        </div>
      )}
    </div>
  )
}
export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(setData(vehicles));
    return {
      props: {}
    }
  }
)

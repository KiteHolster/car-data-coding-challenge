import { Table } from "antd";
import vehicles from '../data/vehicle_data.json';
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "@/app/store";
import { importData, setData } from "@/app/store/slices/vehicle";
import { useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { useState } from "react";

 const Home: NextPage = () => {
  
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
      {vehicleList?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="px-6 py-6 mx-auto w-25">
            <Title className="text-center mt-8">Vehicle Information</Title>
            <div className="md:hidden block">Some Text</div>
            <Search placeholder="input search text" />
            <Table dataSource={vehicleList} columns={columns} />
          </div>
        </>
      )}
    </div>
  );
}
export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(setData(vehicles));
    console.log(context);
    return {
      props: {}
    }
  }
)

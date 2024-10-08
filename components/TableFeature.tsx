import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Select, Switch, Tooltip, Upload, UploadProps } from "antd";
import { useDispatch } from "react-redux";
import { CSVLink } from "react-csv";
import { Vehicle } from "@/models/vehicle";
import Papa from 'papaparse';
import { setData } from "@/app/store/slices/vehicle";
import moment from "moment";


interface TableFeatureProps {
    vehicleList: Vehicle[];
    onSorterChange: (selectedSorter: any) => void;
    sortAscending: boolean;
    setSortAscending: (sort: boolean) => void;
    addToFavourite: () => void;
    hasSelected: boolean;
}

const TableFeature: React.FC<TableFeatureProps> = ( TableFeatureProps ) => {
    const dispatch = useDispatch()

    const checkInvalidFile = (item: any): boolean => {
        // Function to check if the file is in a valid form
        if (item.length != 6) {
            return false;
        }
        const validStrings = item.slice(0, 5).every((field: any) => {
            return typeof field === "string" && field.length != 0;
        });

        const validDate = moment(item[4]).isValid();

        const integerSeats = typeof Number.parseInt(item[5]) == "number";

        return validStrings && validDate && integerSeats;
    }

    const props: UploadProps = {
        // Prepping for the uploading of data
        accept: ".txt, .csv",
        beforeUpload: (file) => {
            Papa.parse(file, {
                skipEmptyLines: true,
                complete: function(results) {
                    const { data } = results;
                    const validData = data.every((item: any) => {
                        return checkInvalidFile(item)}
                    );
                    // Key generation for each item in the list
                    const highestCurrentKey = TableFeatureProps.vehicleList.length;
                    if(validData && data.length != 0) {
                        const dataFormattedList = data.map((item: any, index: number) => {
                            return {
                                key: highestCurrentKey + index,
                                Name: item[0],
                                Model: item[1],
                                Type: item[2],
                                Manufacturer: item[3],
                                'Manufacturing Date': item[4],
                                Seating: item[5]
                            }
                        })
                        const newData = [...TableFeatureProps.vehicleList, ...dataFormattedList]
                        dispatch(setData(newData))
                        message.success(`${file.name} successfully uploaded and parsed!`);
                    } else {
                        message.error("Invalid data format in the CSV file. Please check your data.");
                    }
                }
            });
        },
        maxCount:1,
        showUploadList: false,
    };

    return(
        <>
            <Switch
                checkedChildren="asc"
                unCheckedChildren="dsc"
                defaultChecked={TableFeatureProps.sortAscending}
                onChange={TableFeatureProps.setSortAscending}
                className="block mb-3"
            ></Switch>
            <Select onChange={TableFeatureProps.onSorterChange} placeholder="Select a column" className="block md:ml-6 mb-3 w-32 lg:w-40">
                <Select.Option value = "Name">Name</Select.Option>
                <Select.Option value = "Model">Model</Select.Option>
                <Select.Option value = "Type">Type</Select.Option>
                <Select.Option value = "Manufacturer">Manufacturer</Select.Option>
                <Select.Option value = "Seating">Seating</Select.Option>
            </Select>
            <Tooltip title="Downloads a csv file">
                <Button className="block mb-3 w-32">
                    <CSVLink data={TableFeatureProps.vehicleList}>Download</CSVLink>
                </Button>
            </Tooltip>
            <Tooltip title="Please upload a csv file with the rows and columns in the following format Name | Model | Type | Manufacturer | Manufacturing Date | Seating. Max of 1 file">
                <Upload {...props} className="block mb-3">
                    <Button icon={<UploadOutlined />} className="w-32">Upload</Button>
                </Upload>
            </Tooltip>
            <Button
                type="primary"
                onClick={TableFeatureProps.addToFavourite}
                disabled={!TableFeatureProps.hasSelected}
                className="w-32 block mb-3 disabled:bg-white disabled:text-grey"
                >
                Add Favourite
            </Button>
        </>
    )
}

export default TableFeature;
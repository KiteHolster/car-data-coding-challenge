// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Vehicle = {
  Name: string
	Model: string
  Type: string
	Manufacturer: string
	'Manufacturing Date': string
	Seating: number
};

type DataList = Vehicle[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataList>,
) {
  res.status(200).json([
    {
      "Name": "Land Rover Volt",
      "Model": "Altima",
      "Type": "Sedan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2026-08-24T02:47:36.790Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Expedition",
      "Model": "Impala",
      "Type": "Passenger Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2028-01-19T15:34:02.700Z",
      "Seating": 3
    },
    {
      "Name": "Nissan Durango",
      "Model": "CTS",
      "Type": "Hatchback",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2023-09-30T15:38:46.209Z",
      "Seating": 4
    },
    {
      "Name": "Nissan El Camino",
      "Model": "Sentra",
      "Type": "Sedan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2028-06-06T22:20:12.289Z",
      "Seating": 2
    },
    {
      "Name": "Rolls Royce Challenger",
      "Model": "Sentra",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-03-12T18:50:10.735Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Prius",
      "Model": "Escalade",
      "Type": "Convertible",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2024-09-19T23:00:31.097Z",
      "Seating": 5
    },
    {
      "Name": "Mercedes Benz Grand Caravan",
      "Model": "F-150",
      "Type": "Minivan",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-10-26T15:24:02.998Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari 2",
      "Model": "A4",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2028-08-17T20:54:13.627Z",
      "Seating": 3
    },
    {
      "Name": "Mazda Roadster",
      "Model": "V90",
      "Type": "Minivan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2025-10-09T14:46:59.099Z",
      "Seating": 5
    },
    {
      "Name": "Land Rover Alpine",
      "Model": "El Camino",
      "Type": "Hatchback",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2028-02-09T00:26:12.215Z",
      "Seating": 2
    },
    {
      "Name": "Dodge Expedition",
      "Model": "LeBaron",
      "Type": "SUV",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2025-08-27T20:21:22.529Z",
      "Seating": 7
    },
    {
      "Name": "Mazda Ranchero",
      "Model": "Countach",
      "Type": "Passenger Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-07-09T04:28:40.955Z",
      "Seating": 7
    },
    {
      "Name": "Lamborghini Prius",
      "Model": "Model S",
      "Type": "Convertible",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2027-02-02T03:03:41.030Z",
      "Seating": 6
    },
    {
      "Name": "BMW Altima",
      "Model": "LeBaron",
      "Type": "Wagon",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-12-12T14:47:00.631Z",
      "Seating": 5
    },
    {
      "Name": "Nissan V90",
      "Model": "Camry",
      "Type": "Convertible",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2025-05-30T10:42:26.034Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Beetle",
      "Model": "1",
      "Type": "Convertible",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2025-09-21T05:12:29.024Z",
      "Seating": 7
    },
    {
      "Name": "Kia Impala",
      "Model": "Expedition",
      "Type": "SUV",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-04-14T21:12:06.598Z",
      "Seating": 7
    },
    {
      "Name": "Polestar Grand Caravan",
      "Model": "Land Cruiser",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-03-29T03:26:39.537Z",
      "Seating": 6
    },
    {
      "Name": "Jeep PT Cruiser",
      "Model": "Taurus",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-01-19T20:01:14.725Z",
      "Seating": 6
    },
    {
      "Name": "Mini CX-9",
      "Model": "V90",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-03-17T14:24:34.436Z",
      "Seating": 2
    },
    {
      "Name": "Jaguar Accord",
      "Model": "Camaro",
      "Type": "Coupe",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2027-07-20T21:10:54.748Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Fiesta",
      "Model": "Wrangler",
      "Type": "Wagon",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-11-15T20:20:54.738Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Wrangler",
      "Model": "Roadster",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-12-04T06:32:41.498Z",
      "Seating": 3
    },
    {
      "Name": "Mazda Impala",
      "Model": "CTS",
      "Type": "Coupe",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-01-24T22:23:36.776Z",
      "Seating": 6
    },
    {
      "Name": "Kia Impala",
      "Model": "Mustang",
      "Type": "Coupe",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2028-05-02T22:05:52.688Z",
      "Seating": 6
    },
    {
      "Name": "Ferrari Beetle",
      "Model": "Camry",
      "Type": "Convertible",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-06-07T21:01:12.783Z",
      "Seating": 5
    },
    {
      "Name": "Fiat PT Cruiser",
      "Model": "Land Cruiser",
      "Type": "SUV",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-12-27T05:55:00.583Z",
      "Seating": 5
    },
    {
      "Name": "Bentley Camry",
      "Model": "Spyder",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-01-30T09:29:07.740Z",
      "Seating": 2
    },
    {
      "Name": "Cadillac PT Cruiser",
      "Model": "Accord",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-07-01T10:15:17.526Z",
      "Seating": 2
    },
    {
      "Name": "Porsche Model S",
      "Model": "Expedition",
      "Type": "Coupe",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2024-01-19T03:19:23.784Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini ATS",
      "Model": "Roadster",
      "Type": "Wagon",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-10-03T19:02:39.091Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Colorado",
      "Model": "Alpine",
      "Type": "SUV",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2026-03-08T17:24:14.944Z",
      "Seating": 4
    },
    {
      "Name": "Polestar CX-9",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-12-21T23:43:13.409Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Colorado",
      "Model": "Impala",
      "Type": "Minivan",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-11-21T03:44:22.585Z",
      "Seating": 7
    },
    {
      "Name": "Dodge Prius",
      "Model": "Mercielago",
      "Type": "Hatchback",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-07-18T02:57:44.012Z",
      "Seating": 5
    },
    {
      "Name": "Mazda Grand Cherokee",
      "Model": "911",
      "Type": "Coupe",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-06-05T08:21:36.916Z",
      "Seating": 5
    },
    {
      "Name": "Volvo Taurus",
      "Model": "LeBaron",
      "Type": "Minivan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2024-01-25T14:15:13.759Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Volt",
      "Model": "V90",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2023-06-15T12:25:03.128Z",
      "Seating": 2
    },
    {
      "Name": "Maserati V90",
      "Model": "Durango",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-04-10T14:01:14.247Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Malibu",
      "Model": "V90",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-03-26T22:15:00.154Z",
      "Seating": 3
    },
    {
      "Name": "Ford Jetta",
      "Model": "Explorer",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-09-01T23:03:35.676Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Malibu",
      "Model": "Volt",
      "Type": "Wagon",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-04-19T22:36:24.452Z",
      "Seating": 5
    },
    {
      "Name": "Rolls Royce Alpine",
      "Model": "A8",
      "Type": "Sedan",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-12-14T09:00:08.158Z",
      "Seating": 4
    },
    {
      "Name": "Jeep ATS",
      "Model": "Durango",
      "Type": "Cargo Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-06-16T11:38:41.141Z",
      "Seating": 7
    },
    {
      "Name": "Mazda Accord",
      "Model": "Model 3",
      "Type": "Coupe",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2026-04-07T17:28:55.798Z",
      "Seating": 7
    },
    {
      "Name": "Hyundai Altima",
      "Model": "Sentra",
      "Type": "Cargo Van",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2028-05-11T01:38:13.756Z",
      "Seating": 6
    },
    {
      "Name": "Jeep LeBaron",
      "Model": "Ranchero",
      "Type": "Hatchback",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-08-06T03:48:08.598Z",
      "Seating": 5
    },
    {
      "Name": "Jaguar Charger",
      "Model": "Civic",
      "Type": "Wagon",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-09-22T07:00:37.451Z",
      "Seating": 3
    },
    {
      "Name": "Polestar XC90",
      "Model": "El Camino",
      "Type": "Sedan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-06-07T14:49:40.372Z",
      "Seating": 5
    },
    {
      "Name": "Chevrolet Fortwo",
      "Model": "Focus",
      "Type": "SUV",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-10-23T11:34:43.316Z",
      "Seating": 2
    },
    {
      "Name": "Polestar El Camino",
      "Model": "A8",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2026-04-13T10:21:45.938Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Grand Cherokee",
      "Model": "2",
      "Type": "Sedan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-03-15T23:06:06.451Z",
      "Seating": 3
    },
    {
      "Name": "Kia Mercielago",
      "Model": "Expedition",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-09-12T04:30:09.596Z",
      "Seating": 2
    },
    {
      "Name": "Fiat Model 3",
      "Model": "Element",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2028-11-12T07:56:49.057Z",
      "Seating": 5
    },
    {
      "Name": "Volkswagen Golf",
      "Model": "A8",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2024-08-12T08:56:16.617Z",
      "Seating": 7
    },
    {
      "Name": "Volvo Grand Caravan",
      "Model": "Impala",
      "Type": "SUV",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2023-01-24T15:31:50.753Z",
      "Seating": 4
    },
    {
      "Name": "Chevrolet Fortwo",
      "Model": "Impala",
      "Type": "Hatchback",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2026-12-30T11:54:51.630Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin Model 3",
      "Model": "PT Cruiser",
      "Type": "SUV",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2024-12-29T17:22:49.464Z",
      "Seating": 6
    },
    {
      "Name": "Audi Element",
      "Model": "Charger",
      "Type": "Cargo Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2028-10-13T23:29:32.007Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini A8",
      "Model": "LeBaron",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2026-06-03T23:02:27.388Z",
      "Seating": 3
    },
    {
      "Name": "Dodge Grand Cherokee",
      "Model": "PT Cruiser",
      "Type": "Passenger Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-08-23T12:07:29.472Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Mercielago",
      "Model": "Roadster",
      "Type": "SUV",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-05-18T14:16:44.808Z",
      "Seating": 6
    },
    {
      "Name": "Land Rover CX-9",
      "Model": "Sentra",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2026-05-11T09:45:17.873Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari Altima",
      "Model": "Grand Caravan",
      "Type": "Sedan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-03-18T01:32:14.716Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Altima",
      "Model": "Camaro",
      "Type": "Sedan",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-02-17T15:17:42.223Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin A8",
      "Model": "Countach",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-10-23T09:56:47.159Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Roadster",
      "Model": "Grand Caravan",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-09-21T21:01:51.559Z",
      "Seating": 3
    },
    {
      "Name": "Bentley Prius",
      "Model": "Colorado",
      "Type": "Hatchback",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2024-01-24T20:54:43.455Z",
      "Seating": 6
    },
    {
      "Name": "Porsche 2",
      "Model": "2",
      "Type": "Wagon",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2026-11-25T20:40:15.254Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler 1",
      "Model": "Ranchero",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-11-16T23:26:40.596Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin 2",
      "Model": "Durango",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-03-28T00:45:59.504Z",
      "Seating": 5
    },
    {
      "Name": "Smart Ranchero",
      "Model": "PT Cruiser",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2024-05-29T07:43:34.960Z",
      "Seating": 3
    },
    {
      "Name": "Smart Model 3",
      "Model": "Impala",
      "Type": "Coupe",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-04-23T04:15:19.753Z",
      "Seating": 7
    },
    {
      "Name": "Dodge Fortwo",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2024-07-28T04:51:00.657Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Grand Caravan",
      "Model": "El Camino",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2027-10-30T22:53:30.321Z",
      "Seating": 2
    },
    {
      "Name": "Jeep Aventador",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-05-28T09:18:28.262Z",
      "Seating": 6
    },
    {
      "Name": "BMW Aventador",
      "Model": "Focus",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-06-18T01:10:24.260Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover Charger",
      "Model": "Grand Cherokee",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-03-18T05:34:26.128Z",
      "Seating": 6
    },
    {
      "Name": "Volvo Grand Cherokee",
      "Model": "Escalade",
      "Type": "Passenger Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-05-18T14:48:40.986Z",
      "Seating": 4
    },
    {
      "Name": "Volvo Accord",
      "Model": "Charger",
      "Type": "Wagon",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-08-05T19:54:00.095Z",
      "Seating": 6
    },
    {
      "Name": "Porsche El Camino",
      "Model": "A4",
      "Type": "Passenger Van",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2028-06-20T01:07:44.162Z",
      "Seating": 4
    },
    {
      "Name": "Audi A8",
      "Model": "Aventador",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2026-01-30T05:42:58.796Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Mercielago",
      "Model": "Civic",
      "Type": "Minivan",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-06-11T08:49:34.192Z",
      "Seating": 4
    },
    {
      "Name": "Tesla CTS",
      "Model": "Golf",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-11-21T03:32:45.043Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Sentra",
      "Model": "Grand Caravan",
      "Type": "Passenger Van",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-11-06T21:15:57.715Z",
      "Seating": 6
    },
    {
      "Name": "Mini Alpine",
      "Model": "Fiesta",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2024-07-13T06:16:19.859Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Silverado",
      "Model": "F-150",
      "Type": "Minivan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2026-11-03T01:41:12.377Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Fortwo",
      "Model": "Escalade",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-11-16T23:21:25.293Z",
      "Seating": 4
    },
    {
      "Name": "Ford Alpine",
      "Model": "ATS",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-10-07T12:23:38.018Z",
      "Seating": 2
    },
    {
      "Name": "Tesla Aventador",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-12-29T10:46:45.928Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin Civic",
      "Model": "Model S",
      "Type": "Minivan",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-05-18T23:03:04.869Z",
      "Seating": 6
    },
    {
      "Name": "Jeep Focus",
      "Model": "Grand Caravan",
      "Type": "Wagon",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-05-08T12:53:27.423Z",
      "Seating": 5
    },
    {
      "Name": "Mazda A8",
      "Model": "Element",
      "Type": "Sedan",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-03-29T13:42:46.959Z",
      "Seating": 3
    },
    {
      "Name": "Hyundai Wrangler",
      "Model": "Camry",
      "Type": "Sedan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-05-22T10:27:59.283Z",
      "Seating": 3
    },
    {
      "Name": "Chrysler Escalade",
      "Model": "Volt",
      "Type": "SUV",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2028-08-05T04:30:32.602Z",
      "Seating": 4
    },
    {
      "Name": "Cadillac Focus",
      "Model": "Model T",
      "Type": "Wagon",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-02-09T10:05:45.010Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Taurus",
      "Model": "Mercielago",
      "Type": "Cargo Van",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-05-09T20:12:19.061Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti Corvette",
      "Model": "Roadster",
      "Type": "Convertible",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-09-20T22:16:35.343Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Cruze",
      "Model": "Colorado",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2028-07-06T17:38:48.674Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet 2",
      "Model": "Mustang",
      "Type": "Cargo Van",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2024-02-14T20:46:32.957Z",
      "Seating": 6
    },
    {
      "Name": "Audi Accord",
      "Model": "Model T",
      "Type": "Convertible",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-01-07T22:42:01.630Z",
      "Seating": 3
    },
    {
      "Name": "Porsche El Camino",
      "Model": "Grand Caravan",
      "Type": "SUV",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-07-04T04:57:32.457Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Expedition",
      "Model": "A8",
      "Type": "Coupe",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-12-07T10:12:28.663Z",
      "Seating": 6
    },
    {
      "Name": "Kia Countach",
      "Model": "Wrangler",
      "Type": "Cargo Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2026-05-27T07:47:39.581Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Mustang",
      "Model": "Expedition",
      "Type": "Convertible",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2026-08-07T19:43:00.283Z",
      "Seating": 5
    },
    {
      "Name": "Dodge Grand Caravan",
      "Model": "1",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-01-12T03:07:53.724Z",
      "Seating": 6
    },
    {
      "Name": "Rolls Royce Grand Caravan",
      "Model": "Roadster",
      "Type": "Minivan",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-06-01T16:54:39.322Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Element",
      "Model": "A8",
      "Type": "Sedan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-05-15T14:01:19.154Z",
      "Seating": 6
    },
    {
      "Name": "Tesla Grand Cherokee",
      "Model": "Aventador",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-04-04T00:14:38.490Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti XC90",
      "Model": "ATS",
      "Type": "SUV",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-11-12T20:09:14.091Z",
      "Seating": 6
    },
    {
      "Name": "Volvo ATS",
      "Model": "Silverado",
      "Type": "Cargo Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-05-10T15:21:43.331Z",
      "Seating": 6
    },
    {
      "Name": "BMW 1",
      "Model": "Expedition",
      "Type": "Wagon",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-08-25T23:38:39.870Z",
      "Seating": 5
    },
    {
      "Name": "Porsche Aventador",
      "Model": "V90",
      "Type": "Passenger Van",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2026-11-11T17:40:23.273Z",
      "Seating": 4
    },
    {
      "Name": "Polestar 2",
      "Model": "Roadster",
      "Type": "Minivan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2025-03-01T11:55:06.112Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Fiesta",
      "Model": "Focus",
      "Type": "Sedan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2028-03-13T12:14:41.399Z",
      "Seating": 6
    },
    {
      "Name": "Honda Ranchero",
      "Model": "Cruze",
      "Type": "Convertible",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-10-29T20:59:28.852Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet PT Cruiser",
      "Model": "A8",
      "Type": "Convertible",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-10-11T12:37:30.444Z",
      "Seating": 6
    },
    {
      "Name": "Aston Martin XTS",
      "Model": "Explorer",
      "Type": "Convertible",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-10-13T11:58:25.101Z",
      "Seating": 5
    },
    {
      "Name": "Porsche Camaro",
      "Model": "XC90",
      "Type": "Passenger Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-10-11T09:57:40.685Z",
      "Seating": 4
    },
    {
      "Name": "Volvo Alpine",
      "Model": "F-150",
      "Type": "Hatchback",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-01-30T04:34:19.218Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Mustang",
      "Model": "XTS",
      "Type": "Wagon",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-08-20T14:55:49.060Z",
      "Seating": 4
    },
    {
      "Name": "Toyota XC90",
      "Model": "Charger",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-08-23T21:09:24.437Z",
      "Seating": 4
    },
    {
      "Name": "Honda Spyder",
      "Model": "Roadster",
      "Type": "Sedan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-02-01T21:24:41.426Z",
      "Seating": 2
    },
    {
      "Name": "Tesla 1",
      "Model": "Model T",
      "Type": "Convertible",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2028-11-29T00:45:24.352Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen ATS",
      "Model": "Challenger",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-11-10T12:31:58.833Z",
      "Seating": 2
    },
    {
      "Name": "Fiat CX-9",
      "Model": "Expedition",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-07-30T22:53:20.352Z",
      "Seating": 7
    },
    {
      "Name": "Porsche ATS",
      "Model": "Expedition",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-11-25T02:58:53.962Z",
      "Seating": 2
    },
    {
      "Name": "Cadillac CX-9",
      "Model": "Aventador",
      "Type": "Minivan",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2023-09-27T05:51:35.725Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Spyder",
      "Model": "Model S",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-01-12T03:37:16.353Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Altima",
      "Model": "Fiesta",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-02-09T04:46:45.787Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Altima",
      "Model": "Wrangler",
      "Type": "Sedan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2023-01-15T14:53:04.721Z",
      "Seating": 4
    },
    {
      "Name": "Nissan 1",
      "Model": "Model S",
      "Type": "Wagon",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2026-06-02T18:43:22.178Z",
      "Seating": 2
    },
    {
      "Name": "BMW Beetle",
      "Model": "F-150",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-01-09T19:34:47.143Z",
      "Seating": 7
    },
    {
      "Name": "Kia Sentra",
      "Model": "Colorado",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2026-09-23T11:05:34.319Z",
      "Seating": 6
    },
    {
      "Name": "BMW Prius",
      "Model": "V90",
      "Type": "Passenger Van",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2023-05-13T22:32:23.296Z",
      "Seating": 6
    },
    {
      "Name": "Rolls Royce Altima",
      "Model": "XC90",
      "Type": "Convertible",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2026-03-15T10:05:14.013Z",
      "Seating": 3
    },
    {
      "Name": "Hyundai F-150",
      "Model": "Civic",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-07-03T10:13:26.854Z",
      "Seating": 4
    },
    {
      "Name": "Ford Prius",
      "Model": "Durango",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-08-18T09:37:29.843Z",
      "Seating": 3
    },
    {
      "Name": "Mercedes Benz Challenger",
      "Model": "Colorado",
      "Type": "Passenger Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2028-09-15T01:32:37.767Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac 911",
      "Model": "Jetta",
      "Type": "Convertible",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-03-07T04:02:08.292Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet ATS",
      "Model": "Element",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2028-06-01T23:07:05.938Z",
      "Seating": 6
    },
    {
      "Name": "Mini Fiesta",
      "Model": "Prius",
      "Type": "Convertible",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-06-04T08:25:27.816Z",
      "Seating": 6
    },
    {
      "Name": "BMW Taurus",
      "Model": "ATS",
      "Type": "Coupe",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-08-09T00:09:40.643Z",
      "Seating": 6
    },
    {
      "Name": "Audi Charger",
      "Model": "Taurus",
      "Type": "Cargo Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-09-16T10:36:08.446Z",
      "Seating": 4
    },
    {
      "Name": "Mini XTS",
      "Model": "CTS",
      "Type": "Passenger Van",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-11-06T21:04:25.552Z",
      "Seating": 6
    },
    {
      "Name": "Land Rover Impala",
      "Model": "Beetle",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-12-19T07:25:23.108Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Aventador",
      "Model": "Accord",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-10-31T00:31:22.085Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Spyder",
      "Model": "Model T",
      "Type": "Wagon",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2023-07-08T00:16:53.654Z",
      "Seating": 4
    },
    {
      "Name": "Chevrolet Ranchero",
      "Model": "Silverado",
      "Type": "Convertible",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-04-30T14:23:27.280Z",
      "Seating": 2
    },
    {
      "Name": "Cadillac LeBaron",
      "Model": "Expedition",
      "Type": "Passenger Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-08-12T14:38:33.514Z",
      "Seating": 7
    },
    {
      "Name": "Rolls Royce El Camino",
      "Model": "Grand Caravan",
      "Type": "Sedan",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2028-03-21T03:00:48.936Z",
      "Seating": 6
    },
    {
      "Name": "Porsche Altima",
      "Model": "Countach",
      "Type": "Minivan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-08-14T12:34:38.491Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari Impala",
      "Model": "ATS",
      "Type": "Convertible",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2028-06-30T16:46:49.745Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Durango",
      "Model": "CTS",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-06-21T10:26:06.465Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Challenger",
      "Model": "XC90",
      "Type": "Coupe",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2025-10-24T12:43:44.287Z",
      "Seating": 5
    },
    {
      "Name": "Chevrolet Model T",
      "Model": "Aventador",
      "Type": "Sedan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-06-15T20:26:54.206Z",
      "Seating": 6
    },
    {
      "Name": "Porsche Malibu",
      "Model": "XTS",
      "Type": "Passenger Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-03-03T19:48:24.171Z",
      "Seating": 7
    },
    {
      "Name": "Hyundai Roadster",
      "Model": "Malibu",
      "Type": "Sedan",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2025-02-05T07:44:15.929Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Camaro",
      "Model": "Aventador",
      "Type": "Minivan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-07-29T21:26:16.754Z",
      "Seating": 7
    },
    {
      "Name": "Land Rover Mercielago",
      "Model": "Beetle",
      "Type": "Wagon",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-02-14T05:33:39.978Z",
      "Seating": 4
    },
    {
      "Name": "Fiat Taurus",
      "Model": "Colorado",
      "Type": "Wagon",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-06-27T20:39:56.798Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Fiesta",
      "Model": "Challenger",
      "Type": "SUV",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2026-11-24T19:53:44.774Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz CTS",
      "Model": "Durango",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2027-09-30T17:25:38.168Z",
      "Seating": 3
    },
    {
      "Name": "Chrysler A8",
      "Model": "Civic",
      "Type": "Hatchback",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-05-01T00:30:12.742Z",
      "Seating": 6
    },
    {
      "Name": "Ferrari Land Cruiser",
      "Model": "1",
      "Type": "Hatchback",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-10-21T19:43:08.231Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Grand Cherokee",
      "Model": "Expedition",
      "Type": "Sedan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2028-04-02T18:53:49.596Z",
      "Seating": 6
    },
    {
      "Name": "Mercedes Benz Model T",
      "Model": "Focus",
      "Type": "Coupe",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-06-25T05:39:50.220Z",
      "Seating": 2
    },
    {
      "Name": "BMW Accord",
      "Model": "Silverado",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-12-20T22:18:31.275Z",
      "Seating": 3
    },
    {
      "Name": "Rolls Royce Model S",
      "Model": "ATS",
      "Type": "Cargo Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-07-29T07:30:50.134Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin Civic",
      "Model": "Corvette",
      "Type": "Passenger Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-01-19T00:21:56.111Z",
      "Seating": 2
    },
    {
      "Name": "Dodge Model S",
      "Model": "Jetta",
      "Type": "Cargo Van",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-05-07T13:19:23.923Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Roadster",
      "Model": "Escalade",
      "Type": "Wagon",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2025-12-12T07:21:47.775Z",
      "Seating": 6
    },
    {
      "Name": "Toyota CX-9",
      "Model": "A8",
      "Type": "Convertible",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-03-04T19:48:34.404Z",
      "Seating": 4
    },
    {
      "Name": "Porsche Civic",
      "Model": "Model T",
      "Type": "Passenger Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-08-07T05:20:44.727Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Fortwo",
      "Model": "Golf",
      "Type": "Wagon",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-06-27T23:35:33.777Z",
      "Seating": 4
    },
    {
      "Name": "Mazda 2",
      "Model": "CX-9",
      "Type": "Minivan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-08-18T12:39:11.146Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler Charger",
      "Model": "Countach",
      "Type": "Wagon",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-05-27T00:43:04.675Z",
      "Seating": 6
    },
    {
      "Name": "BMW Wrangler",
      "Model": "Alpine",
      "Type": "Passenger Van",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2027-02-28T08:37:45.956Z",
      "Seating": 6
    },
    {
      "Name": "Jaguar Grand Cherokee",
      "Model": "Impala",
      "Type": "Wagon",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-11-16T13:11:57.330Z",
      "Seating": 6
    },
    {
      "Name": "Mini PT Cruiser",
      "Model": "XTS",
      "Type": "Sedan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-04-18T15:31:21.367Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Accord",
      "Model": "Camaro",
      "Type": "Minivan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2025-02-26T06:14:52.166Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Charger",
      "Model": "Sentra",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-01-15T16:04:54.631Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Taurus",
      "Model": "Jetta",
      "Type": "Minivan",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-03-12T17:25:55.845Z",
      "Seating": 5
    },
    {
      "Name": "BMW CTS",
      "Model": "XTS",
      "Type": "Hatchback",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2023-04-13T02:42:06.719Z",
      "Seating": 4
    },
    {
      "Name": "Audi Golf",
      "Model": "Challenger",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-03-16T04:23:50.332Z",
      "Seating": 6
    },
    {
      "Name": "Tesla A8",
      "Model": "Countach",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-03-03T21:28:14.010Z",
      "Seating": 6
    },
    {
      "Name": "Polestar F-150",
      "Model": "Model T",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-07-17T09:30:44.542Z",
      "Seating": 4
    },
    {
      "Name": "Kia Taurus",
      "Model": "Explorer",
      "Type": "Minivan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-10-19T09:41:32.949Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari Grand Cherokee",
      "Model": "Altima",
      "Type": "Sedan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2028-04-08T08:02:23.783Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Model 3",
      "Model": "Explorer",
      "Type": "Cargo Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-11-18T21:26:28.906Z",
      "Seating": 6
    },
    {
      "Name": "Tesla Model S",
      "Model": "Colorado",
      "Type": "Wagon",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-09-02T15:43:33.908Z",
      "Seating": 4
    },
    {
      "Name": "Polestar 911",
      "Model": "Fiesta",
      "Type": "Minivan",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2027-05-02T14:15:11.533Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin Expedition",
      "Model": "Countach",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-02-05T07:44:05.362Z",
      "Seating": 7
    },
    {
      "Name": "Nissan Corvette",
      "Model": "Durango",
      "Type": "SUV",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-01-02T22:07:25.418Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Roadster",
      "Model": "LeBaron",
      "Type": "Coupe",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-09-07T20:11:28.722Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Land Cruiser",
      "Model": "XC90",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-07-08T09:29:54.636Z",
      "Seating": 4
    },
    {
      "Name": "Dodge Expedition",
      "Model": "Impala",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-11-25T15:19:44.544Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Taurus",
      "Model": "Roadster",
      "Type": "Cargo Van",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2026-04-21T15:07:59.286Z",
      "Seating": 4
    },
    {
      "Name": "Cadillac Model 3",
      "Model": "Durango",
      "Type": "Cargo Van",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-05-29T21:13:01.545Z",
      "Seating": 6
    },
    {
      "Name": "Bugatti Taurus",
      "Model": "Escalade",
      "Type": "SUV",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2028-07-15T12:22:28.991Z",
      "Seating": 2
    },
    {
      "Name": "Honda Fiesta",
      "Model": "Land Cruiser",
      "Type": "Passenger Van",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-06-04T04:09:11.845Z",
      "Seating": 5
    },
    {
      "Name": "Mazda Accord",
      "Model": "Volt",
      "Type": "Wagon",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2028-03-02T21:34:51.312Z",
      "Seating": 6
    },
    {
      "Name": "Bugatti Prius",
      "Model": "Colorado",
      "Type": "Hatchback",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2024-07-30T21:30:16.414Z",
      "Seating": 5
    },
    {
      "Name": "Audi Colorado",
      "Model": "Escalade",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-10-24T04:02:13.927Z",
      "Seating": 4
    },
    {
      "Name": "Polestar CX-9",
      "Model": "Impala",
      "Type": "Minivan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2024-10-14T13:39:55.897Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Model S",
      "Model": "2",
      "Type": "Convertible",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-07-12T01:34:11.039Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Colorado",
      "Model": "A4",
      "Type": "Cargo Van",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2025-06-04T10:51:50.922Z",
      "Seating": 5
    },
    {
      "Name": "Ford Durango",
      "Model": "Camry",
      "Type": "Coupe",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-04-23T02:33:54.066Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Fiesta",
      "Model": "Altima",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2023-01-12T03:19:31.450Z",
      "Seating": 3
    },
    {
      "Name": "Toyota PT Cruiser",
      "Model": "El Camino",
      "Type": "Minivan",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-11-20T14:42:28.745Z",
      "Seating": 5
    },
    {
      "Name": "BMW Volt",
      "Model": "Beetle",
      "Type": "Hatchback",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-02-04T02:11:36.428Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Grand Caravan",
      "Model": "Alpine",
      "Type": "SUV",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2027-07-14T23:15:55.204Z",
      "Seating": 6
    },
    {
      "Name": "Fiat XC90",
      "Model": "V90",
      "Type": "SUV",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2025-04-27T19:06:15.902Z",
      "Seating": 5
    },
    {
      "Name": "BMW Model T",
      "Model": "911",
      "Type": "Hatchback",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-12-17T16:14:58.593Z",
      "Seating": 3
    },
    {
      "Name": "Rolls Royce Escalade",
      "Model": "F-150",
      "Type": "Cargo Van",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2024-10-08T16:03:26.598Z",
      "Seating": 5
    },
    {
      "Name": "Toyota 911",
      "Model": "PT Cruiser",
      "Type": "Hatchback",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2026-08-10T02:02:46.837Z",
      "Seating": 3
    },
    {
      "Name": "Rolls Royce Mercielago",
      "Model": "911",
      "Type": "Convertible",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2028-07-17T02:05:11.329Z",
      "Seating": 2
    },
    {
      "Name": "Nissan Wrangler",
      "Model": "CX-9",
      "Type": "Passenger Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-10-02T22:30:08.030Z",
      "Seating": 7
    },
    {
      "Name": "Dodge Fortwo",
      "Model": "Explorer",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2028-11-29T01:04:29.671Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Civic",
      "Model": "Colorado",
      "Type": "Convertible",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-07-31T02:03:31.391Z",
      "Seating": 3
    },
    {
      "Name": "Dodge Corvette",
      "Model": "LeBaron",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-01-18T23:32:58.463Z",
      "Seating": 7
    },
    {
      "Name": "Chevrolet Altima",
      "Model": "A8",
      "Type": "SUV",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-12-25T21:25:13.630Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Countach",
      "Model": "Land Cruiser",
      "Type": "Minivan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-03-13T01:39:47.311Z",
      "Seating": 4
    },
    {
      "Name": "Mini PT Cruiser",
      "Model": "Mustang",
      "Type": "Coupe",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2028-03-31T23:55:08.976Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet XTS",
      "Model": "Roadster",
      "Type": "Hatchback",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-11-29T09:06:33.415Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Colorado",
      "Model": "Altima",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-07-25T03:31:37.414Z",
      "Seating": 6
    },
    {
      "Name": "Audi LeBaron",
      "Model": "A4",
      "Type": "Coupe",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2023-05-27T21:16:51.661Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Fortwo",
      "Model": "Impala",
      "Type": "Sedan",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-10-28T19:22:47.351Z",
      "Seating": 3
    },
    {
      "Name": "Dodge Model T",
      "Model": "Charger",
      "Type": "Hatchback",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2028-01-06T12:01:53.478Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac Silverado",
      "Model": "Challenger",
      "Type": "Coupe",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2028-09-23T21:18:10.197Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Fiesta",
      "Model": "Camry",
      "Type": "Hatchback",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-06-30T16:09:56.553Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Sentra",
      "Model": "V90",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-12-16T22:10:28.688Z",
      "Seating": 3
    },
    {
      "Name": "Smart Explorer",
      "Model": "Civic",
      "Type": "Passenger Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2028-08-31T21:29:52.659Z",
      "Seating": 3
    },
    {
      "Name": "Toyota Durango",
      "Model": "XC90",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-01-21T12:06:38.516Z",
      "Seating": 6
    },
    {
      "Name": "Jeep Fiesta",
      "Model": "CX-9",
      "Type": "Coupe",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2028-07-22T01:01:54.436Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Charger",
      "Model": "A8",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-12-25T05:45:18.269Z",
      "Seating": 5
    },
    {
      "Name": "Rolls Royce Charger",
      "Model": "Escalade",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-04-21T21:06:51.052Z",
      "Seating": 5
    },
    {
      "Name": "Porsche Impala",
      "Model": "Grand Caravan",
      "Type": "Passenger Van",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-12-26T07:07:17.676Z",
      "Seating": 5
    },
    {
      "Name": "Volvo Roadster",
      "Model": "Fiesta",
      "Type": "Sedan",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2023-09-20T09:56:00.575Z",
      "Seating": 5
    },
    {
      "Name": "Mercedes Benz Durango",
      "Model": "Escalade",
      "Type": "Minivan",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-05-21T15:04:38.438Z",
      "Seating": 2
    },
    {
      "Name": "Mercedes Benz Fiesta",
      "Model": "Escalade",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-08-22T21:14:53.702Z",
      "Seating": 2
    },
    {
      "Name": "Ford Land Cruiser",
      "Model": "ATS",
      "Type": "Cargo Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-12-28T15:07:54.107Z",
      "Seating": 6
    },
    {
      "Name": "Ford Explorer",
      "Model": "LeBaron",
      "Type": "Minivan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2024-03-19T17:53:08.349Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler F-150",
      "Model": "XC90",
      "Type": "Coupe",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-06-23T02:21:24.725Z",
      "Seating": 6
    },
    {
      "Name": "Mini Roadster",
      "Model": "F-150",
      "Type": "Cargo Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-10-14T13:50:59.079Z",
      "Seating": 6
    },
    {
      "Name": "Mercedes Benz Escalade",
      "Model": "Charger",
      "Type": "Coupe",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2028-01-29T12:23:22.061Z",
      "Seating": 4
    },
    {
      "Name": "Fiat Civic",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-11-16T19:17:00.264Z",
      "Seating": 4
    },
    {
      "Name": "Fiat Model S",
      "Model": "1",
      "Type": "Convertible",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2027-01-11T15:49:55.866Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet Challenger",
      "Model": "Colorado",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2026-05-02T03:48:00.223Z",
      "Seating": 3
    },
    {
      "Name": "Tesla Silverado",
      "Model": "XTS",
      "Type": "Sedan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2026-01-02T21:44:30.463Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Element",
      "Model": "Model 3",
      "Type": "Wagon",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-05-23T22:56:23.240Z",
      "Seating": 7
    },
    {
      "Name": "Bentley Accord",
      "Model": "Camry",
      "Type": "Passenger Van",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2023-02-03T16:25:13.256Z",
      "Seating": 3
    },
    {
      "Name": "Dodge XC90",
      "Model": "Sentra",
      "Type": "Wagon",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-12-15T11:40:54.695Z",
      "Seating": 2
    },
    {
      "Name": "Mini Jetta",
      "Model": "Aventador",
      "Type": "Coupe",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-05-24T17:55:38.575Z",
      "Seating": 7
    },
    {
      "Name": "Polestar Prius",
      "Model": "Fortwo",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-10-21T22:23:43.028Z",
      "Seating": 6
    },
    {
      "Name": "Kia Grand Cherokee",
      "Model": "Land Cruiser",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-12-14T21:55:21.230Z",
      "Seating": 3
    },
    {
      "Name": "Porsche PT Cruiser",
      "Model": "Ranchero",
      "Type": "Hatchback",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-05-04T18:10:53.916Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Malibu",
      "Model": "Countach",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-04-04T20:41:50.398Z",
      "Seating": 7
    },
    {
      "Name": "Rolls Royce F-150",
      "Model": "Explorer",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-11-13T20:06:42.950Z",
      "Seating": 3
    },
    {
      "Name": "Dodge Volt",
      "Model": "CX-9",
      "Type": "Minivan",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2027-05-26T12:53:16.513Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Cruze",
      "Model": "Model S",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-07-22T04:53:16.907Z",
      "Seating": 3
    },
    {
      "Name": "Smart Spyder",
      "Model": "Altima",
      "Type": "Minivan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2028-07-25T23:38:17.473Z",
      "Seating": 7
    },
    {
      "Name": "Rolls Royce Camry",
      "Model": "Golf",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2023-10-15T21:41:34.281Z",
      "Seating": 6
    },
    {
      "Name": "Ford Corvette",
      "Model": "Alpine",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-03-06T03:48:06.632Z",
      "Seating": 2
    },
    {
      "Name": "Kia 2",
      "Model": "V90",
      "Type": "Coupe",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2023-08-23T20:48:21.247Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet Malibu",
      "Model": "Explorer",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-04-09T02:22:54.786Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Countach",
      "Model": "V90",
      "Type": "Minivan",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-11-18T12:21:49.393Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Element",
      "Model": "XC90",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-11-04T02:12:20.011Z",
      "Seating": 4
    },
    {
      "Name": "Polestar El Camino",
      "Model": "El Camino",
      "Type": "Passenger Van",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-03-31T18:55:37.902Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Fortwo",
      "Model": "Charger",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2028-03-28T08:09:56.198Z",
      "Seating": 2
    },
    {
      "Name": "Fiat Grand Cherokee",
      "Model": "Mercielago",
      "Type": "Sedan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2025-06-11T14:20:05.637Z",
      "Seating": 6
    },
    {
      "Name": "Ford Grand Caravan",
      "Model": "Explorer",
      "Type": "Hatchback",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-10-04T00:57:33.354Z",
      "Seating": 4
    },
    {
      "Name": "Mazda Prius",
      "Model": "Explorer",
      "Type": "Cargo Van",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-01-31T16:13:28.342Z",
      "Seating": 6
    },
    {
      "Name": "Honda Silverado",
      "Model": "Focus",
      "Type": "Hatchback",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2025-07-28T06:44:04.432Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Taurus",
      "Model": "Durango",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-05-09T14:53:18.429Z",
      "Seating": 5
    },
    {
      "Name": "Honda Countach",
      "Model": "Element",
      "Type": "Wagon",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-11-03T23:16:12.523Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet Expedition",
      "Model": "Model S",
      "Type": "Cargo Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-06-20T18:13:33.848Z",
      "Seating": 5
    },
    {
      "Name": "Honda Fortwo",
      "Model": "Countach",
      "Type": "Minivan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-03-19T03:10:06.286Z",
      "Seating": 4
    },
    {
      "Name": "Nissan 2",
      "Model": "ATS",
      "Type": "Coupe",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2026-12-26T20:56:12.603Z",
      "Seating": 6
    },
    {
      "Name": "Aston Martin Wrangler",
      "Model": "Countach",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-08-04T14:48:11.808Z",
      "Seating": 5
    },
    {
      "Name": "Honda Cruze",
      "Model": "CTS",
      "Type": "Wagon",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-02-15T08:16:24.986Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler El Camino",
      "Model": "Land Cruiser",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2028-02-15T00:59:44.148Z",
      "Seating": 7
    },
    {
      "Name": "Honda Model 3",
      "Model": "LeBaron",
      "Type": "Cargo Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-04-12T18:10:45.714Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Grand Cherokee",
      "Model": "Grand Caravan",
      "Type": "Wagon",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2026-06-23T11:29:04.029Z",
      "Seating": 6
    },
    {
      "Name": "Lamborghini Alpine",
      "Model": "Charger",
      "Type": "Sedan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-02-25T02:52:03.084Z",
      "Seating": 3
    },
    {
      "Name": "Mini Wrangler",
      "Model": "Land Cruiser",
      "Type": "Hatchback",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-06-29T21:05:49.397Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Roadster",
      "Model": "CTS",
      "Type": "Hatchback",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2028-09-19T05:26:44.302Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Model 3",
      "Model": "El Camino",
      "Type": "Cargo Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2025-06-15T08:00:14.906Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Wrangler",
      "Model": "Malibu",
      "Type": "SUV",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2023-10-12T03:00:17.440Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Accord",
      "Model": "Explorer",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-06-13T15:00:34.204Z",
      "Seating": 6
    },
    {
      "Name": "Honda Model T",
      "Model": "Beetle",
      "Type": "Wagon",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2026-10-18T10:54:09.761Z",
      "Seating": 7
    },
    {
      "Name": "Mini Grand Cherokee",
      "Model": "A4",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-11-24T09:29:33.678Z",
      "Seating": 6
    },
    {
      "Name": "Jeep Volt",
      "Model": "Aventador",
      "Type": "Coupe",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2025-09-15T10:03:00.960Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin PT Cruiser",
      "Model": "Civic",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-08-02T11:32:54.111Z",
      "Seating": 7
    },
    {
      "Name": "Jeep Alpine",
      "Model": "El Camino",
      "Type": "Wagon",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-11-15T23:33:20.238Z",
      "Seating": 4
    },
    {
      "Name": "Tesla 2",
      "Model": "Camry",
      "Type": "Sedan",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-10-08T22:16:34.263Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Grand Caravan",
      "Model": "XC90",
      "Type": "Wagon",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-07-22T04:30:46.808Z",
      "Seating": 4
    },
    {
      "Name": "Chevrolet Jetta",
      "Model": "Alpine",
      "Type": "Sedan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-09-01T08:19:15.587Z",
      "Seating": 7
    },
    {
      "Name": "Toyota Golf",
      "Model": "Golf",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-12-13T07:03:41.922Z",
      "Seating": 5
    },
    {
      "Name": "Toyota Malibu",
      "Model": "Model 3",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2027-04-05T17:54:18.139Z",
      "Seating": 5
    },
    {
      "Name": "Jaguar LeBaron",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-06-14T11:50:50.614Z",
      "Seating": 3
    },
    {
      "Name": "Mercedes Benz Mustang",
      "Model": "Countach",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-05-31T00:16:37.545Z",
      "Seating": 5
    },
    {
      "Name": "Nissan F-150",
      "Model": "El Camino",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2027-02-26T23:49:13.425Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Grand Caravan",
      "Model": "Altima",
      "Type": "Hatchback",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-05-04T22:17:30.651Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Mustang",
      "Model": "Fiesta",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2027-01-20T12:28:28.494Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Fiesta",
      "Model": "CTS",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-06-24T18:44:56.155Z",
      "Seating": 3
    },
    {
      "Name": "Jeep El Camino",
      "Model": "F-150",
      "Type": "SUV",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-06-15T14:14:57.536Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Corvette",
      "Model": "Roadster",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2025-07-24T07:34:02.990Z",
      "Seating": 4
    },
    {
      "Name": "Ford F-150",
      "Model": "Accord",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-08-15T23:40:23.220Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Spyder",
      "Model": "Wrangler",
      "Type": "Cargo Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-01-07T14:47:35.515Z",
      "Seating": 7
    },
    {
      "Name": "Tesla Escalade",
      "Model": "Silverado",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-02-09T02:24:59.659Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler Beetle",
      "Model": "Explorer",
      "Type": "Passenger Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-09-02T16:10:16.104Z",
      "Seating": 4
    },
    {
      "Name": "Nissan XTS",
      "Model": "Spyder",
      "Type": "Convertible",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-05-12T06:09:20.153Z",
      "Seating": 7
    },
    {
      "Name": "Smart Ranchero",
      "Model": "LeBaron",
      "Type": "Passenger Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2028-10-29T11:46:33.162Z",
      "Seating": 7
    },
    {
      "Name": "Smart Wrangler",
      "Model": "Civic",
      "Type": "Wagon",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-10-09T00:24:15.052Z",
      "Seating": 5
    },
    {
      "Name": "Polestar Model T",
      "Model": "Alpine",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-03-21T01:11:36.658Z",
      "Seating": 3
    },
    {
      "Name": "Mini LeBaron",
      "Model": "Model T",
      "Type": "Hatchback",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-09-26T21:00:57.416Z",
      "Seating": 5
    },
    {
      "Name": "Tesla PT Cruiser",
      "Model": "PT Cruiser",
      "Type": "Sedan",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2024-02-11T00:18:51.175Z",
      "Seating": 6
    },
    {
      "Name": "BMW Mustang",
      "Model": "Impala",
      "Type": "Passenger Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2023-07-10T11:31:33.052Z",
      "Seating": 5
    },
    {
      "Name": "Land Rover Colorado",
      "Model": "PT Cruiser",
      "Type": "SUV",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2024-12-04T03:50:52.030Z",
      "Seating": 3
    },
    {
      "Name": "Dodge Countach",
      "Model": "Model T",
      "Type": "Coupe",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2025-10-04T22:30:17.832Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar XC90",
      "Model": "Land Cruiser",
      "Type": "Hatchback",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2024-06-23T18:33:04.251Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Volt",
      "Model": "Altima",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-08-04T04:42:23.394Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini CTS",
      "Model": "2",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2023-06-15T13:24:34.882Z",
      "Seating": 3
    },
    {
      "Name": "Chevrolet Volt",
      "Model": "Roadster",
      "Type": "Convertible",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2026-04-22T23:39:59.674Z",
      "Seating": 7
    },
    {
      "Name": "Mazda Civic",
      "Model": "2",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-04-23T11:34:19.173Z",
      "Seating": 4
    },
    {
      "Name": "Jeep Malibu",
      "Model": "F-150",
      "Type": "Passenger Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-05-30T08:15:42.052Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler Golf",
      "Model": "Beetle",
      "Type": "Passenger Van",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-09-26T17:20:28.846Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler Charger",
      "Model": "V90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2024-11-19T03:04:54.598Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Model S",
      "Model": "A8",
      "Type": "Convertible",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-09-30T20:13:11.270Z",
      "Seating": 5
    },
    {
      "Name": "BMW Impala",
      "Model": "Charger",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-04-11T09:28:40.563Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Focus",
      "Model": "Volt",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-05-01T22:49:01.060Z",
      "Seating": 5
    },
    {
      "Name": "Mini Charger",
      "Model": "Impala",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2024-09-05T00:48:07.152Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Grand Caravan",
      "Model": "Fortwo",
      "Type": "Passenger Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-05-16T06:56:07.175Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Model T",
      "Model": "Grand Cherokee",
      "Type": "Coupe",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-06-24T06:46:46.481Z",
      "Seating": 3
    },
    {
      "Name": "Chevrolet Ranchero",
      "Model": "Explorer",
      "Type": "Wagon",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-03-03T00:00:06.794Z",
      "Seating": 7
    },
    {
      "Name": "Ferrari Prius",
      "Model": "Malibu",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2027-08-14T05:17:39.674Z",
      "Seating": 4
    },
    {
      "Name": "Smart 2",
      "Model": "Malibu",
      "Type": "Passenger Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2025-10-16T10:56:15.902Z",
      "Seating": 7
    },
    {
      "Name": "Bentley 911",
      "Model": "Roadster",
      "Type": "Convertible",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-04-12T22:40:30.560Z",
      "Seating": 5
    },
    {
      "Name": "Kia Charger",
      "Model": "Charger",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-11-25T00:39:30.836Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Colorado",
      "Model": "Focus",
      "Type": "Minivan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-09-01T10:56:17.436Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Roadster",
      "Model": "2",
      "Type": "Minivan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2026-02-06T02:54:05.757Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler Spyder",
      "Model": "A4",
      "Type": "Hatchback",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2028-02-01T12:16:22.669Z",
      "Seating": 2
    },
    {
      "Name": "Mazda Corvette",
      "Model": "Impala",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2026-10-12T23:55:40.851Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin Explorer",
      "Model": "Camaro",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-07-03T10:57:22.513Z",
      "Seating": 7
    },
    {
      "Name": "Tesla Sentra",
      "Model": "El Camino",
      "Type": "Convertible",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2025-04-08T11:05:59.308Z",
      "Seating": 3
    },
    {
      "Name": "Audi Aventador",
      "Model": "Silverado",
      "Type": "Convertible",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2027-07-11T01:46:27.740Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Expedition",
      "Model": "A8",
      "Type": "Wagon",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-12-29T23:49:32.550Z",
      "Seating": 5
    },
    {
      "Name": "Land Rover Escalade",
      "Model": "ATS",
      "Type": "Passenger Van",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2028-11-28T17:59:39.753Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari Prius",
      "Model": "Accord",
      "Type": "Minivan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-10-27T03:05:42.863Z",
      "Seating": 7
    },
    {
      "Name": "Kia Land Cruiser",
      "Model": "Accord",
      "Type": "Wagon",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-09-25T19:28:52.273Z",
      "Seating": 6
    },
    {
      "Name": "Mercedes Benz F-150",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-01-11T01:45:55.018Z",
      "Seating": 3
    },
    {
      "Name": "Ferrari Altima",
      "Model": "Model 3",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-01-17T03:21:19.165Z",
      "Seating": 4
    },
    {
      "Name": "Ford Camaro",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-12-22T16:43:50.916Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini V90",
      "Model": "Corvette",
      "Type": "Minivan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-04-20T00:05:28.614Z",
      "Seating": 7
    },
    {
      "Name": "Land Rover Camaro",
      "Model": "Sentra",
      "Type": "Passenger Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-09-13T21:13:33.125Z",
      "Seating": 3
    },
    {
      "Name": "Maserati Beetle",
      "Model": "Fortwo",
      "Type": "Hatchback",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-03-18T13:42:59.225Z",
      "Seating": 4
    },
    {
      "Name": "Honda Alpine",
      "Model": "V90",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-08-28T02:04:02.476Z",
      "Seating": 3
    },
    {
      "Name": "Tesla Silverado",
      "Model": "Colorado",
      "Type": "Hatchback",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-03-25T21:31:03.925Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Alpine",
      "Model": "XTS",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-12-23T22:47:15.054Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen ATS",
      "Model": "Camry",
      "Type": "Convertible",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-03-04T10:43:42.303Z",
      "Seating": 6
    },
    {
      "Name": "Audi XC90",
      "Model": "Colorado",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2028-06-28T00:02:22.326Z",
      "Seating": 5
    },
    {
      "Name": "Mini Beetle",
      "Model": "F-150",
      "Type": "Cargo Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-12-23T03:14:20.163Z",
      "Seating": 7
    },
    {
      "Name": "BMW El Camino",
      "Model": "Jetta",
      "Type": "Coupe",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2026-05-12T14:59:14.252Z",
      "Seating": 7
    },
    {
      "Name": "Toyota Aventador",
      "Model": "Grand Cherokee",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-02-03T20:03:34.443Z",
      "Seating": 4
    },
    {
      "Name": "Mini Wrangler",
      "Model": "Countach",
      "Type": "Sedan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2028-04-10T21:47:11.490Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Focus",
      "Model": "Model S",
      "Type": "Passenger Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-11-01T00:56:39.072Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti Prius",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2026-03-28T14:50:55.703Z",
      "Seating": 3
    },
    {
      "Name": "Jeep ATS",
      "Model": "Camaro",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2026-09-03T08:30:59.543Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Silverado",
      "Model": "CX-9",
      "Type": "SUV",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2023-06-17T16:18:52.186Z",
      "Seating": 7
    },
    {
      "Name": "Mazda 1",
      "Model": "Sentra",
      "Type": "Coupe",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-09-06T12:48:01.695Z",
      "Seating": 2
    },
    {
      "Name": "Rolls Royce Malibu",
      "Model": "Corvette",
      "Type": "Wagon",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2023-05-04T21:02:17.601Z",
      "Seating": 6
    },
    {
      "Name": "Rolls Royce Element",
      "Model": "F-150",
      "Type": "Passenger Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-10-05T14:30:03.299Z",
      "Seating": 6
    },
    {
      "Name": "Polestar Aventador",
      "Model": "Colorado",
      "Type": "Passenger Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-12-12T11:03:59.330Z",
      "Seating": 6
    },
    {
      "Name": "Porsche Fiesta",
      "Model": "XTS",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-11-02T23:51:58.512Z",
      "Seating": 2
    },
    {
      "Name": "Porsche Countach",
      "Model": "Camry",
      "Type": "SUV",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-07-24T17:25:12.734Z",
      "Seating": 7
    },
    {
      "Name": "Chrysler Ranchero",
      "Model": "Aventador",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2026-11-12T01:55:32.046Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Land Cruiser",
      "Model": "XC90",
      "Type": "Cargo Van",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2026-08-06T09:52:33.520Z",
      "Seating": 2
    },
    {
      "Name": "Honda Aventador",
      "Model": "Durango",
      "Type": "Coupe",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-05-21T17:12:38.088Z",
      "Seating": 6
    },
    {
      "Name": "Nissan CX-9",
      "Model": "1",
      "Type": "Sedan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-12-04T06:17:27.625Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Ranchero",
      "Model": "Challenger",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2028-11-14T00:51:12.932Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Mercielago",
      "Model": "V90",
      "Type": "Minivan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-09-19T17:30:02.101Z",
      "Seating": 2
    },
    {
      "Name": "Tesla Challenger",
      "Model": "Camaro",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-08-20T16:53:10.936Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Element",
      "Model": "ATS",
      "Type": "Coupe",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-06-19T23:16:07.508Z",
      "Seating": 3
    },
    {
      "Name": "Ferrari Prius",
      "Model": "Altima",
      "Type": "Passenger Van",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-01-31T00:28:14.605Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin Corvette",
      "Model": "Colorado",
      "Type": "Convertible",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-10-06T22:44:59.069Z",
      "Seating": 3
    },
    {
      "Name": "Bentley Element",
      "Model": "Beetle",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2024-04-25T23:03:44.297Z",
      "Seating": 6
    },
    {
      "Name": "Polestar LeBaron",
      "Model": "XC90",
      "Type": "Passenger Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2028-10-16T19:06:16.541Z",
      "Seating": 4
    },
    {
      "Name": "Rolls Royce Durango",
      "Model": "Fiesta",
      "Type": "Sedan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2023-02-01T05:19:26.264Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar Civic",
      "Model": "Grand Caravan",
      "Type": "Passenger Van",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2025-06-05T00:05:50.122Z",
      "Seating": 6
    },
    {
      "Name": "Mazda 911",
      "Model": "CX-9",
      "Type": "Coupe",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-03-08T23:47:58.808Z",
      "Seating": 6
    },
    {
      "Name": "Maserati 1",
      "Model": "Expedition",
      "Type": "Passenger Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2026-08-13T17:39:34.857Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar 911",
      "Model": "Grand Caravan",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-05-11T17:29:02.315Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet Altima",
      "Model": "Taurus",
      "Type": "Hatchback",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2026-05-14T20:38:46.455Z",
      "Seating": 7
    },
    {
      "Name": "Chrysler Silverado",
      "Model": "Taurus",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2023-08-13T20:52:20.121Z",
      "Seating": 4
    },
    {
      "Name": "Polestar F-150",
      "Model": "Model T",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-02-22T20:37:56.987Z",
      "Seating": 2
    },
    {
      "Name": "Lamborghini Beetle",
      "Model": "Civic",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-01-14T18:50:24.857Z",
      "Seating": 5
    },
    {
      "Name": "Toyota Cruze",
      "Model": "Charger",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2026-12-23T08:40:10.030Z",
      "Seating": 7
    },
    {
      "Name": "Chrysler Camaro",
      "Model": "CX-9",
      "Type": "Convertible",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2025-08-31T23:15:35.997Z",
      "Seating": 4
    },
    {
      "Name": "Jeep Focus",
      "Model": "CTS",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-11-28T03:09:50.508Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti CX-9",
      "Model": "Beetle",
      "Type": "SUV",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2024-08-31T16:40:09.248Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin F-150",
      "Model": "Grand Cherokee",
      "Type": "Wagon",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-08-18T14:46:42.969Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Escalade",
      "Model": "Accord",
      "Type": "SUV",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-06-02T13:28:17.202Z",
      "Seating": 5
    },
    {
      "Name": "Ford Ranchero",
      "Model": "Impala",
      "Type": "Hatchback",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-12-05T13:33:36.741Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Prius",
      "Model": "Fiesta",
      "Type": "SUV",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2024-08-13T09:29:54.055Z",
      "Seating": 7
    },
    {
      "Name": "Jeep Colorado",
      "Model": "Roadster",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2025-02-05T02:00:30.420Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Wrangler",
      "Model": "Camry",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-05-05T18:16:40.432Z",
      "Seating": 4
    },
    {
      "Name": "Dodge XTS",
      "Model": "Roadster",
      "Type": "Passenger Van",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-08-27T19:26:33.512Z",
      "Seating": 6
    },
    {
      "Name": "Mazda Corvette",
      "Model": "Civic",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2024-10-23T08:05:31.678Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini Challenger",
      "Model": "El Camino",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-11-17T21:05:40.546Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Fiesta",
      "Model": "Taurus",
      "Type": "Convertible",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2023-05-29T12:16:06.465Z",
      "Seating": 6
    },
    {
      "Name": "Mini XC90",
      "Model": "Prius",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2028-02-07T23:35:27.831Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen El Camino",
      "Model": "Volt",
      "Type": "Sedan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-09-23T00:04:31.594Z",
      "Seating": 2
    },
    {
      "Name": "Ford Silverado",
      "Model": "Alpine",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2025-11-05T12:52:50.341Z",
      "Seating": 5
    },
    {
      "Name": "Kia Explorer",
      "Model": "Ranchero",
      "Type": "Minivan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-03-16T08:13:46.273Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Impala",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2024-05-11T04:16:08.340Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Accord",
      "Model": "Fortwo",
      "Type": "Sedan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-09-19T21:16:39.188Z",
      "Seating": 6
    },
    {
      "Name": "Ferrari Wrangler",
      "Model": "ATS",
      "Type": "Coupe",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-01-01T03:55:22.048Z",
      "Seating": 6
    },
    {
      "Name": "Honda Prius",
      "Model": "ATS",
      "Type": "Minivan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-04-10T22:03:37.429Z",
      "Seating": 5
    },
    {
      "Name": "Volkswagen CTS",
      "Model": "2",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-05-30T08:56:20.500Z",
      "Seating": 7
    },
    {
      "Name": "BMW Roadster",
      "Model": "CTS",
      "Type": "Convertible",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-11-06T20:37:57.430Z",
      "Seating": 7
    },
    {
      "Name": "Maserati Alpine",
      "Model": "ATS",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2028-05-25T21:15:24.085Z",
      "Seating": 7
    },
    {
      "Name": "Nissan Accord",
      "Model": "F-150",
      "Type": "SUV",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2026-01-13T00:30:45.565Z",
      "Seating": 6
    },
    {
      "Name": "Volvo CX-9",
      "Model": "Altima",
      "Type": "Convertible",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-03-13T16:50:30.848Z",
      "Seating": 2
    },
    {
      "Name": "Jaguar Explorer",
      "Model": "Countach",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-07-24T19:36:01.161Z",
      "Seating": 7
    },
    {
      "Name": "Lamborghini Camaro",
      "Model": "Taurus",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2023-07-06T11:48:24.578Z",
      "Seating": 5
    },
    {
      "Name": "Bentley Countach",
      "Model": "Ranchero",
      "Type": "Cargo Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-03-29T22:10:29.124Z",
      "Seating": 3
    },
    {
      "Name": "Audi Camry",
      "Model": "Alpine",
      "Type": "Hatchback",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-10-02T02:11:05.254Z",
      "Seating": 4
    },
    {
      "Name": "Dodge Camry",
      "Model": "Corvette",
      "Type": "Convertible",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-10-27T08:06:08.781Z",
      "Seating": 2
    },
    {
      "Name": "Jeep 1",
      "Model": "Impala",
      "Type": "Sedan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-11-14T14:45:14.350Z",
      "Seating": 6
    },
    {
      "Name": "Honda Aventador",
      "Model": "Roadster",
      "Type": "Sedan",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-04-16T19:38:09.302Z",
      "Seating": 7
    },
    {
      "Name": "Mini Challenger",
      "Model": "Charger",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-12-12T10:01:43.103Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac Fiesta",
      "Model": "1",
      "Type": "Wagon",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2026-05-26T10:04:29.132Z",
      "Seating": 2
    },
    {
      "Name": "Fiat Aventador",
      "Model": "Expedition",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2023-03-09T11:34:13.188Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin Camaro",
      "Model": "2",
      "Type": "Convertible",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-09-15T20:04:31.089Z",
      "Seating": 6
    },
    {
      "Name": "BMW Grand Caravan",
      "Model": "Expedition",
      "Type": "Wagon",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-07-24T22:03:17.859Z",
      "Seating": 4
    },
    {
      "Name": "Mazda LeBaron",
      "Model": "Mercielago",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2026-02-09T04:10:29.598Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini V90",
      "Model": "Civic",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-07-04T03:14:58.620Z",
      "Seating": 3
    },
    {
      "Name": "Smart XTS",
      "Model": "PT Cruiser",
      "Type": "Convertible",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-10-15T07:37:01.198Z",
      "Seating": 6
    },
    {
      "Name": "Tesla Fiesta",
      "Model": "Malibu",
      "Type": "Coupe",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-09-13T04:00:41.208Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Spyder",
      "Model": "Wrangler",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-11-21T16:06:14.771Z",
      "Seating": 4
    },
    {
      "Name": "Bentley Charger",
      "Model": "Durango",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-02-16T02:15:12.878Z",
      "Seating": 7
    },
    {
      "Name": "Lamborghini Jetta",
      "Model": "Countach",
      "Type": "Hatchback",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2024-04-14T08:11:45.687Z",
      "Seating": 2
    },
    {
      "Name": "Polestar Silverado",
      "Model": "A8",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-12-10T14:57:04.061Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Sentra",
      "Model": "Prius",
      "Type": "Wagon",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-01-27T20:10:23.941Z",
      "Seating": 6
    },
    {
      "Name": "Polestar Civic",
      "Model": "Mercielago",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-03-31T04:57:57.573Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari 911",
      "Model": "Focus",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-06-17T04:40:38.089Z",
      "Seating": 4
    },
    {
      "Name": "Ford 2",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-09-20T02:58:17.872Z",
      "Seating": 5
    },
    {
      "Name": "Jaguar 1",
      "Model": "Spyder",
      "Type": "Convertible",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-12-03T10:01:56.802Z",
      "Seating": 6
    },
    {
      "Name": "Land Rover A4",
      "Model": "Escalade",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-08-28T06:41:13.859Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac PT Cruiser",
      "Model": "Colorado",
      "Type": "Minivan",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-10-20T07:19:08.798Z",
      "Seating": 5
    },
    {
      "Name": "Porsche Fortwo",
      "Model": "Escalade",
      "Type": "Wagon",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2023-06-06T12:30:55.961Z",
      "Seating": 4
    },
    {
      "Name": "Mini Corvette",
      "Model": "A4",
      "Type": "SUV",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2023-07-12T00:16:05.330Z",
      "Seating": 3
    },
    {
      "Name": "Mazda Spyder",
      "Model": "Fiesta",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-10-18T03:20:41.759Z",
      "Seating": 7
    },
    {
      "Name": "Polestar Accord",
      "Model": "2",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2028-09-27T00:07:07.053Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar Aventador",
      "Model": "CX-9",
      "Type": "Minivan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2024-04-24T04:14:09.539Z",
      "Seating": 3
    },
    {
      "Name": "Hyundai Countach",
      "Model": "1",
      "Type": "Sedan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-09-23T12:03:45.978Z",
      "Seating": 3
    },
    {
      "Name": "Maserati Grand Cherokee",
      "Model": "Corvette",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-07-02T09:03:29.720Z",
      "Seating": 2
    },
    {
      "Name": "Porsche Ranchero",
      "Model": "Explorer",
      "Type": "Coupe",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-01-12T01:25:39.467Z",
      "Seating": 5
    },
    {
      "Name": "Jeep 2",
      "Model": "Fiesta",
      "Type": "Cargo Van",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2028-11-29T09:30:05.249Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Durango",
      "Model": "CTS",
      "Type": "Wagon",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2027-02-07T11:51:55.225Z",
      "Seating": 5
    },
    {
      "Name": "Maserati A4",
      "Model": "Volt",
      "Type": "Sedan",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-03-08T07:19:35.888Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti Roadster",
      "Model": "Grand Cherokee",
      "Type": "Minivan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-07-03T10:13:51.803Z",
      "Seating": 3
    },
    {
      "Name": "Kia Accord",
      "Model": "Spyder",
      "Type": "Convertible",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-11-21T07:42:17.048Z",
      "Seating": 4
    },
    {
      "Name": "BMW Civic",
      "Model": "Taurus",
      "Type": "Convertible",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-03-29T04:40:59.595Z",
      "Seating": 7
    },
    {
      "Name": "Maserati Mercielago",
      "Model": "A4",
      "Type": "Minivan",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2026-08-15T22:35:03.236Z",
      "Seating": 3
    },
    {
      "Name": "Mazda Camry",
      "Model": "Spyder",
      "Type": "Sedan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2028-09-17T13:53:33.756Z",
      "Seating": 5
    },
    {
      "Name": "Mazda Spyder",
      "Model": "Malibu",
      "Type": "Convertible",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2027-04-23T13:40:49.553Z",
      "Seating": 6
    },
    {
      "Name": "Polestar Colorado",
      "Model": "Taurus",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-01-02T13:30:48.651Z",
      "Seating": 3
    },
    {
      "Name": "Mazda Model 3",
      "Model": "Impala",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2025-12-23T09:51:52.467Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Taurus",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2028-01-08T17:12:15.379Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Mercielago",
      "Model": "A4",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-11-16T02:14:43.567Z",
      "Seating": 4
    },
    {
      "Name": "Ford Fortwo",
      "Model": "Altima",
      "Type": "Wagon",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2028-07-04T01:29:29.125Z",
      "Seating": 7
    },
    {
      "Name": "Honda V90",
      "Model": "A4",
      "Type": "SUV",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-08-30T23:10:53.764Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Fortwo",
      "Model": "Aventador",
      "Type": "SUV",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-05-19T20:18:37.299Z",
      "Seating": 3
    },
    {
      "Name": "Mini Golf",
      "Model": "Impala",
      "Type": "Hatchback",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-07-26T18:34:27.450Z",
      "Seating": 5
    },
    {
      "Name": "Polestar Spyder",
      "Model": "Fortwo",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-12-06T00:39:22.750Z",
      "Seating": 4
    },
    {
      "Name": "Kia Wrangler",
      "Model": "Ranchero",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2023-09-29T08:09:56.600Z",
      "Seating": 7
    },
    {
      "Name": "Ford Accord",
      "Model": "Countach",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-06-13T17:45:35.732Z",
      "Seating": 4
    },
    {
      "Name": "Rolls Royce Mercielago",
      "Model": "Jetta",
      "Type": "Wagon",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-02-19T20:10:08.214Z",
      "Seating": 5
    },
    {
      "Name": "Jaguar XTS",
      "Model": "Civic",
      "Type": "Minivan",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-03-11T18:05:41.082Z",
      "Seating": 2
    },
    {
      "Name": "BMW Grand Caravan",
      "Model": "Taurus",
      "Type": "Convertible",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-08-09T07:06:54.889Z",
      "Seating": 3
    },
    {
      "Name": "BMW Cruze",
      "Model": "Impala",
      "Type": "Hatchback",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2025-05-07T13:57:00.112Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Colorado",
      "Model": "Model T",
      "Type": "Minivan",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-09-03T12:33:09.735Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Prius",
      "Model": "Model 3",
      "Type": "Cargo Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-07-22T20:10:25.537Z",
      "Seating": 2
    },
    {
      "Name": "Nissan Colorado",
      "Model": "Camry",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2024-02-05T06:48:40.218Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti A4",
      "Model": "Corvette",
      "Type": "Coupe",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-08-16T11:10:05.068Z",
      "Seating": 5
    },
    {
      "Name": "Mazda CTS",
      "Model": "Escalade",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2026-02-23T11:14:57.329Z",
      "Seating": 3
    },
    {
      "Name": "Dodge LeBaron",
      "Model": "V90",
      "Type": "Coupe",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-03-30T05:10:44.390Z",
      "Seating": 3
    },
    {
      "Name": "Chrysler F-150",
      "Model": "Mercielago",
      "Type": "Wagon",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-07-14T19:02:24.604Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin Cruze",
      "Model": "A8",
      "Type": "Hatchback",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-01-01T08:26:13.429Z",
      "Seating": 4
    },
    {
      "Name": "Ford Alpine",
      "Model": "Sentra",
      "Type": "Wagon",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-08-14T14:18:34.808Z",
      "Seating": 6
    },
    {
      "Name": "Nissan Wrangler",
      "Model": "ATS",
      "Type": "Wagon",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-12-14T05:08:24.894Z",
      "Seating": 4
    },
    {
      "Name": "BMW Malibu",
      "Model": "CTS",
      "Type": "Cargo Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-12-01T10:21:04.140Z",
      "Seating": 3
    },
    {
      "Name": "Ford Golf",
      "Model": "LeBaron",
      "Type": "Passenger Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-07-28T10:50:23.335Z",
      "Seating": 4
    },
    {
      "Name": "Mazda V90",
      "Model": "Spyder",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2023-03-05T05:25:37.590Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac Altima",
      "Model": "Civic",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2027-11-15T19:22:03.945Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Spyder",
      "Model": "Sentra",
      "Type": "Minivan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2023-10-28T01:06:22.751Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini Spyder",
      "Model": "1",
      "Type": "Convertible",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-04-30T01:45:19.462Z",
      "Seating": 2
    },
    {
      "Name": "Mini Corvette",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-08-03T01:28:02.415Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Sentra",
      "Model": "Fiesta",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2024-05-04T22:52:27.012Z",
      "Seating": 2
    },
    {
      "Name": "Jaguar Fiesta",
      "Model": "V90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-10-26T05:44:02.106Z",
      "Seating": 7
    },
    {
      "Name": "Kia Escalade",
      "Model": "Explorer",
      "Type": "SUV",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2027-11-10T21:27:32.802Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Jetta",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2023-07-31T01:25:10.198Z",
      "Seating": 3
    },
    {
      "Name": "Kia Colorado",
      "Model": "Challenger",
      "Type": "Hatchback",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2023-10-14T08:17:06.562Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Escalade",
      "Model": "Grand Cherokee",
      "Type": "Coupe",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-12-07T06:20:18.062Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin Element",
      "Model": "Mercielago",
      "Type": "Convertible",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2028-03-21T04:13:33.525Z",
      "Seating": 6
    },
    {
      "Name": "Jeep El Camino",
      "Model": "XTS",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-01-21T14:20:25.485Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Model T",
      "Model": "Charger",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-10-30T05:20:11.290Z",
      "Seating": 3
    },
    {
      "Name": "Chrysler XTS",
      "Model": "Model S",
      "Type": "Cargo Van",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-08-02T11:58:30.517Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Wrangler",
      "Model": "Expedition",
      "Type": "Sedan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2025-05-29T11:54:12.138Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Golf",
      "Model": "Roadster",
      "Type": "Coupe",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-05-20T16:53:53.054Z",
      "Seating": 2
    },
    {
      "Name": "Kia Colorado",
      "Model": "CX-9",
      "Type": "Coupe",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-08-16T06:43:36.315Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Wrangler",
      "Model": "911",
      "Type": "Passenger Van",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-06-28T09:01:40.806Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Golf",
      "Model": "Challenger",
      "Type": "Wagon",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-09-23T06:39:50.116Z",
      "Seating": 6
    },
    {
      "Name": "Smart Fortwo",
      "Model": "Challenger",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-07-23T23:36:10.022Z",
      "Seating": 7
    },
    {
      "Name": "Chrysler F-150",
      "Model": "Durango",
      "Type": "SUV",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-05-28T12:59:21.702Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari Mustang",
      "Model": "Taurus",
      "Type": "Cargo Van",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2026-01-13T22:20:51.151Z",
      "Seating": 6
    },
    {
      "Name": "Toyota CTS",
      "Model": "Alpine",
      "Type": "Passenger Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-08-02T22:02:24.776Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Beetle",
      "Model": "CTS",
      "Type": "Convertible",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-06-15T12:47:31.503Z",
      "Seating": 6
    },
    {
      "Name": "Audi Durango",
      "Model": "Corvette",
      "Type": "Coupe",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-07-07T21:48:15.424Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Grand Caravan",
      "Model": "Civic",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-08-27T21:38:31.039Z",
      "Seating": 7
    },
    {
      "Name": "Cadillac El Camino",
      "Model": "F-150",
      "Type": "Wagon",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-05-21T08:25:19.280Z",
      "Seating": 3
    },
    {
      "Name": "Mercedes Benz Spyder",
      "Model": "Taurus",
      "Type": "Sedan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-05-11T10:16:55.961Z",
      "Seating": 5
    },
    {
      "Name": "Volvo Volt",
      "Model": "Civic",
      "Type": "Coupe",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-08-01T12:14:35.788Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Roadster",
      "Model": "Grand Cherokee",
      "Type": "Passenger Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-11-10T03:42:12.459Z",
      "Seating": 3
    },
    {
      "Name": "Nissan Fiesta",
      "Model": "Mustang",
      "Type": "Coupe",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-02-15T05:26:08.172Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Impala",
      "Model": "Grand Cherokee",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2025-04-26T05:35:08.230Z",
      "Seating": 5
    },
    {
      "Name": "Kia Camry",
      "Model": "PT Cruiser",
      "Type": "Cargo Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2027-08-11T05:08:16.648Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Impala",
      "Model": "Countach",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2028-04-03T14:02:44.870Z",
      "Seating": 2
    },
    {
      "Name": "Fiat Volt",
      "Model": "Grand Cherokee",
      "Type": "SUV",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-04-27T09:52:10.439Z",
      "Seating": 4
    },
    {
      "Name": "Cadillac Alpine",
      "Model": "Roadster",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2023-11-07T13:11:07.150Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari Jetta",
      "Model": "Grand Caravan",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2028-05-21T15:26:06.156Z",
      "Seating": 4
    },
    {
      "Name": "BMW Escalade",
      "Model": "Taurus",
      "Type": "Cargo Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-11-27T12:32:30.805Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Camry",
      "Model": "Wrangler",
      "Type": "Coupe",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-05-03T08:46:47.272Z",
      "Seating": 3
    },
    {
      "Name": "Jeep Expedition",
      "Model": "Grand Cherokee",
      "Type": "Coupe",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2025-11-23T06:03:18.766Z",
      "Seating": 2
    },
    {
      "Name": "BMW Beetle",
      "Model": "Civic",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-06-07T16:29:19.711Z",
      "Seating": 3
    },
    {
      "Name": "BMW Jetta",
      "Model": "XTS",
      "Type": "Coupe",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2026-01-06T14:25:40.771Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Fiesta",
      "Model": "Volt",
      "Type": "Wagon",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-03-04T20:42:48.896Z",
      "Seating": 6
    },
    {
      "Name": "Ford 2",
      "Model": "XTS",
      "Type": "Hatchback",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-08-16T23:54:07.292Z",
      "Seating": 5
    },
    {
      "Name": "Mazda Silverado",
      "Model": "Fiesta",
      "Type": "Cargo Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-09-14T23:34:20.263Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Colorado",
      "Model": "Land Cruiser",
      "Type": "Minivan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2027-02-26T23:49:48.223Z",
      "Seating": 5
    },
    {
      "Name": "Mini CTS",
      "Model": "Ranchero",
      "Type": "Sedan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2025-03-13T14:15:53.343Z",
      "Seating": 3
    },
    {
      "Name": "Tesla Silverado",
      "Model": "Malibu",
      "Type": "Sedan",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-08-14T04:52:53.656Z",
      "Seating": 7
    },
    {
      "Name": "Bentley Mercielago",
      "Model": "XTS",
      "Type": "Coupe",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2024-06-25T00:30:21.088Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover Colorado",
      "Model": "XC90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2023-10-07T22:20:58.184Z",
      "Seating": 3
    },
    {
      "Name": "Hyundai F-150",
      "Model": "Corvette",
      "Type": "Hatchback",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2026-10-26T18:45:26.639Z",
      "Seating": 7
    },
    {
      "Name": "Porsche Corvette",
      "Model": "Taurus",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-06-01T08:31:12.140Z",
      "Seating": 6
    },
    {
      "Name": "Mazda Model T",
      "Model": "Impala",
      "Type": "Convertible",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-10-03T14:22:38.470Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Corvette",
      "Model": "Fortwo",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2023-02-13T22:18:17.630Z",
      "Seating": 5
    },
    {
      "Name": "BMW Taurus",
      "Model": "1",
      "Type": "Minivan",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2023-01-20T03:59:19.066Z",
      "Seating": 3
    },
    {
      "Name": "Ferrari Prius",
      "Model": "Volt",
      "Type": "Passenger Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2025-12-04T05:30:39.760Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Element",
      "Model": "ATS",
      "Type": "Convertible",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-07-04T21:14:40.147Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Expedition",
      "Model": "Prius",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-07-15T01:08:17.867Z",
      "Seating": 2
    },
    {
      "Name": "Jaguar El Camino",
      "Model": "ATS",
      "Type": "Hatchback",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2025-12-19T00:03:05.983Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Countach",
      "Model": "Prius",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2027-11-13T17:07:41.569Z",
      "Seating": 4
    },
    {
      "Name": "Fiat Charger",
      "Model": "Model 3",
      "Type": "Minivan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-04-06T05:15:41.893Z",
      "Seating": 7
    },
    {
      "Name": "Audi Impala",
      "Model": "Alpine",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2026-08-25T21:50:53.227Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini 1",
      "Model": "F-150",
      "Type": "Cargo Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-06-05T04:05:51.723Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Aventador",
      "Model": "Model T",
      "Type": "Convertible",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2028-09-24T02:36:45.968Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac Jetta",
      "Model": "Mustang",
      "Type": "Wagon",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-05-16T09:29:51.003Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Silverado",
      "Model": "Ranchero",
      "Type": "Convertible",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-08-15T19:14:07.490Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Cruze",
      "Model": "Land Cruiser",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-11-23T22:41:31.325Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Ranchero",
      "Model": "Explorer",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2028-11-10T16:51:36.184Z",
      "Seating": 3
    },
    {
      "Name": "Nissan Camry",
      "Model": "2",
      "Type": "Convertible",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2023-07-05T19:55:14.095Z",
      "Seating": 2
    },
    {
      "Name": "Mercedes Benz Impala",
      "Model": "Land Cruiser",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-09-11T17:28:31.775Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Aventador",
      "Model": "ATS",
      "Type": "Hatchback",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2028-08-28T05:48:27.300Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Roadster",
      "Model": "Corvette",
      "Type": "Convertible",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-04-08T14:48:42.605Z",
      "Seating": 6
    },
    {
      "Name": "Lamborghini Mustang",
      "Model": "Model 3",
      "Type": "Coupe",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-05-02T02:14:46.109Z",
      "Seating": 7
    },
    {
      "Name": "Rolls Royce Colorado",
      "Model": "Aventador",
      "Type": "Cargo Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2023-03-05T23:49:55.496Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai LeBaron",
      "Model": "Focus",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-02-13T07:59:30.375Z",
      "Seating": 6
    },
    {
      "Name": "Mini Explorer",
      "Model": "Cruze",
      "Type": "Sedan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-06-19T19:56:08.490Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Challenger",
      "Model": "Roadster",
      "Type": "Coupe",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2026-10-19T05:29:04.150Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini PT Cruiser",
      "Model": "Spyder",
      "Type": "Coupe",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2028-10-21T03:10:43.214Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Cruze",
      "Model": "Model 3",
      "Type": "Wagon",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2025-09-25T17:09:37.624Z",
      "Seating": 4
    },
    {
      "Name": "BMW Mercielago",
      "Model": "Impala",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2028-09-22T12:45:47.990Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Civic",
      "Model": "2",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-03-21T23:33:51.056Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar Land Cruiser",
      "Model": "Element",
      "Type": "Minivan",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-04-20T08:05:32.610Z",
      "Seating": 6
    },
    {
      "Name": "BMW XC90",
      "Model": "Silverado",
      "Type": "Minivan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-12-07T01:03:17.029Z",
      "Seating": 3
    },
    {
      "Name": "Audi Accord",
      "Model": "A4",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-11-21T01:06:57.695Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Challenger",
      "Model": "El Camino",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2023-03-21T20:11:18.490Z",
      "Seating": 2
    },
    {
      "Name": "Porsche Fiesta",
      "Model": "Golf",
      "Type": "Sedan",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-05-26T13:30:57.256Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Golf",
      "Model": "Corvette",
      "Type": "Wagon",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-11-19T09:57:12.459Z",
      "Seating": 5
    },
    {
      "Name": "BMW Accord",
      "Model": "Ranchero",
      "Type": "Sedan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-07-23T22:40:47.305Z",
      "Seating": 4
    },
    {
      "Name": "Porsche Altima",
      "Model": "Fortwo",
      "Type": "Minivan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2028-03-17T13:37:30.971Z",
      "Seating": 6
    },
    {
      "Name": "Audi Land Cruiser",
      "Model": "Aventador",
      "Type": "Wagon",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-12-29T17:58:11.661Z",
      "Seating": 7
    },
    {
      "Name": "Honda Alpine",
      "Model": "A4",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-01-06T09:27:52.875Z",
      "Seating": 5
    },
    {
      "Name": "Ford Silverado",
      "Model": "Beetle",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2026-11-04T14:55:32.950Z",
      "Seating": 6
    },
    {
      "Name": "Bugatti Grand Cherokee",
      "Model": "Alpine",
      "Type": "Coupe",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-01-31T07:46:28.599Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Mustang",
      "Model": "1",
      "Type": "Sedan",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2025-09-22T15:01:23.616Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Mercielago",
      "Model": "F-150",
      "Type": "Passenger Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-02-04T19:08:25.424Z",
      "Seating": 5
    },
    {
      "Name": "Toyota Sentra",
      "Model": "Ranchero",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-05-22T14:01:02.224Z",
      "Seating": 5
    },
    {
      "Name": "Mini Fiesta",
      "Model": "Model 3",
      "Type": "Minivan",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-10-26T19:37:25.642Z",
      "Seating": 3
    },
    {
      "Name": "Volvo F-150",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-04-14T19:37:57.641Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Wrangler",
      "Model": "CTS",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-10-31T22:44:47.656Z",
      "Seating": 3
    },
    {
      "Name": "Ford Fortwo",
      "Model": "Challenger",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-09-25T17:37:48.940Z",
      "Seating": 4
    },
    {
      "Name": "Cadillac Explorer",
      "Model": "Spyder",
      "Type": "Wagon",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2023-11-18T01:37:19.945Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover V90",
      "Model": "Wrangler",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-05-12T15:57:01.739Z",
      "Seating": 5
    },
    {
      "Name": "Smart El Camino",
      "Model": "Model 3",
      "Type": "Wagon",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2027-04-06T21:57:54.233Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Challenger",
      "Model": "Challenger",
      "Type": "Sedan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-10-16T00:34:35.671Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Malibu",
      "Model": "Land Cruiser",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-06-15T18:11:17.818Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Model 3",
      "Model": "Fiesta",
      "Type": "Passenger Van",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2027-03-21T16:59:25.783Z",
      "Seating": 4
    },
    {
      "Name": "Tesla 911",
      "Model": "Silverado",
      "Type": "Minivan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2023-05-08T09:00:05.666Z",
      "Seating": 6
    },
    {
      "Name": "Mini Charger",
      "Model": "Challenger",
      "Type": "Minivan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2023-04-07T00:54:45.451Z",
      "Seating": 3
    },
    {
      "Name": "Rolls Royce Camaro",
      "Model": "Model T",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-07-23T21:23:38.279Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet Malibu",
      "Model": "Prius",
      "Type": "Wagon",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-04-16T09:54:52.135Z",
      "Seating": 4
    },
    {
      "Name": "Volvo Charger",
      "Model": "Expedition",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-11-02T01:36:58.740Z",
      "Seating": 6
    },
    {
      "Name": "Smart Challenger",
      "Model": "Land Cruiser",
      "Type": "Hatchback",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-01-22T23:40:08.896Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Mercielago",
      "Model": "A4",
      "Type": "Hatchback",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2026-03-01T21:51:21.247Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin Durango",
      "Model": "El Camino",
      "Type": "Minivan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-07-10T13:27:48.364Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Alpine",
      "Model": "Cruze",
      "Type": "Hatchback",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-06-03T18:51:45.211Z",
      "Seating": 6
    },
    {
      "Name": "Audi CTS",
      "Model": "PT Cruiser",
      "Type": "Minivan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-01-06T10:00:15.510Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Expedition",
      "Model": "Model S",
      "Type": "Passenger Van",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2028-07-20T23:05:15.888Z",
      "Seating": 4
    },
    {
      "Name": "Maserati PT Cruiser",
      "Model": "Sentra",
      "Type": "Coupe",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-07-01T20:45:54.973Z",
      "Seating": 2
    },
    {
      "Name": "Chrysler 1",
      "Model": "Charger",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-04-04T06:53:14.945Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Civic",
      "Model": "Explorer",
      "Type": "SUV",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-01-09T17:28:04.469Z",
      "Seating": 4
    },
    {
      "Name": "Cadillac Taurus",
      "Model": "A8",
      "Type": "Minivan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2027-11-18T21:53:49.190Z",
      "Seating": 3
    },
    {
      "Name": "Porsche F-150",
      "Model": "Grand Caravan",
      "Type": "Wagon",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-12-31T02:54:16.721Z",
      "Seating": 7
    },
    {
      "Name": "Kia Durango",
      "Model": "Prius",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-09-30T02:19:05.592Z",
      "Seating": 3
    },
    {
      "Name": "Audi ATS",
      "Model": "Colorado",
      "Type": "Wagon",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2023-02-11T07:46:44.747Z",
      "Seating": 3
    },
    {
      "Name": "Chevrolet Alpine",
      "Model": "Beetle",
      "Type": "Coupe",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-03-02T08:00:09.511Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin Accord",
      "Model": "Alpine",
      "Type": "Coupe",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2026-06-14T04:18:46.816Z",
      "Seating": 6
    },
    {
      "Name": "Audi 1",
      "Model": "Model 3",
      "Type": "Sedan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2028-10-02T19:40:17.728Z",
      "Seating": 5
    },
    {
      "Name": "Fiat El Camino",
      "Model": "El Camino",
      "Type": "Passenger Van",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2027-04-24T04:28:46.866Z",
      "Seating": 7
    },
    {
      "Name": "Land Rover CX-9",
      "Model": "Focus",
      "Type": "SUV",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-06-20T11:01:22.004Z",
      "Seating": 7
    },
    {
      "Name": "Maserati Colorado",
      "Model": "CX-9",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-02-11T06:58:51.148Z",
      "Seating": 3
    },
    {
      "Name": "Mercedes Benz Roadster",
      "Model": "Beetle",
      "Type": "Passenger Van",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2027-06-06T21:54:03.653Z",
      "Seating": 7
    },
    {
      "Name": "Cadillac Altima",
      "Model": "Aventador",
      "Type": "Wagon",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-08-23T11:25:29.387Z",
      "Seating": 3
    },
    {
      "Name": "Rolls Royce A8",
      "Model": "1",
      "Type": "SUV",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-05-22T05:29:52.595Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Golf",
      "Model": "Wrangler",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-12-03T09:50:37.543Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar 2",
      "Model": "Wrangler",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-10-13T12:01:56.712Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Golf",
      "Model": "Explorer",
      "Type": "Convertible",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-07-07T14:02:25.294Z",
      "Seating": 4
    },
    {
      "Name": "Toyota Durango",
      "Model": "Grand Caravan",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2023-06-16T21:43:35.922Z",
      "Seating": 2
    },
    {
      "Name": "Toyota 2",
      "Model": "2",
      "Type": "Cargo Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2028-02-20T15:10:46.594Z",
      "Seating": 5
    },
    {
      "Name": "Ford Taurus",
      "Model": "Aventador",
      "Type": "Wagon",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2023-05-30T18:12:35.031Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Explorer",
      "Model": "Focus",
      "Type": "Coupe",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2026-07-10T20:03:47.939Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Land Cruiser",
      "Model": "Grand Cherokee",
      "Type": "Cargo Van",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2027-08-20T04:32:17.862Z",
      "Seating": 5
    },
    {
      "Name": "Toyota Mustang",
      "Model": "CTS",
      "Type": "Hatchback",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-11-09T19:16:55.738Z",
      "Seating": 4
    },
    {
      "Name": "Tesla Taurus",
      "Model": "Volt",
      "Type": "Coupe",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-01-14T17:59:23.975Z",
      "Seating": 2
    },
    {
      "Name": "Audi CX-9",
      "Model": "A8",
      "Type": "Hatchback",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-07-21T19:17:13.320Z",
      "Seating": 7
    },
    {
      "Name": "Toyota Taurus",
      "Model": "Jetta",
      "Type": "Wagon",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2024-09-20T06:01:50.420Z",
      "Seating": 3
    },
    {
      "Name": "Dodge XTS",
      "Model": "Sentra",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2023-02-26T16:00:06.094Z",
      "Seating": 7
    },
    {
      "Name": "Volkswagen Malibu",
      "Model": "Civic",
      "Type": "Wagon",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2023-08-11T19:53:14.997Z",
      "Seating": 5
    },
    {
      "Name": "Chevrolet Prius",
      "Model": "Model 3",
      "Type": "Sedan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2028-04-06T07:23:19.317Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini F-150",
      "Model": "CTS",
      "Type": "Convertible",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2027-11-16T23:59:27.917Z",
      "Seating": 4
    },
    {
      "Name": "Kia V90",
      "Model": "Countach",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2026-07-01T00:30:48.400Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Spyder",
      "Model": "ATS",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2024-03-13T14:14:53.035Z",
      "Seating": 6
    },
    {
      "Name": "Kia Alpine",
      "Model": "Model 3",
      "Type": "Coupe",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2026-12-14T11:37:09.147Z",
      "Seating": 2
    },
    {
      "Name": "Bugatti Ranchero",
      "Model": "XC90",
      "Type": "Minivan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-03-24T17:45:00.801Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Malibu",
      "Model": "Fortwo",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-08-20T20:11:59.463Z",
      "Seating": 4
    },
    {
      "Name": "Dodge Cruze",
      "Model": "1",
      "Type": "Wagon",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2026-02-08T01:17:04.730Z",
      "Seating": 2
    },
    {
      "Name": "BMW 911",
      "Model": "CX-9",
      "Type": "Sedan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-08-31T03:07:42.883Z",
      "Seating": 6
    },
    {
      "Name": "Aston Martin Challenger",
      "Model": "Challenger",
      "Type": "Cargo Van",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-07-26T00:05:24.336Z",
      "Seating": 6
    },
    {
      "Name": "Polestar Camaro",
      "Model": "Model 3",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-03-24T23:12:54.779Z",
      "Seating": 4
    },
    {
      "Name": "Honda F-150",
      "Model": "Camaro",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2026-03-02T11:33:47.431Z",
      "Seating": 4
    },
    {
      "Name": "Rolls Royce Aventador",
      "Model": "Durango",
      "Type": "Hatchback",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-06-23T15:13:10.966Z",
      "Seating": 2
    },
    {
      "Name": "Bentley Escalade",
      "Model": "Jetta",
      "Type": "Sedan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-10-21T15:55:41.516Z",
      "Seating": 4
    },
    {
      "Name": "Kia Fortwo",
      "Model": "XTS",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-01-18T22:14:26.919Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Mustang",
      "Model": "Camry",
      "Type": "Hatchback",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-09-30T02:02:22.205Z",
      "Seating": 3
    },
    {
      "Name": "Audi Malibu",
      "Model": "Alpine",
      "Type": "Sedan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-12-14T18:34:21.702Z",
      "Seating": 3
    },
    {
      "Name": "Polestar CTS",
      "Model": "F-150",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-08-27T18:45:53.907Z",
      "Seating": 6
    },
    {
      "Name": "Chevrolet Camry",
      "Model": "Cruze",
      "Type": "Hatchback",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2027-07-23T08:30:15.666Z",
      "Seating": 3
    },
    {
      "Name": "Smart Charger",
      "Model": "Model T",
      "Type": "Cargo Van",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-03-19T12:38:37.648Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Element",
      "Model": "A4",
      "Type": "Minivan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2025-08-06T21:07:45.467Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Fiesta",
      "Model": "Fortwo",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2023-04-26T00:13:10.640Z",
      "Seating": 7
    },
    {
      "Name": "Ford Durango",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2028-01-23T07:04:06.581Z",
      "Seating": 5
    },
    {
      "Name": "Dodge Silverado",
      "Model": "Spyder",
      "Type": "Wagon",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-01-10T05:46:30.073Z",
      "Seating": 6
    },
    {
      "Name": "Volkswagen Charger",
      "Model": "Expedition",
      "Type": "Convertible",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-11-25T08:09:21.440Z",
      "Seating": 6
    },
    {
      "Name": "Maserati F-150",
      "Model": "Roadster",
      "Type": "Hatchback",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2025-06-06T01:42:26.004Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Beetle",
      "Model": "Grand Cherokee",
      "Type": "Hatchback",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2027-01-01T08:46:29.553Z",
      "Seating": 7
    },
    {
      "Name": "Chevrolet Volt",
      "Model": "Model T",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2027-02-27T07:09:20.788Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Jetta",
      "Model": "LeBaron",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2023-02-05T02:03:40.891Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler El Camino",
      "Model": "Prius",
      "Type": "Coupe",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-08-27T05:52:12.994Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari Expedition",
      "Model": "Mustang",
      "Type": "Hatchback",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-11-23T17:22:37.738Z",
      "Seating": 3
    },
    {
      "Name": "Kia Sentra",
      "Model": "Fiesta",
      "Type": "Hatchback",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-08-14T09:43:54.020Z",
      "Seating": 5
    },
    {
      "Name": "Honda Alpine",
      "Model": "A4",
      "Type": "Minivan",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2028-05-24T03:11:47.115Z",
      "Seating": 7
    },
    {
      "Name": "Ferrari Land Cruiser",
      "Model": "Element",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-05-05T17:25:59.697Z",
      "Seating": 4
    },
    {
      "Name": "Honda Roadster",
      "Model": "LeBaron",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-08-16T15:53:03.923Z",
      "Seating": 4
    },
    {
      "Name": "Smart Civic",
      "Model": "Charger",
      "Type": "Minivan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-12-05T05:59:31.198Z",
      "Seating": 5
    },
    {
      "Name": "Tesla Grand Cherokee",
      "Model": "Cruze",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2024-10-07T00:08:06.739Z",
      "Seating": 4
    },
    {
      "Name": "Maserati XC90",
      "Model": "1",
      "Type": "Convertible",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-07-13T13:06:30.058Z",
      "Seating": 6
    },
    {
      "Name": "Porsche Altima",
      "Model": "Aventador",
      "Type": "Coupe",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2026-06-26T10:41:10.894Z",
      "Seating": 2
    },
    {
      "Name": "Volvo Colorado",
      "Model": "XC90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2024-02-20T16:12:21.061Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin Corvette",
      "Model": "Silverado",
      "Type": "Convertible",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2024-06-14T15:36:23.512Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Prius",
      "Model": "Jetta",
      "Type": "Minivan",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-09-13T12:17:04.066Z",
      "Seating": 2
    },
    {
      "Name": "Chevrolet PT Cruiser",
      "Model": "XTS",
      "Type": "Wagon",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-06-22T18:48:47.268Z",
      "Seating": 6
    },
    {
      "Name": "Audi Altima",
      "Model": "Countach",
      "Type": "Minivan",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-08-20T00:29:06.311Z",
      "Seating": 4
    },
    {
      "Name": "Polestar Impala",
      "Model": "Jetta",
      "Type": "Passenger Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2025-03-16T09:26:39.560Z",
      "Seating": 2
    },
    {
      "Name": "Tesla Mustang",
      "Model": "Explorer",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-07-17T07:49:32.164Z",
      "Seating": 2
    },
    {
      "Name": "Ferrari F-150",
      "Model": "ATS",
      "Type": "Convertible",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-01-09T14:28:35.240Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Explorer",
      "Model": "Wrangler",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-04-19T06:24:53.168Z",
      "Seating": 3
    },
    {
      "Name": "Toyota Mercielago",
      "Model": "2",
      "Type": "Convertible",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2026-01-29T11:59:38.065Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Roadster",
      "Model": "Civic",
      "Type": "Minivan",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-12-11T11:30:43.520Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Camaro",
      "Model": "Prius",
      "Type": "Wagon",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-12-04T16:05:25.451Z",
      "Seating": 3
    },
    {
      "Name": "Bugatti Altima",
      "Model": "Grand Caravan",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-03-06T06:36:14.167Z",
      "Seating": 6
    },
    {
      "Name": "Lamborghini Civic",
      "Model": "Focus",
      "Type": "Sedan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-09-01T18:45:42.314Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Durango",
      "Model": "Sentra",
      "Type": "SUV",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-01-18T08:22:20.139Z",
      "Seating": 4
    },
    {
      "Name": "Bentley XC90",
      "Model": "Challenger",
      "Type": "Convertible",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-12-04T12:45:54.159Z",
      "Seating": 3
    },
    {
      "Name": "Aston Martin Alpine",
      "Model": "Model T",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2024-09-14T12:12:28.457Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Escalade",
      "Model": "Altima",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-09-16T03:24:41.152Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Beetle",
      "Model": "Model 3",
      "Type": "Coupe",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2028-05-20T11:49:05.536Z",
      "Seating": 5
    },
    {
      "Name": "Audi Charger",
      "Model": "Alpine",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2024-12-15T22:27:42.070Z",
      "Seating": 6
    },
    {
      "Name": "Bugatti Fiesta",
      "Model": "XC90",
      "Type": "Minivan",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2027-06-06T02:05:02.362Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Volt",
      "Model": "Mustang",
      "Type": "Sedan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2025-10-19T18:48:14.767Z",
      "Seating": 3
    },
    {
      "Name": "Hyundai El Camino",
      "Model": "A4",
      "Type": "SUV",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2024-06-09T23:25:25.515Z",
      "Seating": 6
    },
    {
      "Name": "Mercedes Benz Grand Caravan",
      "Model": "CX-9",
      "Type": "Sedan",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2025-01-19T13:46:50.671Z",
      "Seating": 3
    },
    {
      "Name": "Bentley A8",
      "Model": "ATS",
      "Type": "Coupe",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-06-28T18:50:57.722Z",
      "Seating": 4
    },
    {
      "Name": "Volvo Malibu",
      "Model": "Colorado",
      "Type": "Wagon",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2025-02-06T12:26:24.442Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Corvette",
      "Model": "Charger",
      "Type": "Passenger Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-10-29T23:27:07.581Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini Explorer",
      "Model": "LeBaron",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-08-08T10:54:29.692Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac Prius",
      "Model": "Roadster",
      "Type": "Cargo Van",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2027-04-26T01:43:26.495Z",
      "Seating": 5
    },
    {
      "Name": "Porsche Land Cruiser",
      "Model": "1",
      "Type": "Coupe",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2028-08-20T18:48:59.151Z",
      "Seating": 3
    },
    {
      "Name": "BMW Accord",
      "Model": "Escalade",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2028-03-30T14:22:38.494Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini LeBaron",
      "Model": "Challenger",
      "Type": "SUV",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2026-01-02T15:55:23.897Z",
      "Seating": 5
    },
    {
      "Name": "Land Rover Explorer",
      "Model": "Explorer",
      "Type": "Wagon",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-12-25T08:31:33.319Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Volt",
      "Model": "CX-9",
      "Type": "SUV",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-07-15T18:15:53.823Z",
      "Seating": 2
    },
    {
      "Name": "Honda Cruze",
      "Model": "XC90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-02-08T11:04:01.199Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Charger",
      "Model": "Beetle",
      "Type": "Sedan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-05-29T04:49:49.550Z",
      "Seating": 5
    },
    {
      "Name": "Kia XTS",
      "Model": "Colorado",
      "Type": "Convertible",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2027-10-27T18:17:05.973Z",
      "Seating": 4
    },
    {
      "Name": "Aston Martin A4",
      "Model": "ATS",
      "Type": "SUV",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2028-11-04T03:30:10.938Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac Spyder",
      "Model": "Mercielago",
      "Type": "Sedan",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2027-03-01T12:52:30.330Z",
      "Seating": 3
    },
    {
      "Name": "Honda Golf",
      "Model": "Model S",
      "Type": "Coupe",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2025-04-08T19:46:58.254Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler CTS",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2023-02-07T10:53:43.563Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Aventador",
      "Model": "Fiesta",
      "Type": "Passenger Van",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-06-19T04:44:22.722Z",
      "Seating": 2
    },
    {
      "Name": "Hyundai Model S",
      "Model": "Prius",
      "Type": "Minivan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2023-04-11T21:21:32.109Z",
      "Seating": 4
    },
    {
      "Name": "Tesla XC90",
      "Model": "Ranchero",
      "Type": "Cargo Van",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2028-07-30T13:29:24.537Z",
      "Seating": 5
    },
    {
      "Name": "Mini Grand Cherokee",
      "Model": "Roadster",
      "Type": "Passenger Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-09-24T22:40:35.481Z",
      "Seating": 6
    },
    {
      "Name": "Mazda Grand Cherokee",
      "Model": "Golf",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-07-28T05:24:12.383Z",
      "Seating": 5
    },
    {
      "Name": "Polestar Alpine",
      "Model": "Escalade",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2024-05-12T23:06:31.397Z",
      "Seating": 5
    },
    {
      "Name": "Bentley Escalade",
      "Model": "Altima",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-10-05T09:21:38.549Z",
      "Seating": 5
    },
    {
      "Name": "Volkswagen Alpine",
      "Model": "LeBaron",
      "Type": "Cargo Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2028-02-03T23:32:11.195Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini F-150",
      "Model": "Fortwo",
      "Type": "SUV",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-09-12T10:38:22.953Z",
      "Seating": 7
    },
    {
      "Name": "Nissan Focus",
      "Model": "F-150",
      "Type": "Wagon",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-10-28T07:43:16.733Z",
      "Seating": 2
    },
    {
      "Name": "Kia Sentra",
      "Model": "El Camino",
      "Type": "Wagon",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2025-12-04T02:50:57.233Z",
      "Seating": 3
    },
    {
      "Name": "Honda Cruze",
      "Model": "Aventador",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-08-14T15:39:38.721Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Escalade",
      "Model": "Beetle",
      "Type": "Wagon",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-12-13T20:16:00.706Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Expedition",
      "Model": "Mercielago",
      "Type": "Minivan",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2028-10-23T09:52:40.249Z",
      "Seating": 3
    },
    {
      "Name": "Porsche Fiesta",
      "Model": "Volt",
      "Type": "Minivan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2028-04-05T10:07:28.595Z",
      "Seating": 6
    },
    {
      "Name": "Bentley Focus",
      "Model": "CX-9",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2024-10-27T14:17:07.725Z",
      "Seating": 2
    },
    {
      "Name": "Cadillac 911",
      "Model": "Impala",
      "Type": "Hatchback",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2026-05-13T03:20:35.114Z",
      "Seating": 3
    },
    {
      "Name": "Porsche Malibu",
      "Model": "Golf",
      "Type": "Sedan",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2026-01-14T04:33:51.059Z",
      "Seating": 5
    },
    {
      "Name": "Toyota Prius",
      "Model": "Mercielago",
      "Type": "Coupe",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-02-06T17:30:21.608Z",
      "Seating": 2
    },
    {
      "Name": "Mazda El Camino",
      "Model": "Escalade",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-03-28T14:24:52.033Z",
      "Seating": 3
    },
    {
      "Name": "BMW CTS",
      "Model": "V90",
      "Type": "Wagon",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2023-06-15T14:54:09.028Z",
      "Seating": 5
    },
    {
      "Name": "Jaguar Fortwo",
      "Model": "911",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2028-05-21T13:04:00.280Z",
      "Seating": 5
    },
    {
      "Name": "Smart Volt",
      "Model": "Cruze",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2028-02-03T05:20:01.962Z",
      "Seating": 7
    },
    {
      "Name": "Polestar F-150",
      "Model": "Explorer",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2025-01-14T15:11:43.459Z",
      "Seating": 6
    },
    {
      "Name": "Jeep Prius",
      "Model": "Impala",
      "Type": "Sedan",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2026-11-05T12:51:16.076Z",
      "Seating": 3
    },
    {
      "Name": "Mini Challenger",
      "Model": "Beetle",
      "Type": "Hatchback",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2027-01-06T22:57:40.057Z",
      "Seating": 6
    },
    {
      "Name": "Bentley LeBaron",
      "Model": "CTS",
      "Type": "SUV",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2024-02-12T02:56:34.127Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Prius",
      "Model": "Grand Cherokee",
      "Type": "Cargo Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-09-17T02:37:51.797Z",
      "Seating": 4
    },
    {
      "Name": "Mazda 2",
      "Model": "Colorado",
      "Type": "Passenger Van",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2028-01-09T21:50:06.018Z",
      "Seating": 6
    },
    {
      "Name": "Jeep XTS",
      "Model": "Accord",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2024-06-24T14:21:28.035Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Camaro",
      "Model": "Mustang",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-05-26T09:14:16.585Z",
      "Seating": 2
    },
    {
      "Name": "Mazda Malibu",
      "Model": "Impala",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-02-23T20:37:17.220Z",
      "Seating": 5
    },
    {
      "Name": "Ferrari Golf",
      "Model": "Land Cruiser",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2025-07-04T15:11:13.948Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Challenger",
      "Model": "V90",
      "Type": "Cargo Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-02-29T08:17:10.125Z",
      "Seating": 3
    },
    {
      "Name": "Ford ATS",
      "Model": "Ranchero",
      "Type": "Passenger Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-01-02T03:28:29.222Z",
      "Seating": 2
    },
    {
      "Name": "Cadillac Roadster",
      "Model": "Grand Caravan",
      "Type": "Coupe",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2028-02-24T19:50:45.333Z",
      "Seating": 6
    },
    {
      "Name": "Fiat Fiesta",
      "Model": "Impala",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-08-20T13:25:03.258Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Impala",
      "Model": "Model T",
      "Type": "Minivan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-03-15T04:38:18.614Z",
      "Seating": 3
    },
    {
      "Name": "BMW Spyder",
      "Model": "Focus",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-06-09T00:42:12.782Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Beetle",
      "Model": "Alpine",
      "Type": "Hatchback",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2024-11-24T23:52:35.313Z",
      "Seating": 6
    },
    {
      "Name": "Porsche Malibu",
      "Model": "Model S",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2026-05-03T16:15:08.959Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Wrangler",
      "Model": "Grand Caravan",
      "Type": "Passenger Van",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-11-01T05:43:29.723Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler LeBaron",
      "Model": "Camry",
      "Type": "Passenger Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-02-27T12:21:04.889Z",
      "Seating": 3
    },
    {
      "Name": "Kia Grand Caravan",
      "Model": "Charger",
      "Type": "Wagon",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2025-02-13T02:40:13.268Z",
      "Seating": 3
    },
    {
      "Name": "BMW Fortwo",
      "Model": "ATS",
      "Type": "Wagon",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2025-09-23T14:49:06.905Z",
      "Seating": 6
    },
    {
      "Name": "Lamborghini Alpine",
      "Model": "Volt",
      "Type": "SUV",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2028-05-26T05:09:56.879Z",
      "Seating": 6
    },
    {
      "Name": "Mini Model T",
      "Model": "Ranchero",
      "Type": "Convertible",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2027-03-21T16:22:14.995Z",
      "Seating": 6
    },
    {
      "Name": "Jaguar Cruze",
      "Model": "Golf",
      "Type": "Minivan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2028-10-08T16:42:38.126Z",
      "Seating": 7
    },
    {
      "Name": "Volkswagen 2",
      "Model": "Alpine",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-01-22T02:40:12.891Z",
      "Seating": 7
    },
    {
      "Name": "Mercedes Benz Land Cruiser",
      "Model": "Beetle",
      "Type": "Wagon",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-10-29T06:46:05.606Z",
      "Seating": 4
    },
    {
      "Name": "Rolls Royce Explorer",
      "Model": "XC90",
      "Type": "Coupe",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-03-17T16:12:00.430Z",
      "Seating": 4
    },
    {
      "Name": "Audi 1",
      "Model": "Accord",
      "Type": "Passenger Van",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2027-04-03T10:41:48.465Z",
      "Seating": 4
    },
    {
      "Name": "Audi Camaro",
      "Model": "Volt",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2028-08-26T12:26:19.938Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Camaro",
      "Model": "Civic",
      "Type": "Convertible",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-01-14T16:27:04.413Z",
      "Seating": 7
    },
    {
      "Name": "Audi Escalade",
      "Model": "CX-9",
      "Type": "Hatchback",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2025-01-18T04:06:48.356Z",
      "Seating": 4
    },
    {
      "Name": "Polestar Fiesta",
      "Model": "Accord",
      "Type": "Passenger Van",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2024-09-01T20:55:41.681Z",
      "Seating": 2
    },
    {
      "Name": "Mini Model S",
      "Model": "Element",
      "Type": "Sedan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2027-08-28T07:04:22.446Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Spyder",
      "Model": "Corvette",
      "Type": "Wagon",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2026-09-15T14:42:05.176Z",
      "Seating": 3
    },
    {
      "Name": "Jaguar Focus",
      "Model": "PT Cruiser",
      "Type": "Hatchback",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-03-16T02:24:35.604Z",
      "Seating": 5
    },
    {
      "Name": "BMW Impala",
      "Model": "Beetle",
      "Type": "Cargo Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2025-01-14T21:42:27.518Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Challenger",
      "Model": "Expedition",
      "Type": "Wagon",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-04-22T23:16:33.949Z",
      "Seating": 5
    },
    {
      "Name": "Land Rover Countach",
      "Model": "Escalade",
      "Type": "SUV",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-07-16T03:08:24.046Z",
      "Seating": 5
    },
    {
      "Name": "Chrysler Taurus",
      "Model": "CX-9",
      "Type": "SUV",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-12-15T22:30:59.564Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Fortwo",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2027-03-11T07:25:03.141Z",
      "Seating": 6
    },
    {
      "Name": "Volvo Ranchero",
      "Model": "Focus",
      "Type": "Sedan",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2028-06-29T23:54:33.754Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Model S",
      "Model": "Explorer",
      "Type": "Hatchback",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-05-07T00:49:18.495Z",
      "Seating": 2
    },
    {
      "Name": "BMW Land Cruiser",
      "Model": "Fiesta",
      "Type": "Passenger Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-05-17T09:37:52.678Z",
      "Seating": 2
    },
    {
      "Name": "Aston Martin ATS",
      "Model": "Expedition",
      "Type": "Minivan",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2023-10-26T13:47:04.419Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Land Cruiser",
      "Model": "ATS",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2025-03-04T22:18:25.994Z",
      "Seating": 5
    },
    {
      "Name": "Smart F-150",
      "Model": "Mercielago",
      "Type": "Coupe",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-09-07T17:41:11.998Z",
      "Seating": 6
    },
    {
      "Name": "Volvo Corvette",
      "Model": "Accord",
      "Type": "Sedan",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2023-11-25T22:01:12.882Z",
      "Seating": 3
    },
    {
      "Name": "Porsche Land Cruiser",
      "Model": "Grand Caravan",
      "Type": "Passenger Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2028-04-02T16:11:46.491Z",
      "Seating": 6
    },
    {
      "Name": "Chrysler Model S",
      "Model": "911",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2024-06-04T15:31:53.269Z",
      "Seating": 2
    },
    {
      "Name": "Kia Beetle",
      "Model": "F-150",
      "Type": "Minivan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2025-02-07T21:50:06.435Z",
      "Seating": 7
    },
    {
      "Name": "Mini Roadster",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-01-20T11:28:27.273Z",
      "Seating": 2
    },
    {
      "Name": "Dodge LeBaron",
      "Model": "Element",
      "Type": "SUV",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2028-10-10T11:40:19.873Z",
      "Seating": 5
    },
    {
      "Name": "Honda Accord",
      "Model": "Taurus",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2026-02-21T23:13:10.264Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen 2",
      "Model": "Grand Caravan",
      "Type": "Coupe",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2025-05-17T19:16:45.430Z",
      "Seating": 6
    },
    {
      "Name": "Tesla Silverado",
      "Model": "Roadster",
      "Type": "Minivan",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-07-22T11:31:36.901Z",
      "Seating": 3
    },
    {
      "Name": "Kia Silverado",
      "Model": "Wrangler",
      "Type": "Minivan",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-06-30T09:10:11.451Z",
      "Seating": 5
    },
    {
      "Name": "Jeep Mercielago",
      "Model": "Camaro",
      "Type": "SUV",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-05-11T08:20:04.842Z",
      "Seating": 7
    },
    {
      "Name": "Smart Wrangler",
      "Model": "F-150",
      "Type": "Passenger Van",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2025-08-15T14:06:46.426Z",
      "Seating": 6
    },
    {
      "Name": "Ferrari Charger",
      "Model": "Volt",
      "Type": "Cargo Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-04-05T23:57:28.370Z",
      "Seating": 6
    },
    {
      "Name": "Mercedes Benz Model 3",
      "Model": "Expedition",
      "Type": "Cargo Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2028-08-26T01:17:29.270Z",
      "Seating": 3
    },
    {
      "Name": "Bentley Accord",
      "Model": "Sentra",
      "Type": "Cargo Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-04-01T03:56:40.890Z",
      "Seating": 3
    },
    {
      "Name": "Porsche CTS",
      "Model": "Land Cruiser",
      "Type": "Sedan",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2027-06-18T14:59:50.131Z",
      "Seating": 2
    },
    {
      "Name": "Ferrari Wrangler",
      "Model": "Countach",
      "Type": "Cargo Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2025-09-23T16:00:24.999Z",
      "Seating": 6
    },
    {
      "Name": "Jeep Countach",
      "Model": "Explorer",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2024-12-03T15:27:39.078Z",
      "Seating": 5
    },
    {
      "Name": "Mini Silverado",
      "Model": "Roadster",
      "Type": "Sedan",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2023-04-30T08:11:51.798Z",
      "Seating": 3
    },
    {
      "Name": "Dodge A4",
      "Model": "Escalade",
      "Type": "Cargo Van",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2024-05-24T08:19:19.152Z",
      "Seating": 3
    },
    {
      "Name": "Ford Ranchero",
      "Model": "Cruze",
      "Type": "Cargo Van",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-09-09T20:55:04.996Z",
      "Seating": 2
    },
    {
      "Name": "Dodge F-150",
      "Model": "Escalade",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2027-05-14T11:11:51.577Z",
      "Seating": 4
    },
    {
      "Name": "Jaguar Accord",
      "Model": "Altima",
      "Type": "Passenger Van",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-03-08T20:34:43.353Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Altima",
      "Model": "El Camino",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2028-04-01T01:22:54.598Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin Durango",
      "Model": "Corvette",
      "Type": "Hatchback",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-10-29T23:31:59.807Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari El Camino",
      "Model": "CTS",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2026-01-10T17:43:40.391Z",
      "Seating": 4
    },
    {
      "Name": "Nissan Countach",
      "Model": "Golf",
      "Type": "Passenger Van",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2027-05-25T09:46:58.027Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Grand Caravan",
      "Model": "Fortwo",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2028-10-23T07:51:52.182Z",
      "Seating": 7
    },
    {
      "Name": "Jaguar Model 3",
      "Model": "El Camino",
      "Type": "Hatchback",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-07-10T20:41:06.337Z",
      "Seating": 4
    },
    {
      "Name": "Chevrolet Fortwo",
      "Model": "Corvette",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-08-23T06:48:46.643Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Beetle",
      "Model": "Impala",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2028-07-05T05:12:25.323Z",
      "Seating": 6
    },
    {
      "Name": "Volvo CTS",
      "Model": "Fortwo",
      "Type": "Passenger Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2025-02-11T16:05:51.034Z",
      "Seating": 3
    },
    {
      "Name": "Polestar Wrangler",
      "Model": "Altima",
      "Type": "Cargo Van",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2025-02-26T04:39:39.040Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari Mercielago",
      "Model": "Cruze",
      "Type": "Cargo Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2023-11-27T10:30:59.213Z",
      "Seating": 4
    },
    {
      "Name": "Smart Corvette",
      "Model": "ATS",
      "Type": "Minivan",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2023-08-28T09:36:27.377Z",
      "Seating": 5
    },
    {
      "Name": "Smart Expedition",
      "Model": "Element",
      "Type": "Passenger Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-04-09T08:19:37.095Z",
      "Seating": 5
    },
    {
      "Name": "Chevrolet Altima",
      "Model": "Durango",
      "Type": "Convertible",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2027-08-20T12:35:01.705Z",
      "Seating": 6
    },
    {
      "Name": "Hyundai Accord",
      "Model": "Model S",
      "Type": "Convertible",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2026-06-18T02:20:18.954Z",
      "Seating": 7
    },
    {
      "Name": "Land Rover Countach",
      "Model": "Camry",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2025-08-31T06:13:36.565Z",
      "Seating": 3
    },
    {
      "Name": "Volkswagen Focus",
      "Model": "Fiesta",
      "Type": "Cargo Van",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-12-02T17:07:19.827Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Malibu",
      "Model": "CTS",
      "Type": "Passenger Van",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2027-10-02T04:01:20.753Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Charger",
      "Model": "XC90",
      "Type": "Sedan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2026-02-15T02:11:54.192Z",
      "Seating": 5
    },
    {
      "Name": "Ford Model 3",
      "Model": "Element",
      "Type": "Minivan",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-12-19T13:00:37.878Z",
      "Seating": 5
    },
    {
      "Name": "Polestar PT Cruiser",
      "Model": "CTS",
      "Type": "SUV",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-11-24T03:38:07.956Z",
      "Seating": 4
    },
    {
      "Name": "BMW Grand Caravan",
      "Model": "Land Cruiser",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2025-03-24T04:42:21.701Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini Jetta",
      "Model": "Colorado",
      "Type": "Hatchback",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2023-01-27T14:29:26.652Z",
      "Seating": 3
    },
    {
      "Name": "BMW Accord",
      "Model": "Model S",
      "Type": "Passenger Van",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2024-03-04T03:45:47.524Z",
      "Seating": 2
    },
    {
      "Name": "Volvo Camaro",
      "Model": "Jetta",
      "Type": "Minivan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2027-09-14T11:22:46.935Z",
      "Seating": 5
    },
    {
      "Name": "Honda Land Cruiser",
      "Model": "Charger",
      "Type": "Hatchback",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-02-23T20:01:08.603Z",
      "Seating": 2
    },
    {
      "Name": "Dodge Civic",
      "Model": "Fortwo",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2025-10-09T06:26:10.622Z",
      "Seating": 4
    },
    {
      "Name": "Porsche CX-9",
      "Model": "Grand Cherokee",
      "Type": "Wagon",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2026-03-09T18:54:03.166Z",
      "Seating": 3
    },
    {
      "Name": "Nissan PT Cruiser",
      "Model": "El Camino",
      "Type": "SUV",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2024-01-13T19:00:50.452Z",
      "Seating": 5
    },
    {
      "Name": "Audi Model T",
      "Model": "Durango",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2025-08-30T16:54:08.804Z",
      "Seating": 3
    },
    {
      "Name": "Bentley Colorado",
      "Model": "CTS",
      "Type": "Sedan",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-01-03T04:05:10.656Z",
      "Seating": 3
    },
    {
      "Name": "Ford A4",
      "Model": "Expedition",
      "Type": "Wagon",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-06-10T04:53:21.462Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Alpine",
      "Model": "XC90",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2026-09-30T17:58:46.634Z",
      "Seating": 5
    },
    {
      "Name": "Maserati F-150",
      "Model": "Accord",
      "Type": "Hatchback",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2026-09-20T05:47:12.793Z",
      "Seating": 3
    },
    {
      "Name": "Ferrari Corvette",
      "Model": "Altima",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-05-10T18:44:07.234Z",
      "Seating": 4
    },
    {
      "Name": "Fiat Model T",
      "Model": "Aventador",
      "Type": "Hatchback",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2027-08-03T13:21:51.264Z",
      "Seating": 4
    },
    {
      "Name": "Chrysler Land Cruiser",
      "Model": "Roadster",
      "Type": "Convertible",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2028-02-17T03:55:26.104Z",
      "Seating": 3
    },
    {
      "Name": "Kia Element",
      "Model": "A4",
      "Type": "Passenger Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-08-29T15:13:16.316Z",
      "Seating": 6
    },
    {
      "Name": "Jaguar Element",
      "Model": "Malibu",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-07-17T22:25:46.588Z",
      "Seating": 2
    },
    {
      "Name": "Volkswagen Alpine",
      "Model": "Expedition",
      "Type": "SUV",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2024-05-06T10:46:36.242Z",
      "Seating": 4
    },
    {
      "Name": "Chevrolet 2",
      "Model": "Expedition",
      "Type": "Coupe",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-12-10T10:22:50.451Z",
      "Seating": 7
    },
    {
      "Name": "Dodge Wrangler",
      "Model": "Countach",
      "Type": "Hatchback",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2023-10-20T01:07:17.147Z",
      "Seating": 2
    },
    {
      "Name": "Maserati LeBaron",
      "Model": "Mercielago",
      "Type": "Convertible",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-02-15T02:07:23.947Z",
      "Seating": 6
    },
    {
      "Name": "Land Rover Model 3",
      "Model": "Challenger",
      "Type": "Sedan",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2028-01-29T06:45:57.573Z",
      "Seating": 6
    },
    {
      "Name": "Dodge Land Cruiser",
      "Model": "Colorado",
      "Type": "Minivan",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2028-05-11T18:09:20.801Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Roadster",
      "Model": "Mercielago",
      "Type": "Wagon",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2027-12-21T05:20:57.491Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Ranchero",
      "Model": "2",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2028-01-02T17:47:11.325Z",
      "Seating": 2
    },
    {
      "Name": "Smart Model S",
      "Model": "Mercielago",
      "Type": "Cargo Van",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-11-02T06:00:32.513Z",
      "Seating": 6
    },
    {
      "Name": "Volvo Sentra",
      "Model": "Escalade",
      "Type": "Minivan",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2027-08-25T19:14:22.029Z",
      "Seating": 3
    },
    {
      "Name": "Smart Camry",
      "Model": "A4",
      "Type": "SUV",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2023-11-03T13:27:15.361Z",
      "Seating": 5
    },
    {
      "Name": "Toyota PT Cruiser",
      "Model": "Model 3",
      "Type": "Sedan",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2023-11-27T15:27:59.356Z",
      "Seating": 3
    },
    {
      "Name": "Fiat Volt",
      "Model": "Alpine",
      "Type": "Coupe",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2027-06-06T18:11:02.264Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Element",
      "Model": "Colorado",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-01-05T22:32:22.529Z",
      "Seating": 3
    },
    {
      "Name": "Mercedes Benz Escalade",
      "Model": "Taurus",
      "Type": "Coupe",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-09-07T16:01:04.614Z",
      "Seating": 3
    },
    {
      "Name": "BMW Expedition",
      "Model": "Ranchero",
      "Type": "SUV",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2024-03-15T14:01:02.393Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover Wrangler",
      "Model": "Accord",
      "Type": "Sedan",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2025-01-26T22:21:50.782Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Model 3",
      "Model": "Sentra",
      "Type": "Hatchback",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-06-29T16:08:11.246Z",
      "Seating": 5
    },
    {
      "Name": "Volkswagen Spyder",
      "Model": "Camry",
      "Type": "Sedan",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-02-20T07:15:08.098Z",
      "Seating": 7
    },
    {
      "Name": "Smart Spyder",
      "Model": "Colorado",
      "Type": "Cargo Van",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2023-02-25T13:45:56.872Z",
      "Seating": 7
    },
    {
      "Name": "Aston Martin Camry",
      "Model": "Ranchero",
      "Type": "Coupe",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2028-06-30T15:05:10.041Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Roadster",
      "Model": "Golf",
      "Type": "SUV",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2027-07-06T10:09:29.500Z",
      "Seating": 6
    },
    {
      "Name": "Toyota Model T",
      "Model": "Jetta",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2026-01-24T01:44:07.711Z",
      "Seating": 7
    },
    {
      "Name": "BMW Charger",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2025-10-08T17:50:39.515Z",
      "Seating": 4
    },
    {
      "Name": "Mazda Roadster",
      "Model": "Grand Cherokee",
      "Type": "Cargo Van",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2023-03-21T16:14:56.133Z",
      "Seating": 4
    },
    {
      "Name": "Volvo El Camino",
      "Model": "Beetle",
      "Type": "Minivan",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2028-06-25T06:17:12.734Z",
      "Seating": 4
    },
    {
      "Name": "Ford Element",
      "Model": "Durango",
      "Type": "Convertible",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2026-03-20T08:42:58.872Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Focus",
      "Model": "Jetta",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2027-01-19T00:16:59.962Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Fiesta",
      "Model": "Sentra",
      "Type": "Coupe",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2027-04-20T21:15:48.885Z",
      "Seating": 5
    },
    {
      "Name": "Smart Alpine",
      "Model": "XC90",
      "Type": "Passenger Van",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2024-06-03T04:40:24.026Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac Altima",
      "Model": "Alpine",
      "Type": "Passenger Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-04-23T22:03:35.019Z",
      "Seating": 5
    },
    {
      "Name": "BMW A4",
      "Model": "A4",
      "Type": "Convertible",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-10-12T16:29:06.667Z",
      "Seating": 3
    },
    {
      "Name": "Volvo Model S",
      "Model": "Camaro",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2025-03-02T16:42:01.196Z",
      "Seating": 3
    },
    {
      "Name": "BMW Ranchero",
      "Model": "Durango",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Dodge",
      "Manufacturing Date": "2025-02-22T05:18:19.578Z",
      "Seating": 3
    },
    {
      "Name": "Smart Fortwo",
      "Model": "El Camino",
      "Type": "Hatchback",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2027-01-19T16:44:21.534Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Roadster",
      "Model": "Civic",
      "Type": "Cargo Van",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2028-07-01T08:37:22.780Z",
      "Seating": 2
    },
    {
      "Name": "Aston Martin Challenger",
      "Model": "Prius",
      "Type": "Minivan",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-06-27T18:11:35.414Z",
      "Seating": 6
    },
    {
      "Name": "Lamborghini Alpine",
      "Model": "Sentra",
      "Type": "Sedan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2028-11-19T17:18:41.817Z",
      "Seating": 7
    },
    {
      "Name": "Land Rover Durango",
      "Model": "Colorado",
      "Type": "SUV",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-03-06T20:15:50.639Z",
      "Seating": 3
    },
    {
      "Name": "Porsche Mercielago",
      "Model": "Grand Cherokee",
      "Type": "Passenger Van",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2024-10-27T20:50:14.584Z",
      "Seating": 5
    },
    {
      "Name": "Aston Martin Aventador",
      "Model": "Camaro",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2027-10-12T11:43:03.941Z",
      "Seating": 4
    },
    {
      "Name": "Rolls Royce Accord",
      "Model": "A4",
      "Type": "Convertible",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2026-07-20T23:06:02.655Z",
      "Seating": 6
    },
    {
      "Name": "Land Rover Model S",
      "Model": "Volt",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-03-06T00:16:14.287Z",
      "Seating": 4
    },
    {
      "Name": "Lamborghini Fiesta",
      "Model": "2",
      "Type": "Minivan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-02-03T12:02:24.716Z",
      "Seating": 6
    },
    {
      "Name": "BMW Malibu",
      "Model": "911",
      "Type": "Coupe",
      "Manufacturer": "Smart",
      "Manufacturing Date": "2023-10-09T13:18:39.797Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Camry",
      "Model": "Silverado",
      "Type": "SUV",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-05-13T23:47:00.954Z",
      "Seating": 2
    },
    {
      "Name": "Lamborghini Ranchero",
      "Model": "Corvette",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Lamborghini",
      "Manufacturing Date": "2026-05-25T06:24:35.460Z",
      "Seating": 7
    },
    {
      "Name": "Maserati Civic",
      "Model": "Model S",
      "Type": "Convertible",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2025-07-17T18:03:17.866Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Focus",
      "Model": "Element",
      "Type": "Sedan",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2023-02-03T02:44:12.650Z",
      "Seating": 2
    },
    {
      "Name": "Chrysler V90",
      "Model": "CTS",
      "Type": "Sedan",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2025-05-08T21:25:45.999Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac Aventador",
      "Model": "Expedition",
      "Type": "Coupe",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2024-09-03T16:03:41.828Z",
      "Seating": 5
    },
    {
      "Name": "Smart Countach",
      "Model": "XTS",
      "Type": "Cargo Van",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2024-07-13T10:53:51.704Z",
      "Seating": 3
    },
    {
      "Name": "Nissan Altima",
      "Model": "CX-9",
      "Type": "Coupe",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2023-01-24T07:19:25.114Z",
      "Seating": 4
    },
    {
      "Name": "Honda Durango",
      "Model": "Cruze",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2027-11-13T00:11:03.549Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Focus",
      "Model": "Focus",
      "Type": "Convertible",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2025-01-25T14:30:19.278Z",
      "Seating": 4
    },
    {
      "Name": "Polestar V90",
      "Model": "Charger",
      "Type": "Hatchback",
      "Manufacturer": "BMW",
      "Manufacturing Date": "2025-04-13T21:18:00.467Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Model S",
      "Model": "Grand Caravan",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Porsche",
      "Manufacturing Date": "2024-09-02T13:49:11.996Z",
      "Seating": 6
    },
    {
      "Name": "Ferrari Charger",
      "Model": "Model T",
      "Type": "Passenger Van",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2028-02-05T02:26:57.240Z",
      "Seating": 7
    },
    {
      "Name": "Porsche LeBaron",
      "Model": "Camaro",
      "Type": "Convertible",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2028-01-28T07:20:09.645Z",
      "Seating": 2
    },
    {
      "Name": "Mini Expedition",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2025-07-05T22:46:16.810Z",
      "Seating": 3
    },
    {
      "Name": "Chevrolet Colorado",
      "Model": "Model 3",
      "Type": "Sedan",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2025-01-30T02:17:07.918Z",
      "Seating": 2
    },
    {
      "Name": "Dodge Fortwo",
      "Model": "Volt",
      "Type": "SUV",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2025-01-11T02:56:23.964Z",
      "Seating": 5
    },
    {
      "Name": "Lamborghini Camaro",
      "Model": "Altima",
      "Type": "SUV",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2024-05-12T20:58:59.259Z",
      "Seating": 7
    },
    {
      "Name": "Mazda El Camino",
      "Model": "XC90",
      "Type": "Cargo Van",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2023-12-09T00:12:35.562Z",
      "Seating": 6
    },
    {
      "Name": "Mini Golf",
      "Model": "2",
      "Type": "Coupe",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2027-03-31T12:23:07.649Z",
      "Seating": 6
    },
    {
      "Name": "Porsche El Camino",
      "Model": "Sentra",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2024-05-14T06:33:05.698Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Prius",
      "Model": "Altima",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2026-11-25T04:46:01.641Z",
      "Seating": 5
    },
    {
      "Name": "Smart 2",
      "Model": "Countach",
      "Type": "Sedan",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2025-12-30T04:14:41.324Z",
      "Seating": 4
    },
    {
      "Name": "Mazda 2",
      "Model": "Escalade",
      "Type": "SUV",
      "Manufacturer": "Ferrari",
      "Manufacturing Date": "2024-10-12T03:05:13.780Z",
      "Seating": 5
    },
    {
      "Name": "Audi Escalade",
      "Model": "Roadster",
      "Type": "Cargo Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-08-22T03:33:44.517Z",
      "Seating": 5
    },
    {
      "Name": "Audi Aventador",
      "Model": "Accord",
      "Type": "Cargo Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2028-03-28T10:04:37.872Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Focus",
      "Model": "Camry",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2026-04-20T00:07:30.149Z",
      "Seating": 7
    },
    {
      "Name": "Hyundai Alpine",
      "Model": "Grand Caravan",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2024-08-31T08:43:47.698Z",
      "Seating": 5
    },
    {
      "Name": "Volvo Expedition",
      "Model": "XC90",
      "Type": "Wagon",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2028-08-26T10:47:14.320Z",
      "Seating": 6
    },
    {
      "Name": "Cadillac Camry",
      "Model": "Mustang",
      "Type": "Hatchback",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2023-07-23T07:01:49.737Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover XTS",
      "Model": "Mercielago",
      "Type": "Cargo Van",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2026-06-11T00:53:59.238Z",
      "Seating": 6
    },
    {
      "Name": "Audi Jetta",
      "Model": "Colorado",
      "Type": "Wagon",
      "Manufacturer": "Bugatti",
      "Manufacturing Date": "2027-06-20T10:20:12.053Z",
      "Seating": 4
    },
    {
      "Name": "Mercedes Benz Roadster",
      "Model": "Fiesta",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-02-15T12:46:25.062Z",
      "Seating": 5
    },
    {
      "Name": "Fiat Accord",
      "Model": "Volt",
      "Type": "Cargo Van",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2027-03-28T12:09:52.309Z",
      "Seating": 3
    },
    {
      "Name": "Cadillac Volt",
      "Model": "Camaro",
      "Type": "SUV",
      "Manufacturer": "Ford",
      "Manufacturing Date": "2024-11-27T07:19:23.254Z",
      "Seating": 5
    },
    {
      "Name": "BMW A4",
      "Model": "F-150",
      "Type": "Minivan",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2026-04-13T06:04:19.511Z",
      "Seating": 6
    },
    {
      "Name": "Maserati Accord",
      "Model": "Focus",
      "Type": "Passenger Van",
      "Manufacturer": "Maserati",
      "Manufacturing Date": "2025-03-10T13:32:19.239Z",
      "Seating": 5
    },
    {
      "Name": "Cadillac A8",
      "Model": "LeBaron",
      "Type": "Hatchback",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2027-03-15T07:25:19.256Z",
      "Seating": 2
    },
    {
      "Name": "Volvo Spyder",
      "Model": "Model S",
      "Type": "Wagon",
      "Manufacturer": "Chevrolet",
      "Manufacturing Date": "2026-04-18T05:13:26.611Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Volt",
      "Model": "Fortwo",
      "Type": "Cargo Van",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2026-07-30T05:43:29.375Z",
      "Seating": 4
    },
    {
      "Name": "Volkswagen Land Cruiser",
      "Model": "Land Cruiser",
      "Type": "Coupe",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2024-08-02T15:01:46.527Z",
      "Seating": 5
    },
    {
      "Name": "Bugatti Model S",
      "Model": "Malibu",
      "Type": "Cargo Van",
      "Manufacturer": "Cadillac",
      "Manufacturing Date": "2023-10-05T17:45:15.220Z",
      "Seating": 3
    },
    {
      "Name": "Land Rover Altima",
      "Model": "911",
      "Type": "Sedan",
      "Manufacturer": "Jaguar",
      "Manufacturing Date": "2025-02-26T17:43:17.093Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Model S",
      "Model": "Ranchero",
      "Type": "Passenger Van",
      "Manufacturer": "Nissan",
      "Manufacturing Date": "2025-09-14T17:19:20.284Z",
      "Seating": 2
    },
    {
      "Name": "Jeep 911",
      "Model": "Land Cruiser",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-07-06T21:52:37.117Z",
      "Seating": 6
    },
    {
      "Name": "Mini Colorado",
      "Model": "Civic",
      "Type": "Hatchback",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2025-09-10T18:12:23.489Z",
      "Seating": 4
    },
    {
      "Name": "Kia Mercielago",
      "Model": "Escalade",
      "Type": "Passenger Van",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2024-04-23T20:31:45.507Z",
      "Seating": 5
    },
    {
      "Name": "Hyundai Colorado",
      "Model": "Taurus",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Chrysler",
      "Manufacturing Date": "2026-04-13T20:38:25.945Z",
      "Seating": 6
    },
    {
      "Name": "Maserati El Camino",
      "Model": "Civic",
      "Type": "Sedan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2024-08-26T06:04:08.839Z",
      "Seating": 6
    },
    {
      "Name": "Rolls Royce Silverado",
      "Model": "Camaro",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Land Rover",
      "Manufacturing Date": "2023-09-08T05:25:43.268Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini Challenger",
      "Model": "Volt",
      "Type": "Wagon",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2025-04-16T02:02:53.042Z",
      "Seating": 6
    },
    {
      "Name": "Polestar Grand Cherokee",
      "Model": "Durango",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Mini",
      "Manufacturing Date": "2027-10-02T22:02:15.847Z",
      "Seating": 5
    },
    {
      "Name": "Volkswagen Expedition",
      "Model": "XTS",
      "Type": "Hatchback",
      "Manufacturer": "Kia",
      "Manufacturing Date": "2024-08-29T17:30:21.234Z",
      "Seating": 4
    },
    {
      "Name": "Land Rover Fiesta",
      "Model": "ATS",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Tesla",
      "Manufacturing Date": "2023-04-27T11:06:48.804Z",
      "Seating": 6
    },
    {
      "Name": "Mazda Camry",
      "Model": "Fortwo",
      "Type": "Sedan",
      "Manufacturer": "Volkswagen",
      "Manufacturing Date": "2026-12-25T08:18:34.562Z",
      "Seating": 4
    },
    {
      "Name": "Hyundai Altima",
      "Model": "A4",
      "Type": "Coupe",
      "Manufacturer": "Fiat",
      "Manufacturing Date": "2023-04-08T04:31:14.228Z",
      "Seating": 3
    },
    {
      "Name": "Lamborghini Camry",
      "Model": "CX-9",
      "Type": "Coupe",
      "Manufacturer": "Audi",
      "Manufacturing Date": "2023-02-05T10:31:56.153Z",
      "Seating": 7
    },
    {
      "Name": "Jeep Grand Cherokee",
      "Model": "Taurus",
      "Type": "Cargo Van",
      "Manufacturer": "Honda",
      "Manufacturing Date": "2027-12-07T03:00:10.666Z",
      "Seating": 6
    },
    {
      "Name": "Aston Martin Impala",
      "Model": "Durango",
      "Type": "Hatchback",
      "Manufacturer": "Mercedes Benz",
      "Manufacturing Date": "2023-08-13T13:24:34.734Z",
      "Seating": 4
    },
    {
      "Name": "Maserati Mercielago",
      "Model": "XC90",
      "Type": "Crew Cab Pickup",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2023-02-18T20:05:16.093Z",
      "Seating": 6
    },
    {
      "Name": "Fiat XC90",
      "Model": "XC90",
      "Type": "Wagon",
      "Manufacturer": "Jeep",
      "Manufacturing Date": "2026-06-02T21:56:07.667Z",
      "Seating": 4
    },
    {
      "Name": "Ferrari LeBaron",
      "Model": "Model S",
      "Type": "Hatchback",
      "Manufacturer": "Rolls Royce",
      "Manufacturing Date": "2027-10-05T09:31:47.678Z",
      "Seating": 7
    },
    {
      "Name": "Fiat V90",
      "Model": "Grand Caravan",
      "Type": "Hatchback",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2025-01-06T23:22:53.709Z",
      "Seating": 7
    },
    {
      "Name": "Bentley Silverado",
      "Model": "Land Cruiser",
      "Type": "Coupe",
      "Manufacturer": "Aston Martin",
      "Manufacturing Date": "2026-08-24T03:36:05.552Z",
      "Seating": 5
    },
    {
      "Name": "Maserati Mercielago",
      "Model": "Corvette",
      "Type": "Wagon",
      "Manufacturer": "Bentley",
      "Manufacturing Date": "2027-08-18T06:51:36.448Z",
      "Seating": 7
    },
    {
      "Name": "Hyundai Taurus",
      "Model": "Mercielago",
      "Type": "Extended Cab Pickup",
      "Manufacturer": "Volvo",
      "Manufacturing Date": "2024-07-23T00:43:17.227Z",
      "Seating": 7
    },
    {
      "Name": "Dodge Camry",
      "Model": "Fiesta",
      "Type": "Cargo Van",
      "Manufacturer": "Toyota",
      "Manufacturing Date": "2026-12-01T09:26:02.794Z",
      "Seating": 5
    },
    {
      "Name": "Nissan Mustang",
      "Model": "Grand Cherokee",
      "Type": "Coupe",
      "Manufacturer": "Mazda",
      "Manufacturing Date": "2026-08-25T17:05:46.477Z",
      "Seating": 4
    },
    {
      "Name": "Bugatti Model S",
      "Model": "Camry",
      "Type": "Minivan",
      "Manufacturer": "Polestar",
      "Manufacturing Date": "2023-09-21T13:23:12.074Z",
      "Seating": 2
    },
    {
      "Name": "BMW Explorer",
      "Model": "Prius",
      "Type": "Sedan",
      "Manufacturer": "Hyundai",
      "Manufacturing Date": "2028-07-07T17:21:25.997Z",
      "Seating": 3
    }
  ]
  );
}

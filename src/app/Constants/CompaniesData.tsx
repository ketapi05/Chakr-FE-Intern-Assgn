export type Company = {
    id: number;
    name: string;
    domain: string;
    founder: string;
    creationdate: string;
    employees: string;
    city: string;
    country: string;
  };
  
  export const DataofTableCompany: Company[] = [
    {
      id: 1,
      name: "PureCode AI",
      domain: "purecode.ai",
      founder: "Edward Daniel",
      creationdate: (Date().toString()),
      employees: "100",
      city: "Hyderabad",
      country: "India",
    },
    {
      id: 2,
      name: "Decentro",
      domain: "decentro.tech",
      founder: "Rohit Taneja",
      creationdate: (Date().toString()),
      employees: "240",
      city: "Bengaluru",
      country: "India",
    },
    {
      id: 3,
      name: "Consat Orahi",
      domain: "OrahiConsat.com",
      founder: "Arun Bhati",
      creationdate: (Date().toString()),
      employees: "500",
      city: "Gurgaon",
      country: "India",
    },
    {
      id: 4,
      name: "Wavity Tech",
      domain: "Wavitytech.in",
      founder: "Sakshi Bhargava",
      creationdate: (Date().toString()),
      employees: "5,34,000",
      city: "Chennai",
      country: "India",
    },
  ];
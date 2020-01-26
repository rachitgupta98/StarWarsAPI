import React, { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./useFetch";
import MUIDataTable from "mui-datatables";
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true
    }
  },

  {
    name: "gender",
    label: "Gender",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "height",
    label: "Height",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "homeworld",
    label: "Homeworld",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "birth_year",
    label: "Birth_year",
    options: {
      filter: false,
      sort: false
    }
  }
];

function App() {
  let url = "https://swapi.co/api/people";
  const data = useFetch(url);
  const options = {
    print: false,
    download: false,
    viewColumns: false,
    selectableRowsOnClick: true,
    selectableRows: "none"
  };
  return (
    <div>
      <MUIDataTable
        title={"Star Wars"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;

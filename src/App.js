import React, { useState, useEffect, Fragment } from "react";
import useFetch from "./useFetch";
import MUIDataTable from "mui-datatables";

import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
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

const App = () => {
  let history = useHistory();

  let url = "https://swapi.co/api/people";
  const fullData = useFetch(url).fullData;
  const data = useFetch(url).data;

  // console.log(fullData);
  const onAct = rowData =>
    history.push("/details", { datas: rowData, fullData: fullData });
  const options = {
    print: false,
    download: false,
    viewColumns: false,
    selectableRowsOnClick: false,
    selectableRows: "none",
    responsive: "scrollMaxHeight",
    onRowClick: onAct
  };

  return (
    <MUIDataTable
      title={"Star Wars"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default withRouter(App);

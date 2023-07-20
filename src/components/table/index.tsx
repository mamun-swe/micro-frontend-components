import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface DataRow {
  title: string;
  director: string;
  year: string;
}

type PropsTypes = {
  data: DataRow[] | [];
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Director",
    selector: (row) => row.director,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

export const Table: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  return <DataTable columns={columns} data={props.data} />;
};

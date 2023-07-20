import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Navbar } from "./components/navbar";
import { Table } from "./components/table";
import { Footer } from "./components/footer";

const data = [
  {
    title: "Title 1",
    director: "Director 1",
    year: "2023",
  },
  {
    title: "Title 2",
    director: "Director 2",
    year: "2023",
  },
  {
    title: "Title 3",
    director: "Director 3",
    year: "2023",
  },
  {
    title: "Title 4",
    director: "Director 4",
    year: "2023",
  },
  {
    title: "Title 5",
    director: "Director 5",
    year: "2023",
  },
];

const App: React.FC = (): JSX.Element => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Navbar />

    <div className="py-10">
      <p className="text-sm font-bold">Data table component.</p>
      <Table data={data} />
    </div>

    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const App: React.FC = (): JSX.Element => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Navbar />

    <div className="py-10">
      <p>Components demo fdg</p>
    </div>

    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

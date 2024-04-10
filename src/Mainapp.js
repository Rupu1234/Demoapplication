import React from "react";
import App from "./App";
import Maincomponent from "./Maincomponent/Maincomponent";
import { BrowserRouter as Rout, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const Mainapp = () => {
  return (
    <Provider store={store} >
      <Rout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Maincomponent" element={<Maincomponent />} />
        </Routes>
      </Rout>
    </Provider>
  );
};

export default Mainapp;

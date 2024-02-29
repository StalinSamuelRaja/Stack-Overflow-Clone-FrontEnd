import React from "react";
import  ReactDOM   from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import questionreducer from "./reducers/questionreducer.js";
import answerreducer from "./reducers/answerreducer.js";
import { Provider } from "react-redux";


const store = configureStore({
  reducer: {
    Questiondata: questionreducer,
    Answerdata: answerreducer,
  },
});

 ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
); 
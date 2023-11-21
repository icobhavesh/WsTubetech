import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import AppProvider, { Data } from './context';
// import Apps from "./Apps";

import Parents from "./Wstubetech/Parents";
// import Project_2 from "./pagination/Project2/Project_2";
// import Project_3 from "./pagination/Project3/Project_3";
// import HeroSection from "./HeroSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Parents />
    {/* <HeroSection/> */}
    {/* <Project_3/> */}
    {/* <Project_2/> */}
    {/* <Apps/> */}
    {/* <AppProvider>
    <App />
   </AppProvider>
    */}
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

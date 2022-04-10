import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./component";

import "./App.css";

import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";
import HelloWorld from './helloWorld'; //We will add this code in the next step

const App = () => {

  const{favoriteCryptocurrency}= useFlags()

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
            {favoriteCryptocurrency? <h1 style={{color: "red"}}>hughug</h1> : <h1 style={{color: "red"}}>sadsad</h1>}
            <HelloWorld />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default withLDProvider({
    clientSideID: process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID,
    user: {
        key: "zz9ceb",
        name: "Tony",
        email: "tony.w.trinh3@gmail.com",
        custom:{
          groups:[
              "Google",
              "Microsoft"
              ]
          }
    },
    options: {
        bootstrap: "localStorage",
    },
})(App);

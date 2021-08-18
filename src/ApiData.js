import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ApiData = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
            const response = await fetch("https://reqres.in/api/users");

            const json = await response.json();
            setData(json.data);
        } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-3">API Data</h1>
        <div className="row gx-5">
          {data.map((curr, id) => {
            return <Card curr={curr} key={id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default ApiData;

import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const FetchData = async () => {
    try {
      // const response = await fetch("https://reqres.in/api/users");
      const response = await fetch(
        `https://reqres.in/api/users?page=${current}`
      );
      const json = await response.json();
      setData(json.data);
      setNextPage(data.next);
      setPreviousPage(data.previous);
      // console.log(json);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    FetchData();
  }, [current]);

  const incrementPage = () => {
    if (current >= 2) return;
    setCurrent((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    if (current <= 1) return;
    setCurrent((prevPage) => prevPage - 1);
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-3">API Data</h1>
        <div className="row gx-5">
          {data.map((curr, id) => {
            return <Card curr={curr} key={id} />;
          })}
        </div>
        <Pagination decre={decrementPage} incre={incrementPage} />
      </div>
    </>
  );
};

export default ApiData;

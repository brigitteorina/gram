import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Stories from "./Stories";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    async function getDetails(url) {
     const promise = await fetch(url, {
       method: "GET",
       credentials: "same-origin", //include, same-origin
        headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
        },
      });
      const response = await promise.json();
     return response;
    }
    getDetails("https://my-json-server.typicode.com/brigitteorina/My-json-file/users").then((data) => {
      setUsers(data);
    });

    const getGiphy = async () => {
      const promise = await fetch("https://api.giphy.com/v1/gifs/random?api_key=4Azu3zKqWxAkpdActoiM04XyEP5QDAo1&tag=&rating=g");
      
      const response = await promise.json();
       console.log(response.data);
      return response.data;
    };
    getGiphy().then((res) => {
      console.log(res.url);
      setData(res);
    });
  }, []);
  

export default Home;

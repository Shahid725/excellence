import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {

  const [excelData, setExcelData] = useState([])

  console.log("data updated", excelData)

  const fetchApi = () => {
    // Make a request for a user with a given ID
    axios.get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setExcelData(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    fetchApi();
  }, [])



  return (
    <div className="App">
      <h1>Api page</h1>
      <h1>response.data.data</h1>
      {/* <page1 /> */}
      {/* <Response /> */}
      {/* <h1>{item.id}</h1> */}
      {/* {excelData.map(item, id) */}



      {excelData.map((item, i) => {
        <div key={i}>
          <h1>{item.id}</h1>
          <h5>{item.email}</h5>
        </div>
      })}
      <excelData />
    </div>
  );
}

export default App;

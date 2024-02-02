import "./App.scss";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
function App() {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      nihil id, et quidem provident ratione expedita! Similique vel aliquam
      quidem?
    </div>
  );
}

export default App;

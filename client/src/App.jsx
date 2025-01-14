import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loader from './components/Loader';

import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   HideLoading,
//   SetPortfolioData,
//   ShowLoading,
//   ReloadData,
// } from "./redux/rootSlice";





function App() {

  const {loading,portfolioData} = useSelector((state)=> state.root)
  const dispatch = useDispatch()

  const getPortfolioData = async ()=>{
    try {
      dispatch(ShowLoading())
      const response = await axios.get("/api/portfolio/get-portfolio-data")
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
    } catch (error) {
      console.log(error);
      dispatch(HideLoading())
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData()
    }
  }, [])

  
  
  // const { loading, portfolioData } = useSelector(
  //   (state) => state.root
  // );
  return (
    <BrowserRouter>
      {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

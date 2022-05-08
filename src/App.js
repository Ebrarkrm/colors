import './App.css';
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import MainContext from "./contexts/MainContext";
import BrandsData from "./brand.json";
import {useEffect, useState} from "react";

function App() {
    const brandsArray =[]
    Object.keys(BrandsData).map(key=>{
        brandsArray.push(BrandsData[key])
    })
    const [brands,setBrands]=useState(brandsArray)
    const [selectedBrands,setSelectedBrands]=useState([])
    const [search,setSearch]=useState("")
    const data= {
        brands,
        setSelectedBrands,
        selectedBrands,
        search,
        setSearch
    }
    useEffect(()=>{
        setBrands(brandsArray.filter(b=>b.title.toLowerCase().includes(search)))
    },[search])

  return (
    <>
       <MainContext.Provider value={data}>
           <SideBar/>
           <Content/>
       </MainContext.Provider>

    </>
  );
}

export default App;

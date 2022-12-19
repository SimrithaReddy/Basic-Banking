import React ,{ useState,useEffect } from "react";
import Header from '../header/header'
import Footer from '../footer/footer'

const History=  ()=>{
    const [hist,setHist]=useState([])
  useEffect(()=>{
    fetch('https://banking-bd5q.onrender.com/details')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.reverse()
        setHist(data)
        console.log(data);
    }).catch((e) => {
        console.log(e.message);
    })
  },[])
    return(
        <>
        <Header/>
        <ul className="mb-60 mx-40 mt-10">
         {
            hist.map((ele,ind)=>{
                return <li key={`statement${ind+1}`}><b>{ele.statement}</b></li>
            })
         }
        </ul>
        <Footer/>
        </>
    )
}

export default History;
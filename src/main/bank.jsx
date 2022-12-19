import { useEffect, useState } from "react";
import GripHeader from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import "./bank.css"
import TableBody from "./table-body";

const BankPage = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://banking-bd5q.onrender.com/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserData(data)
            }).catch((e) => {
                console.log(e.message);
            })
    }, [])

    return (
        <>
            <GripHeader />
            <br className="m-10" />
            <TableBody userData={userData} />
            <Link to="/transfers">
                <button
                    className="inline-flex mt-10 mb-10 mx-[600px] text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Transfer</button>
            </Link>

        </>
    )
}

export default BankPage;
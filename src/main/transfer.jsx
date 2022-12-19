import { useEffect, useState } from "react";
import Axios from "axios";

import GripHeader from "../header/header";


const TransferPage = () => {


    const [pay, setPay] = useState({ sender: "1111001011", receiver: "1111001011", amount: "" });
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://banking-bd5q.onrender.com/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserData(data)
                console.log(data)
            }).catch((e) => {
                console.log(e.message);
            })
    }, [])

    const url = "https://banking-bd5q.onrender.com/transfers"

    const [re, setRe] = useState(0)
    const [res, setResult] = useState(1)

    const handlePayment = async (e) => {
        e.preventDefault();
        Axios.post(url, {
            sender: pay.sender,
            receiver: pay.receiver,
            amount: pay.amount
        }).then(res => {
            setRe("Payment Successful")
            setResult(res.data)
            if (res.data != 0) alert('Payment Successful')

        }).catch(e => {
            console.log(e.message)
        })



    }
    return (
        <>
            <GripHeader />
            <div className="m-[300px] mt-10 mr-100 m-auto  h-180 border-2 border-gray-900 box-border">
                <h1 className="text-5xl pl-80 pt-10 text-blue-900 pb-10 text-sky-600 font-bold">Go Digital</h1>
                <div className="pl-60 mb-20">
                    <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handlePayment(e)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sender">
                                    Sender:
                                </label>
                                <select value={pay.sender} onChange={(event) => {
                                    setPay({ ...pay, sender: event.target.value });


                                }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sender" name="sender">

                                    {userData.map((e, i) => {
                                        return <option key={i}>{e.account}</option>
                                    })}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="receiver">
                                    Receiver:
                                </label>
                                <select value={pay.receiver} onChange={(event) => { setPay({ ...pay, receiver: event.target.value }) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="receiver" name="receiver">

                                    {userData.map((e, i) => {

                                        return <option key={i}>{e.account}</option>
                                    })}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                    Amount:
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="amount" type="text" placeholder="amount" name="amount"
                                    onChange={(event) => { setPay({ ...pay, amount: event.target.value }) }} />
                            </div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                        {res === 0 ? <p className="text-red-500">*Insufficient Balance</p> : <p></p>}

                        {re && res != 0 ? <div><img src="pay.png" alt="pay"></img><p className="text-3xl text-emerald-600 font-bold">{re}</p></div> : <p></p>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TransferPage;
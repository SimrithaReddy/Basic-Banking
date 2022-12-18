import { useState } from "react";
import GripHeader from "../header/header";


const TransferPage = () => {

    let [pay,setPay] = useState(0);

    const handlePayment=async (e)=>{
        e.preventDefault();
        let data = e.target;
        setPay(0)
        let formdata = new FormData(data)
        
        await fetch('https://bankserver.onrender.com/transfers',
      {
        method: 'PUT',
        body: formdata
      })
      .then(res => res.json()).then((d) => {
        console.log(data)
        alert("payment successful")
        setPay("payment Succesful")
      }).catch((e) => { console.log(e.message) })

  }
    return (
        <>
            <GripHeader />
            <div className="m-[300px] mt-10 mr-100 m-auto  h-180 border-2 border-gray-900 box-border">
                <h1 className="text-5xl pl-80 pt-10 text-blue-900 pb-10 text-sky-600 font-bold">Go Digital</h1>
              <div className="pl-60 mb-20">
              <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>handlePayment(e)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sender">
                                Sender:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sender" type="text" placeholder="account number" name="sender" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="receiver">
                                Receiver:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="receiver" type="text" placeholder="account number" name="receiver" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                Amount:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="amount" name="amount" />
                        </div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                    </form>

                    {pay?<div><img src="pay.png" alt="pay"></img><p className="text-3xl text-emerald-600 font-bold">{pay}</p></div>:<p></p>}
                </div>
              </div>
            </div>
        </>
    )
}

export default TransferPage;
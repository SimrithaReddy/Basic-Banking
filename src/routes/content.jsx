import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "../App";
import BankPage from "../main/bank";
import TransferPage from "../main/transfer";
import History from "../main/history";

const ContentRoute = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/users" element={<BankPage/>}/>
            <Route path="/transfers" element={<TransferPage/>}/>
            <Route path="/details" element={<History/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default ContentRoute;
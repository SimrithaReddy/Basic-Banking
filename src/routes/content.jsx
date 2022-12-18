import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "../App";
import BankPage from "../main/bank";
import TransferPage from "../main/transfer";

const ContentRoute = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/users" element={<BankPage/>}/>
            <Route path="/transfers" element={<TransferPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default ContentRoute;
import React from "react";
import "../styles/global.css";
import Layout from "../containers/Layaout";
import {Login} from "../containers/Login";
import { RecoveryPassword } from "./RecoveryPassword";
function App(){
    return(
        <Layout>
            <Login/>
            <RecoveryPassword/>
        </Layout>
    )
}
export default App
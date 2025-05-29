import { Routes, Route } from "react-router-dom";
import Header from "./../Header/Header";
import Home from "./../Home/Home"
import Footer from "../Footer/Footer.jsx";
import Suggestions from "./../Suggestions/Suggestions.jsx"

const App= ()=>{
    return(
        <>
            < Header title="Financial Advisor"/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/suggestions" element={<Suggestions />}/>
            </Routes>
            <Footer title="© 2025 Financial Advisor"/>
        </>
    )
}

export default App;
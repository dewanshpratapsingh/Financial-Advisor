import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./../Header/Header";

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const App= ()=>{
    return(
        <>
            < Header title="Financial Advisor"/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </>
    )
}

export default App;
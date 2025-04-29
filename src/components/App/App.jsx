import { Routes, Route } from "react-router-dom";
import Header from "./../Header/Header";
import Home from "./../Home/Home"
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
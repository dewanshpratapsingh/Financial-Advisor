import react, { useState } from "react";
import styles from "./InfoCollector.module.css"
import { useNavigate } from "react-router-dom";



const InfoForm = () =>{
    const [salary,setSalary] = useState(0);
    const [totalEMI,setTotalEMI] = useState(0);
    const [risk,setRisk] = useState(3);
    const [age,setAge] = useState(0);
    const [location,setLocation]=useState("India");
    const [investment,setInvestments]=useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            salary: salary,
            emi : totalEMI,
            risk: risk,
            age: age,
            location: location,
            investment: investment
        }
        navigate("/suggestions", { state: formData });
    }
    return(
        <form onSubmit = {handleSubmit}> 
            <label>Salary :</label>
            <br/>
            <input type="Number" name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}></input>
            <br/>
            <label>Total EMI amount:</label>
            <br/>
            <input type="Number" name="totalEMI" value={totalEMI} placeholder="0" onChange={(e)=>{
                setTotalEMI(e.target.value)
            }}></input>
            <br/>
            <label>Location :</label>
            <br/>
            <input type="text" name="location" value={location} onChange={(e)=>setLocation(e.target.value)}></input>
            <br/>
            <label>Risk :</label>
            <br/>
            <input type="range" min="0" max="5" name="risk" value={risk} onChange={(e)=>setRisk(Number(e.target.value))}>
            </input>
            <br/>
            <label>Age :</label>
            <br/>
            <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <br/>
            <label>Investments :</label>
            <br/>
            <input type="Number" name="investment" value={investment} onChange={(e)=>setInvestments(e.target.value)}></input>
            <br/>
            <button>Get Financial Suggestions</button>
        </form>
    )
}

const infoCollector = ()=>{
    return(
        <>
            <InfoForm />
        </>
    )
}

export default infoCollector;

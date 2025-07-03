import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const  fetchSuggestions = async (financialData) => {
    try {
        const url = `https://ai-financial-advisor-backend-app.vercel.app/api/ai/?salary=${financialData.salary}&emi=${financialData.emi}&location=${financialData.location}&risk=${financialData.risk}&age=${financialData.age}&investment=${financialData.investment}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch suggestions");
        }

        const ResponseData = await response.json();
        return ResponseData.data;

    } catch (error) {
        console.error("Error fetching suggestions:", error);
        throw error;
    } 
};

export default function Suggestions(){
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state;
    
    const [loading, setLoading] = useState(true);
    const [financialData, setFinancialData ] = useState(null);
    
    useEffect(() => {
        if (!formData) {
          navigate("/", { replace: true });
          return;
        }
        setLoading(true);
        fetchSuggestions(formData)
        .then((data) => {
            setFinancialData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching suggestions:", error);
            setLoading(false);
        });
    }, [formData, navigate]);

    useEffect(() => {
        if (financialData) {
          console.log({ financialData });
        }
    }, [financialData]);

    if (loading) {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4rem" , height:"60vh",width:"100vw"}}>
              <div className="spinner" />
              <p style={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: "bold" }}>Generating suggestions...</p>
              <style>
                {`
                  .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #4b9cdb;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                  }
          
                  @keyframes spin {
                    to {
                      transform: rotate(360deg);
                    }
                  }
                `}
              </style>
            </div>
          );          
    }
    const { suggestions, overall_advice, cautions, financial_snapshot } = financialData;
    console.log("Financial Data:", financialData);
    
    return (
        <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>

        <h2>Overall Advice</h2>
        <p style={{ backgroundColor: "#f0f4f8", padding: "1rem", borderRadius: "6px", lineHeight: "1.5" }}>
            {overall_advice}
        </p>

        <h2>Suggestions</h2>
        <ol>
            {suggestions.map(({ title, description }, idx) => (
            <li key={idx} style={{ marginBottom: "1rem" }}>
                <h3 style={{ marginBottom: "0.3rem", color: "#2c3e50" }}>{title}</h3>
                <p style={{ margin: 0 }}>{description}</p>
            </li>
            ))}
        </ol>

        <h2>Cautions</h2>
        <ol>
            {cautions.map(({ title, description }, idx) => (
            <li key={idx} style={{ marginBottom: "1rem" }}>
                <h3 style={{ marginBottom: "0.3rem", color: "#c0392b" }}>{title}</h3>
                <p style={{ margin: 0 }}>{description}</p>
            </li>
            ))}
        </ol>
        </div>
    )
}
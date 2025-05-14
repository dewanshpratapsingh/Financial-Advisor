import React, { useState } from "react";

const Home = () => {
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [riskCapacity, setRiskCapacity] = useState(5);
  const [loans, setLoans] = useState("");
  const [investment, setInvestment] = useState("");
  const [location, setLocation] = useState("India");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      salary: Number(salary),
      age: Number(age),
      riskCapacity: Number(riskCapacity),
      loans: Number(loans),
      investment: Number(investment),
      location: location,
    };
    const sendData = async () => {
      try {
        const params = new URLSearchParams(userData);
        const response = await fetch(`http://localhost:4000/api/ai?${params.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        console.log('Response:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    sendData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="salary">Salary (₹):</label>
        <input
          type="number"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min={18}
          required
        />
      </div>

      <div>
        <label htmlFor="riskCapacity">Risk Capacity (1 to 10):</label>
        <input
          type="range"
          id="riskCapacity"
          min="1"
          max="10"
          value={riskCapacity}
          onChange={(e) => setRiskCapacity(e.target.value)}
        />
        <span>{riskCapacity}</span>
      </div>

      <div>
        <label htmlFor="loans">Loans / EMI (₹):</label>
        <input
          type="number"
          id="loans"
          value={loans}
          onChange={(e) => setLoans(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="investment">Investment(₹):</label>
        <input
          type="number"
          id="investment"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input htmlFor="location" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;

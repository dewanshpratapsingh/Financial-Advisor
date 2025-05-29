import react, { useState } from "react";
import styles from "./InfoCollector.module.css";
import { useNavigate } from "react-router-dom";

const InfoForm = () => {
  const [salary, setSalary] = useState(0);
  const [totalEMI, setTotalEMI] = useState(0);
  const [risk, setRisk] = useState(3);
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("India");
  const [investment, setInvestments] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      salary: salary,
      emi: totalEMI,
      risk: risk,
      age: age,
      location: location,
      investment: investment
    };
    navigate("/suggestions", { state: formData });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Salary :</label>
      <input
        type="number"
        name="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label}>Total EMI amount:</label>
      <input
        type="number"
        name="totalEMI"
        value={totalEMI}
        placeholder="0"
        onChange={(e) => setTotalEMI(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label}>Location :</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label}>Risk :</label>
      <input
        type="range"
        min="0"
        max="5"
        name="risk"
        value={risk}
        onChange={(e) => setRisk(Number(e.target.value))}
        className={styles.input}
      />
      <label className={styles.label}>Age :</label>
      <input
        type="text"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label}>Investments :</label>
      <input
        type="number"
        name="investment"
        value={investment}
        onChange={(e) => setInvestments(e.target.value)}
        className={styles.input}
      />
      <button className={styles.button}>Get Financial Suggestions</button>
    </form>
  );
};

const infoCollector = () => {
  return (
    <>
      <InfoForm />
    </>
  );
};

export default infoCollector;

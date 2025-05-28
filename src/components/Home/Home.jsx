import React from "react";
import InfoCollector from "../InfoCollector/InfoCollector";
const Banner = ()=>{
    return(
        <>
            <h3>Tell Us About Yourself</h3>
            <p>Provide your financial and personal details so we can analyze your profile and offer tailored financial guidance.</p>
        </>
    )
}

const Home = () => {

  return (
    <>
      <Banner/>
      <InfoCollector/>
    </>
  )
};

export default Home;

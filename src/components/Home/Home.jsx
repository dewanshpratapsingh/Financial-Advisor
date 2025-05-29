import styles from "./Home.module.css";
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
    <div className={styles.pageContainer}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.infoCollectorWrapper}>
        <InfoCollector />
      </div>
    </div>
  );
};

export default Home;

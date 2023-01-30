import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-text"]}>
        <h1 className={classes["header"]}>
          A TOP &nbsp;STUDENT-RUN <br />
          BLOCKCHAIN INNOVATION&nbsp;HUB
        </h1>
        <p className={classes["hero-description"]}>
          Build with some of the best in Web3, do &nbsp;cutting-edge research,
          and find career opportunities through our deep industry connections.
        </p>
        <p className={classes["hero-cta"]}>
          <a
            href="https://join.slack.com/t/web3builders-group/shared_invite/zt-1ig67kr78-Gq1fhG92HoitvPNw0yvPbw"
            target="_blank"
          >
            JOIN &nbsp;US &gt;
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

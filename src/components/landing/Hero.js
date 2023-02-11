import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-text"]}>
        <h1 className={classes["header"]}>
          BUILD IN WEB3 <br />
          AT PENN.
        </h1>
        <p className={classes["hero-description"]}>
          Explore blockchain technology and the myriad of opportunities in Web3,
          together.
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

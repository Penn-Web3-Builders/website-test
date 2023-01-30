import somePic from "../../images/62fb0424f4027807fc5ccd1f_hbc-4.png";
import classes from "./GeneralDesc.module.css";

const GeneralDesc = () => {
  return (
    <div className={classes["desc-container"]}>
      <div className={classes["desc-section"]}>
        <img src={somePic} loading="lazy" alt="" />
        <h4 className={classes["desc-title"]}>EVENTS</h4>
        <p>
          We organize panels, talks, and workshops with some of the greatest
          builders, investors, and researchers in the blockchain space. The
          capstone of the year is our annual HBC conference, open to the broader
          Philadelphia community.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img src={somePic} alt="" />
        <h4 className={classes["desc-title"]}>LABS</h4>
        <p>
          Join a community of Upenn's top builders in Web3. We host technical
          workshops, organize blockchain-focused hackathons, build projects for
          leading industry partners, and support Web3 startups in the Penn
          ecosystem.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img src={somePic} alt="" />
        <h4 className={classes["desc-title"]}>101</h4>
        <p>
          A six-week introduction to foundational topics including blockchain,
          smart contracts, DAOs, NFTs, DeFi, and more. Taught in small weekly
          discussion groups, this is the best way to go from “zero-to-one” in
          your knowledge of the space.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img src={somePic} alt="" />
        <h4 className={classes["desc-title"]}>TALENT</h4>
        <p>
          Our members benefit from our extensive hiring network, crypto-related
          research projects with Harvard professors, and more. To date, we’ve
          matched dozens of club members with internship and full-time job
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default GeneralDesc;

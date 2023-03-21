import somePic from "../../images/62fb0424f4027807fc5ccd1f_hbc-4.png";
import Building from "../../images/building.png";
import Career from "../../images/career.png";
import Education from "../../images/education.png";
import Events from "../../images/events.png";
import classes from "./GeneralDesc.module.css";

const GeneralDesc = () => {
  return (
    <div className={classes["desc-container"]}>
      <div className={classes["desc-section"]}>
        <img
          className={classes["image"]}
          src={Education}
          loading="lazy"
          alt=""
        />
        <h4 className={classes["desc-title"]}>EDUCATION</h4>
        <p>
          We host our own panels, talks, and workshops, inviting speakers from
          varying areas of expertise in the blockchain space, from investing to
          engineering. Our workshop series walks beginners from zero-to-one
          through topics such as Bitcoin, Ethereum, Solidity, ZK Proofs, and
          Web3 Security. All resources are free and made available to the
          public.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img className={classes["image"]} src={Building} alt="" />
        <h4 className={classes["desc-title"]}>BUILDING</h4>
        <p>
          Build with the best and brightest at Penn in organized project groups
          or individual endeavors all with the full support and resources of the
          community. We hosted our very first hackathon this Fall, sponsored by
          Filecoin, and look forward to offering more building opportunities. As
          a community, we also attend hackathons hosted by other organizations.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img className={classes["image"]} src={Events} alt="" />
        <h4 className={classes["desc-title"]}>EVENTS</h4>
        <p>
          We place an emphasis on community values and often host sponsored
          dinners, study sessions, community events, trips, and more. Last
          semester, we sent students to New York, Boston, and Lisbon to attend
          leading blockchain conferences and connect with industry
          professionals.
        </p>
      </div>
      <div className={classes["desc-section"]}>
        <img className={classes["image"]} src={Career} alt="" />
        <h4 className={classes["desc-title"]}>CAREER</h4>
        <p>
          We want to help leverage our extensive network ranging from crypto
          funds to crypto payment solutions to help you land opportunities. We
          keep an updated job board on our newsletter, and have invited speakers
          from Galaxy Ventures, Curio.gg, The Brooker Group, and Binance Labs to
          discuss opportunities in the industry.
        </p>
      </div>
    </div>
  );
};

export default GeneralDesc;

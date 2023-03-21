import classes from "./Partnerships.module.css";

export default function Partnerships() {
  return (
    <div className={classes["partnerships-container"]}>
      <h2>Partnerships</h2>
      <p className={classes["main-desc"]}>
        We cannot do this all by ourselves! Web3 Builders welcomes protocols,
        companies, investors, and anyone else in the Web3 ecosystem to support
        what we do -{" "}
        <b>
          Become the hub for students who wish to learn more about blockchain
          technologies and contribute to the community through building,
          educating, and community building.
        </b>
      </p>
      <div className={classes["more-info"]}>
        <p>You can join our cause in many ways. Here are some ideas:</p>

        <ol style={{ listStyleType: "decimal" }}>
          <li>Speak about a topic/technology in blockchain</li>
          <li>
            Teach the useage of a specific/set of tools related to building in
            web3
          </li>
          <li>Take our members to your conference to learn & build</li>
          <li>Job opportunities</li>
          <li>Provide mentorship/workshop/prize at one of our hackathons</li>
          <li>...</li>
        </ol>
        <p className={classes['email-us']}>
          We would love to to have you on board! Email us at
          intel@web3builders.community
        </p>
      </div>
    </div>
  );
}

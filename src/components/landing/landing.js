import React from "react";
import "../../Web3Builders.css";
import classes from "./Landing.module.css";
import sponsorsPic from "../../images/62fafc331e697b8d56ead84b_hbc-logos.png";
import somePic from "../../images/62fb0424f4027807fc5ccd1f_hbc-4.png";
import Team from "./team";
import Hero from "./Hero";
import GeneralDesc from "./GeneralDesc";

export default function Landing() {
  return (
    <div>
      <Hero />
      <div className={classes["sponsors-container"]}>
        <img
          src={sponsorsPic}
          alt="Web3 Builders Sponsors - A16Z Crypto, Bain Capital Crypto, Messari, Alchemy, Blockchain Acceleration Foundation, Paradigm"
          loading="lazy"
          sizes="(max-width: 479px) 100vw, 90vw"
          className={classes.sponsors}
        />
      </div>
      <GeneralDesc />
      <Team />
    </div>
  );
}

{
  /* <div className="section-14 wf-section">
        <div className="wide-div z">
          <div className="inmost-div">
            <div className="div-block-44">
              <h1 style={{ opacity: 1 }} className="hero-header-new">
                A TOP &nbsp;STUDENT-RUN BLOCKCHAIN INNOVATION&nbsp;HUB
              </h1>
              <p style={{ opacity: 1 }} className="hero-sub">
                Build with some of the best in Web3, do &nbsp;cutting-edge
                research, and find career opportunities through our deep
                industry connections.
              </p>
              <a
                style={{ opacity: 1 }}
                href="https://join.slack.com/t/web3builders-group/shared_invite/zt-1ig67kr78-Gq1fhG92HoitvPNw0yvPbw"
                target="_blank"
                className="nav-link-2"
              >
                JOIN &nbsp;US &gt;
              </a>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <div style={{ opacity: 1 }} className="section-15 wf-section">
        <div className="wide-div">
          <div className="div-block-37 pad">
            <div className="div-block-38"></div>
          </div>
          <div className="inner-div">
            <div className="inmost-div">
              <img
                src={sponsorsPic}
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 90vw"
                alt=""
                className="image-7"
              ></img>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <div className="section-15 wf-section">
        <div className="wide-div">
          <div className="div-block-37">
            <div className="div-block-38"></div>
          </div>
          <div className="inner-div">
            <div className="inmost-div">
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div className="col-div">
                    <img
                      src={somePic}
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw"
                      alt=""
                    ></img>
                    <div className="text-block-8">EVENTS</div>
                    <p className="paragraph-12">
                      We organize panels, talks, and workshops with some of the
                      greatest builders, investors, and researchers in the
                      blockchain space. The capstone of the year is our annual
                      HBC conference, open to the broader Philadelphia
                      community.
                    </p>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div className="col-div">
                    <img
                      src={somePic}
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw"
                      alt=""
                    ></img>
                    <div className="text-block-8">LABS</div>
                    <p className="paragraph-12">
                      Join a community of Upenn's top builders in Web3. We host
                      technical workshops, organize blockchain-focused
                      hackathons, build projects for leading industry partners,
                      and support Web3 startups in the Penn ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-div">
            <div className="inmost-div">
              <div className="w-row">
                <div className="w-col w-col-6">
                  <div className="col-div">
                    <img
                      src={somePic}
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw"
                      alt=""
                    />
                    <div className="text-block-8">101</div>
                    <p className="paragraph-12">
                      A six-week introduction to foundational topics including
                      blockchain, smart contracts, DAOs, NFTs, DeFi, and more.
                      Taught in small weekly discussion groups, this is the best
                      way to go from “zero-to-one” in your knowledge of the
                      space.
                    </p>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div className="col-div">
                    <img
                      src={somePic}
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw"
                      alt=""
                    />
                    <div className="text-block-8">TALENT</div>
                    <p className="paragraph-12">
                      Our members benefit from our extensive hiring network,
                      crypto-related research projects with Harvard professors,
                      and more. To date, we’ve matched dozens of club members
                      with internship and full-time job opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}

// import React from 'react'
// import sponsorsPic from '../../images/62fafc331e697b8d56ead84b_hbc-logos.png'
// import somePic from '../../images/62fb0424f4027807fc5ccd1f_hbc-4.png'
// import Team from './team'

// export default function Landing() {
//     return (
//         <>
//             <div className="section-14 wf-section">
//                 <div className="wide-div z">
//                     <div className="inmost-div">
//                         <div className="div-block-44">
//                             <h1 style={{ 'opacity': 1 }} className="hero-header-new">A
//                                 TOP &nbsp;STUDENT-RUN BLOCKCHAIN INNOVATION&nbsp;HUB</h1>
//                             <p style={{ 'opacity': 1 }} className="hero-sub">Build with
//                                 some of the best in Web3, do &nbsp;cutting-edge research, and find career opportunities through
//                                 our deep industry connections.</p>
//                             <a style={{ 'opacity': 1 }}
//                                 href="https://join.slack.com/t/web3builders-group/shared_invite/zt-1ig67kr78-Gq1fhG92HoitvPNw0yvPbw" target="_blank" className="nav-link-2">JOIN &nbsp;US
//                                 &gt;</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ 'opacity': 1 }} className="section-15 wf-section">
//                 <div className="wide-div">
//                     <div className="div-block-37 pad">
//                         <div className="div-block-38"></div>
//                     </div>
//                     <div className="inner-div">
//                         <div className="inmost-div">
//                             <img src={sponsorsPic} loading="lazy"
//                                 sizes="(max-width: 479px) 100vw, 90vw" alt="" className="image-7"></img>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="section-15 wf-section">
//                 <div className="wide-div">
//                     <div className="div-block-37">
//                         <div className="div-block-38"></div>
//                     </div>
//                     <div className="inner-div">
//                         <div className="inmost-div">
//                             <div className="w-row">
//                                 <div className="w-col w-col-6">
//                                     <div className="col-div">
//                                         <img src={somePic} loading="lazy"
//                                             sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw" alt=""></img>
//                                         <div className="text-block-8">EVENTS</div>
//                                         <p className="paragraph-12">We organize panels, talks, and workshops with some of the
//                                             greatest builders, investors, and researchers in the blockchain space. The capstone
//                                             of the year is our annual HBC conference, open to the broader Philadelphia community.</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-col w-col-6">
//                                     <div className="col-div">
//                                         <img src={somePic} loading="lazy"
//                                             sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw" alt=""></img>
//                                         <div className="text-block-8">LABS</div>
//                                         <p className="paragraph-12">Join a community of Upenn's top builders in Web3. We host
//                                             technical workshops, organize blockchain-focused hackathons, build projects for
//                                             leading industry partners, and support Web3 startups in the Penn
//                                             ecosystem.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="inner-div">
//                         <div className="inmost-div">
//                             <div className="w-row">
//                                 <div className="w-col w-col-6">
//                                     <div className="col-div">
//                                         <img src={somePic} loading="lazy"
//                                             sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw" alt="" />
//                                         <div className="text-block-8">101</div>
//                                         <p className="paragraph-12">A six-week introduction to foundational topics including
//                                             blockchain, smart contracts, DAOs, NFTs, DeFi, and more. Taught in small weekly
//                                             discussion groups, this is the best way to go from “zero-to-one” in your knowledge
//                                             of the space.</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-col w-col-6">
//                                     <div className="col-div">
//                                         <img src={somePic} loading="lazy"
//                                             sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 43vw" alt="" />
//                                         <div className="text-block-8">TALENT</div>
//                                         <p className="paragraph-12">Our members benefit from our extensive hiring network,
//                                             crypto-related research projects with Harvard professors, and more. To date, we’ve
//                                             matched dozens of club members with internship and full-time job opportunities.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Team />
//         </>
//     )
// }

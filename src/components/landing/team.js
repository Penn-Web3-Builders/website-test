import React from 'react'
import "../../Web3Builders.css"

function TeamMember({url, name}) {
  return (
    <>
      <a href={url} target="_blank" className="team-link">
        <span className="team-names">{name}  </span>
      </a>
    </>
  )
}

export default function Team() {
  const teamMembers = [
    {url: "paul.com", name: "paul"},
    {url: "intel.com", name: "paul"}
  ]
  const advisors = [
    {url: "paul.com", name: "advisor 1"},
    {url: "intel.com", name: "advisor 2"}
  ]
  return (
    <div className="section-15 wf-section">
        <div className="wide-div">
            <div className="div-block-37 pad">
                <div className="div-block-38"></div>
            </div>
            <div className="wide-div">
                <div className="inner-div">
                    <div className="inmost-div color">
                        <p className="paragraph-13">
                            CORE:
                            {teamMembers.map(member => {
                              return (<TeamMember url={member.url} name={member.name}/>)
                            })}
                        </p>
                        <p className="paragraph-13 no-bottom">
                            ADVISORS:
                            {advisors.map(member => {
                              return (<TeamMember url={member.url} name={member.name}/>)
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
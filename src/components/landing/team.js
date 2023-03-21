import React from "react";

function TeamMember({ url, name, desc }) {
  return (
    <>
      <a
        href={url}
        target={url}
        className="m-3 flex flex-col items-center w-32 h-42 p-2 hover:shadow-lg rounded-lg box-border transition-shadow duration-500"
      >
        <img
          className="w-24 h-28 object-cover rounded-sm"
          src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
        ></img>
        <div className="font-abel text-xl">{name}</div>
        <div className="font-abel text-m">{desc}</div>
      </a>
    </>
  );
}

export default function Team() {
  const teamMembers = [
    { url: "https://github.com/lohpaul9", name: "Paul", desc: "Guru" },
    { url: "paul.com", name: "Paul", desc: "Guru" },
    { url: "paul.com", name: "Paul", desc: "Guru" },
  ];
  const advisors = [
    { url: "paul.com", name: "Paul", desc: "Guru" },
    { url: "paul.com", name: "Paul", desc: "Guru" },
  ];
  return (
    <div className="flex flex-col items-center border-2 border-gray-300 mx-44 my-14 pb-2">
      <div className="mt-8 text-3xl font-abel">MEET THE CORE TEAM</div>
      <div className="flex justify-center flex-wrap">
        {teamMembers.map((member) => {
          return (
            <TeamMember
              url={member.url}
              name={member.name}
              desc={member.desc}
            />
          );
        })}
      </div>
      <div className="text-3xl font-abel">ADVISORS</div>
      <div className="flex justify-center flex-wrap">
        {advisors.map((member) => {
          return (
            <TeamMember
              url={member.url}
              name={member.name}
              desc={member.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

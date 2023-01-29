import React from 'react'

function NavLink({ url, label }) {
  return (
    <a href={url} target="_blank" className="font-abel hover:text-violet-700 hover:text-xl transition-all duration-500 ease-in-out">{label}</a>
  )
}

export default function BottomNavBar() {
  const links = [
    ["https://twitter.com/harvard_crypto", "TWITTER"],
    ["", "ETHERSCAN"],
    ["", "LENS"],
    ["", "LINKEDIN"],
    ["", "GITHUB"],
  ]
  return (
    <div className="mt-5 py-5 border-gray-200 border-2 box-border w-full">
      <div className="flex justify-around text-lg">
        {links.map(ele => <NavLink url={ele[0]} label={ele[1]} />)}
      </div>
    </div>
  )
}
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((link )=> {
    const linkText = link.toUpperCase();
    return <a key={link} href={`#${link}`}>{linkText}</a>
  })

  return <nav>{navElements}</nav>;
}

export default NavBar;

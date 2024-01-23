import React, { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow">
      <div className="flex justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-10 pt-3">
       
              <img
                src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
                width="120px"
                height="60px"
                alt="logo"
              ></img>

              <div className="flex justify-between text-white gap-6">
                <span>Home</span>
                <span>Consultation</span>
                <span>Reviews</span>
              </div>

       </div>
     </nav>      
  );
};

export default Nav;

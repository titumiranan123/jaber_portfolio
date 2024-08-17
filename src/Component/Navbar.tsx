/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar:React.FC = () => {
    const location = useLocation();
  
    const Customnav = ({ title, href, className }: any) => {
      return (
        <Link
          className={` text-white hover:font-[700] font-[400] ${
            location.pathname === href ? "font-bold" : ""
          } ${className}`}
          to={`${href}`}
        >
          {title}
        </Link>
      );
    };
    return (
        <div>
            <div className="navbg h-[60px] rounded-[44px] w-[400px] flex gap-[36px] items-center justify-center">
          <Customnav className={""} href={"/"} title={"About"} />
          <Customnav className={""} href={"/works"} title={"WORKS"} />
          <Customnav className={""} href={"/resume"} title={"RESUME"} />
        </div>
        </div>
    );
};

export default Navbar;
import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import React, { useState } from 'react';
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
        style={{display:"flex",justifyContent:"flex-end"}}
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo></Logo>
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
  );
}


export default Navbar;
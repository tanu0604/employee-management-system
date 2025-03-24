import React from "react";

const Navbar = () => {
  const navItems = [
    { item: "Home", href: "/" },
    { item: "Read Employee", href: "/read" },
    { item: "Create Employee", href: "/create" },
    { item: "Update Employee", href: "/update" },
  ];

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {
          navItems.map((nav,index)=>(
            <a 
            key={nav.index}
            href={nav.href}
              className="text-white hover:text-blue-500 transition duration-300 font-bold"
            >{nav.item}
          
            </a>
          ))
        }
      </div>
    </nav>
  );
};

export default Navbar;

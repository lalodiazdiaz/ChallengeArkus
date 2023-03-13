import React from "react";
import OptionUser from "../OptionsMenu/OptionUser";
import OptionsAdmin from "../OptionsMenu/OptionsAdmin";

function Navbar({rol}) {


  console.log(rol);
  return (
    <div className="min-h-screen  flex flex-col flex-auto flex-shrink-0 antialiased bg-red-800 text-red-800 ">
      <div className="fixed flex w-[15%] flex-col top-0 left-0 bg-red-700 h-full border-r">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          {rol.rol === "user" ? <OptionUser /> : <OptionsAdmin />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

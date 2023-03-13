import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home(rol) {
  return (
    <div className="absolute flex h-[100%] w-[100%] flex-row  ">
      <aside className="w-[15%]  bg-slate-600 min-h-full h-screen flex flex-col items-center space-y-7">
        <Navbar rol={rol}/>
      </aside>
      <main className="w-[85%]  bg-slate-600">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;

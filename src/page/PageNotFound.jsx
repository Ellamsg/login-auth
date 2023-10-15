import React from "react";

import { Link, useRouteError } from "react-router-dom";

export default function PageNotFound() {

  return (
    <div className="text-center mx-0 flex justify-center items-center h-[100vh] my-0 m-auto">
        <div className="w-[30%] p-5">

       
        <p>Oops..</p>
  <p className="text-6xl font-bold">404</p>
  <p className="font 4xl">The page does not exist</p>
  <div >
    <Link className="flex justify-center" to='/' >
    <p  className="bg-green text-white px-4 py-2 rounded-[8px] my-4 w-[30%]">Go back</p>
    </Link>

  </div>
 
    </div>
    </div>
  );
}
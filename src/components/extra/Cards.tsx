"use client";

import { Image } from "antd";
import React, { useState } from "react";

const Cards = () => {
  const [isSell, setIsSell] = useState(false);
  return (
    <div className="md:pt-40 md:pb-0 py-30 flex items-center justify-center flex-wrap mb-10">
      <div className=" w-72 shadow-md rounded m-3">
        <div className=" w-full">
          <Image
            className=" h-40 object-cover rounded-t"
            src="/images/medicine/1.webp"
            alt="piña"
          />
        </div>
        <div className="w-full p-3">
          <a href="#" className=" hover:text-yellow-600 text-whiye">
            <span className="text-lg font-semibold uppercase tracking-wide ">
              Cordyceps-M
            </span>
          </a>
          <p className="text-gray-300 text-sm leading-5 mt-1">
Yo'talga qarshi tabletka          </p>
        </div>
        <div className="px-3 flex justify-between">
          <h1>15.000 so'm</h1>
          <button
            onClick={() => setIsSell(!isSell)}
            className="rounded-full w-8 font-bold h-8   text-xl
 flex items-center justify-center
  "
          >
            {isSell ? "✔️" : "+"}
          </button>
        </div>
      </div>

      <div className=" w-72 shadow-md rounded m-3">
        <div className=" w-full">
          <Image
            className=" h-40 object-cover rounded-t"
            src="/images/medicine/2.png"
            alt="piña"
          />
        </div>
        <div className="w-full p-3">
          <a href="#" className=" hover:text-yellow-600 text-whiye">
            <span className="text-lg font-semibold uppercase tracking-wide ">
              Dolvit Allergy
            </span>
          </a>
          <p className="text-gray-300 text-sm leading-5 mt-1">
            Allergiyaga qarshi tabletka.
          </p>
        </div>
        <div className="px-3 flex justify-between">
          <h1>30.000 so'm</h1>
          <button
            onClick={() => setIsSell(!isSell)}
            className="rounded-full w-8 font-bold h-8   text-xl
 flex items-center justify-center
  "
          >
            +
            {/* {isSell ? "✔️" : "+"} */}
          </button>
        </div>
      </div>

      <div className=" w-72 shadow-md rounded m-3">
        <div className=" w-full">
          <Image
            className=" h-40 object-cover rounded-t"
            src="/images/medicine/3.png"
            alt="piña"
          />
        </div>
        <div className="w-full p-3">
          <a href="#" className=" hover:text-yellow-600 text-whiye">
            <span className="text-lg font-semibold uppercase tracking-wide ">
              Imodium
            </span>
          </a>
          <p className="text-gray-300 text-sm leading-5 mt-1">
            Diareaga qarshi tabletka
          </p>
        </div>
        <div className="px-3 flex justify-between">
          <h1>20.000 so'm</h1>
          <button
            onClick={() => setIsSell(!isSell)}
            className="rounded-full w-8 font-bold h-8   text-xl
 flex items-center justify-center
  "
          >
            +
            {/* {isSell ? "✔️" : "+"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

export const Singlefeedback = ({ src, name, des, feedback }) => {
  return (
    <div>
      <div
        style={{
          
          backgroundColor: "rgb(6,22,37)",
          fontFamily: "Inter",
        }}
        className="client sm:w-full lg:w-[352px]   border-white/10 border rounded-3xl p-8 "
      >
        <div
          style={{ color: "#ced6de", lineHeight: "25px" }}
          className="client-feedback  text-base   "
        >
          <span>{feedback}</span>
        </div>
        <div className="client-details flex flex-row gap-2 pt-6 ">
          <div className=" w-12 h-12 rounded-full overflow-hidden client-photo border-2 border-white">
            <img src={src} alt="" />
          </div>
          <div className=" inter text-white flex flex-col  client-name-details">
            <span className=" font-bold">{name}</span>
            <span>{des}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

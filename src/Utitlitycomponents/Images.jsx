import React from "react";

export const Images = () => {
  return (
    <div>
      <div data-aos = "fade-up"  data-aos-duration="3000" >
      <div className=" container px-5  lg:px-20 mt-10 pb-40 mx-auto gap-4 images flex flex-row justify-center ">
   
 
 
       
        <div    
           
          className="image w-4/12 lg:w-3/12 h-80  sm:h-[450px]   overflow-hidden hover:w-3/4   border-2 border-white/20  rounded-3xl ease-in-out duration-500  "
          >
             
          <img
            className=" object-cover h-full w-full"
            src="https://img.freepik.com/free-photo/people-analyzing-checking-finance-graphs-office_23-2150377179.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=ais"
            alt=""
            />
          
        </div>
        <div
           
          className="image overflow-hidden  h-80  sm:h-[450px]    w-4/12 lg:w-3/12 hover:w-3/4   border-2 border-white/20  rounded-3xl ease-in-out duration-500"
          >
          <img
            className=" object-cover h-full w-full bg-gradient-to-t from-blue-600 to-white/0"
            src="https://img.freepik.com/free-photo/diverse-corporate-employees-group-working-together-using-computers-office_1163-5124.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=ais"
            alt=""
            />
        </div>
          
            


        <div
           
          className="image overflow-hidden w-4/12  h-80  sm:h-[450px]    lg:w-3/12 border-2 hover:w-3/4  border-white/20  rounded-3xl ease-in-out duration-500"
          >
          <img
            className=" object-cover h-full w-full"
            src="https://img.freepik.com/free-photo/people-having-fun-their-break-time_23-2149272032.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=ais"
            alt=""
          />
        </div>
        <div
        
          className="image overflow-hidden w-4/12  h-80  sm:h-[450px]    lg:w-3/12 border-2 hover:w-3/4  border-white/20 rounded-3xl ease-in-out duration-500 hidden  lg:block "
          >
          <img
            className=" object-cover h-full w-full"
            src="https://img.freepik.com/free-photo/industrial-designers-working-office_23-2149307796.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=ais"
            alt=""
            
          />
        </div>
      </div>
      </div>
    </div>
  );
};

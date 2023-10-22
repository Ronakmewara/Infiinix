import React from 'react'
import { SingleWork } from '../Utitlitycomponents/SingleWork'

export const Work = () => {
  return (
    <div>
         <div className="work  grad-back-long w-screen pb-20">
            <SingleWork
             name="Ministry of Health, Welfare and Sport"
            heading="Optimise contact investigation during the pandemic"
             desc="Designing the GGD Contact (mobile) application and new web portal to help the municipal health services speed up source and contact investigation and make it more privacy resistant."
             img="https://framerusercontent.com/images/VXTlUyZVICqcwhMbzRmnKwxykk.png?scale-down-to=1024"
             objectfit="contain"
             />
            <SingleWork
             name="FurniMate" 
             heading="  Furniture Shopping Made Easy"
             desc="Our recommendation engine, a highlight of FurniMate, is a testament to our commitment to enhancing the user experience. Through advanced algorithms and data analysis, we've made sure users receive personalized furniture recommendations that align with their unique styles and preferences." 
             img="https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148655174.jpg?w=740&t=st=1697631765~exp=1697632365~hmac=3ef49463256a53cf8cbde0e0520b5e20828fb243fbb9c8d629551e44e13307fb"
             objectfit=""
             />
            <SingleWork
             name="DryFruit Delights" 
             heading=" A Nutty Shopping Experience"
             desc="Introducing DryFruit Delights, your go-to destination for premium dry fruits. Shop effortlessly and savor the finest selection of nuts and dried fruits. Our user-friendly app is designed to provide you with a convenient, delightful, and health-conscious shopping experience. Enjoy the goodness of nature with every click!" 
             img="https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913470294-NQVNUBEGXH78LK2ZVK2I/Top+20+Ecommerce+App+Inspiration+Ideas+%231-1.jpg"
             objectfit="cover"
             />
            <div className="get-in-touch  ">
          <div className=" flex justify-center  mt-28 heading">
            <h1 className=" w-3/6 text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              <span className=""> Let’s brew something great together! </span>
            </h1>
          </div>
          <div className="get-in-touch-button req-button mt-10 flex justify-center">
            <button className="  inter px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-800 rounded-lg text-white">
              Get in touch
            </button>
          </div>
        </div>
            </div>
        
    </div>
  )
}

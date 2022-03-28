import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import Animated from "../images/animated.svg";


const ServiceCard = ({ id, color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl service-animation" id={id}>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                Get Celebration & Stationery Product
                <br />
                At Your Doorstep
            </h1>
            {/* <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    The best choice for buying your celebration product, with the
                    variety of product we offer at your doorstep
                </p> */}
            <a href="https://wa.me/918452922869?text=Hey">
                <button
                    type="button"
                    onClick={() => { console.log("Connect Wallet") }}
                    className="flex flex-row justify-center items-center m-5  bg-[#24c555] p-4 rounded-full cursor-pointer hover:bg-[#0bee4f]"
                >Say "Hello" to Whatsapp</button>
            </a>
            <br />
            <h3 className="text-3xl font-bold text-white animate-bounce items-center">
                Free Delivery! Order on Whatapp</h3>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
            <img src={Animated} width="500" />
        </div>
    </div>
);

export default Services;

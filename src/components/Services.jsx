import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

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
    <div className="flex w-full justify-center items-center gradient-bg-welcome">
        <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                    Now Get Celebration
                    <br />
                    Product At Doorstep
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    The best choice for buying your celebration product, with the
                    variety of product we offer at your doorstep
                </p>
                <br />
                <h3 class="text-3xl font-bold text-white animate-bounce">Free Delivery! Order on Whatapp</h3>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    id={"id1"}
                    color="bg-[#2952E3]"
                    title="Get Free Free Free Delievery"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Get product at your doorstep. Cash On Delievery. Pay when you get your product. Social Distance is Maintained."
                />
                <ServiceCard
                    id={"id2"}
                    color="bg-[#8945F8]"
                    title="Return/Exchange/Refund available"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Get Return/Refund of product available within 7 days if you changed your mind. No question asked."
                />
                <ServiceCard
                    id={"id3"}
                    color="bg-[#F84550]"
                    title="Order at 3 steps"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Select product => Go to Cart => Place Order. Hurray!! Order placed. Relax will be at your doorstep with your orders"
                />
            </div>
        </div>
    </div>
);

export default Services;

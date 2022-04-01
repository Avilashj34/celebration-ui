import React, { useEffect } from "react";

import Slider1 from "../images/Slider2.png";
import Slider2 from "../images/Slider3.png";
import Slider3 from "../images/Slider4.png";


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

const Service = () => (
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
            <a style={{ display: "table-cell" }} href="https://wa.me/918452922869?text=Hey">
                <button
                    type="button"
                    onClick={() => { console.log("Connect Wallet") }}
                    className="flex flex-row justify-center items-center m-5  bg-[#329850] p-4 rounded-full cursor-pointer hover:bg-[#0bee4f] font-bold"
                >Say "Hello" to Whatsapp</button>
            </a>

            <a href="https://www.instagram.com/celebrations_and_stationery">
                <button
                    type="button"
                    onClick={() => { console.log("Connect Wallet") }}
                    className="flex flex-row justify-center items-center m-5  bg-[#8b4659] p-4 rounded-full cursor-pointer hover:bg-[#c03c47] font-bold"
                >Visit Instagram Page</button>
            </a>
            <br />
            <h3 className="text-3xl font-bold text-white animate-bounce items-center">
                Free Delivery! Order on Whatapp</h3>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
            <div className="slideshow-container">
                {[Slider1, Slider2, Slider3].map((item, index) => (
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img className="rounded-3xl" src={item} width={600} height={450} alt = {index} />
                        {/* <div className="text">Happy Birthday</div> */}
                    </div>
                ))}

            </div>
        </div>
    </div>
);

function Services() {

    useEffect(() => {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            // let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            // for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }
            slides[slideIndex - 1].style.display = "block";
            // dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
    })

    return (
        <>
            <Service />
        </>
    )
}

export default Services;

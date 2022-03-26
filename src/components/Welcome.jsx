import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";

const Val = "https://res.cloudinary.com/celebration-stationery/image/upload/v1647621508/cld-sample.jpg"
const Val1 = "https://res.cloudinary.com/celebration-stationery/image/upload/v1648325968/a-great-way-to-make-any-holiday-better_lpqots.jpg"

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const ImageCard = ({ imgPath, altName }) => {
    return (
        <div>
            <img className="w-40 h-40 rounded-full mx-auto" src={imgPath} alt={altName} />
        </div>
    )
}

const Welcome = () => {
    const handleChange = (e, name) => {
        console.log("Handle Change", e, name)
    }
    return (
        <>
            <div className=" flex w-full justify-center items-center py-10"> {/* footer-padding */}
                <div className="flex flex-col justify-center items-center px-16 ">
                    <h1 className="text-black text-3xl sm:text-5xl  py-2 "> {/*text-gradient*/}
                        Available All Category Casd
                    </h1>
                    <div className="flex flex-row ">
                        <button
                            type="button"
                            onClick={() => { console.log("Connect Wallet") }}
                            className="flex flex-row justify-center items-center my-5 mx-4 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">
                                Order in Whatapp
                            </p>
                        </button>
                        <button
                            type="button"
                            onClick={() => { console.log("Connect Wallet") }}
                            className="flex flex-row justify-center items-center my-5 mx-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">
                                Or  Whatapp
                            </p>
                        </button>
                    </div>
                </div>
                <figure className="p-10">
                    <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-8">
                        {[Val, Val, Val, Val1, Val, Val].map((item, index) => (
                            <ImageCard altName={index} imgPath={item} />
                        ))}

                        asdsfd
                    </div>
                </figure >
            </div>
        </>
    );
}

export default Welcome
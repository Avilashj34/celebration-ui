
const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <p className="text-white"> Categories Available</p>
            <div className="w-full flex sm:flex-row flex-row justify-between items-center my-4">
                <div className="flex flex-wrap justify-center items-center m-4">
                    {["Candles", "Popper", "Ballons", "Tiara/Crown", "Cap", "Ribbons", "Sprays", "Curtain/Banner", "Stickers", "Notebook", "Paper", "Pencil", "Pen", "StickyNotes", "Markers", "Highlighter", "Stapler", "Punch", "Glue"].map((index, item) => (
                        <p className="text-white text-base text-center mx-2 cursor-pointer">{index}</p>
                    ))}
                </div>
                <br />
            </div>
            <p className="text-white">Want something else? Ping us</p>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Order from us and get the huge discount & free gift</p>
                <p className="text-white text-sm text-center font-medium mt-2">Offer valid till April </p>
            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Special Offers for Couple, New Baby, Bestfriend bday</p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">@kryptomastery2022</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
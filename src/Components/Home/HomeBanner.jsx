import homebanner from "../../assets/homebanner.png";

export default function Hero() {
    return (
        <section
            className="relative h-[440px] min-[360px]:h-[540px] md:h-[650px] lg:h-[850px] w-full w-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${homebanner})` }}
        >
            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col gap-3 md:gap-5 justify-center lg:justify-end md:items-center md:text-center text-white px-6 pt-20 lg:py-[100px] lg:pb-[100px]">

                {/* Subtitle */}
                <p className="text-sm min-[360px]:text-base md:text-[22px] font-bold leading-tight tracking-wide uppercase md:text-center">
                    Finance Your Next Property Move
                </p>

                {/* Title */}
                <h1 className="text-xl min-[360px]:text-2xl  min-[425px]:text-3xl md:text-4xl lg:text-[45px] leading-normal md:text-center font-designer">
                    FUNDING SOLUTIONS FOR <br className="hidden md:flex" />
                    PROPERTY INVESTORS
                </h1>

                {/* Buttons */}
                <div className=" flex md:items-center md:justify-center gap-2.5 flex-wrap">

                    <a className="border border-white py-2.5 px-4 lg:px-[30px] lg:py-[20px] rounded-full text-center text-xs  min-[375px]:text-base">
                        Contact Us
                    </a>

                    <a className="bg-gradient text-white py-2.5 px-4 lg:px-[30px] lg:py-[20px] rounded-full text-center text-xs  min-[375px]:text-base">
                        Browse Properties
                    </a>

                </div>

            </div>
        </section>
    );
}
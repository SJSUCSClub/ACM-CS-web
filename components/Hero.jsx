import LinkToButton from "./Buttons/LinkToButton";
import Events from "./Event/Events";
import Image from "next/image";
import Background from "@/public/photos/background.jpg";
import ImagePlayer from "./ImageSlider/ImagePlayer";

const Hero = () => {
  return (
    <div className="xl:h-[80vh] flex flex-col gap-12 sm:gap-2 justify-center items-center max-w-[1440px]" >
      <div className="sm:h-[100%] flex flex-col gap-12 justify-center sm:text-center sm:gap-6 text-white">
        <div className="flex flex-col gap-6 sm:justify-center sm:items-center">
          <h1 className="text-5xl sm:text-3xl font-black drop-shadow-lg border-2 w-fit py-2 pr-2 rounded-md border-[#eabc4e] group hover:bg-[#eabc4e] transition duration-200">
            <span className="text-[#196096] bg-[#eabc4e] rounded-l-md px-4">
              acm</span><span className="text-[#eabc4e] group-hover:text-white transition duration-200"> cs</span> @ <span className="text-[#eabc4e] group-hover:text-white transition duration-200">SJSU</span>
          </h1>
          <h2 className="text-2xl font-bold">
            We are the largest Computer Science organization at San José State
            University
          </h2>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 sm:justify-center sm:items-center">
          <p className="text-lg">
            Join us for technical workshops, interview prep, and more fun
            activities
          </p>
          <LinkToButton
            url="https://discord.gg/yHky9bXRdE"
            text="Join our Discord"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;

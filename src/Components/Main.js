import React from "react";
import mockup from '../Assets/HeroMockup.png';
import playImage from '../Assets/play-circle.png';

const Main = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-8 w-full m-auto py-8 px-6">
        <h1 className="font-semibold text-center text-5xl md:text-7xl">
          {" "}
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-center text-[#667085] text-2xl mt-6 max-w-4xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="sm:flex my-12 w-full justify-center items-center">
          <button
            type="button"
            className="flex flex-row justify-center items-center h-12 text-black border-[#D0D5DD] border-[1px] bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  md:mx-2 sm:w-auto w-full"
          >
            <img src={playImage} className="w-6 mr-2" />
            Demo
          </button>
          <button
            type="button"
            className="text-white bg-[#7F56D9] h-12 my-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 sm:w-auto w-full"
          >
            Sign Up
          </button>
        </div>
        <div className="flex flex-direction justify-center items-center">
          <img src={mockup} className="md:w-2/5" />
        </div>
      </div>
    </section>
  );
};

export default Main;

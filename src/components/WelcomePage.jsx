const WelcomePage = ({ onStart }) => {
  return (
    <div className="flex items-center flex-col welcomepageLoader">
      <img className="mb-2 mt-[3rem]" src="./logo.png" alt="logo" />
      <img src="./HAPPY.png" alt="Happy" />
      <div className=" w-[85%] relative bg-white h-[350px] mt-[2rem] mb-[2rem] p-4">
        <div className="w-full  h-[80%] VideoContainer border-[1px] border-black"></div>
        <img
          className="absolute w-[120%] h-[140px] left-0 bottom-[-10%]"
          src="./HappyBirthdayText.png"
          alt=""
        />
        <img className="w-[100px] absolute top-[-12%] right-[3%] z-[100]" src="./love1.png" alt="" />
        <img className="w-[80px] absolute top-[-5%] right-[-10%] z-[99]" src="./love2.png" alt="" />
      </div>
      <p className="font-quicksand font-bold mb-4">18-07-2025</p>
      <button
        onClick={onStart}
        className=" z-[101] bg-[#871058] rounded-[24px] h-[50px] w-[50%] font-quicksand text-[#D9CFC4] text-[1.1rem]"
      >
        View Memories → 
      </button>
    </div>
  );
};

export default WelcomePage;

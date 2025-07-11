import { useState } from "react";

const BirthdayCarousel = () => {
  const slides = [
    {
      type: "image",
      src: "./OloriMi.jpg",
      header: "Olori Mi 👑",
      text: `My baby ❤️ You light up my world.`,
      initials: "Ayomide",
    },
    {
      type: "video",
      src: "./Tumise.mp4",
      header: "Omo Iyami💖",
      text: `Temitope, which means "mine is worthy of thanks." Since our first encounter in 200 level, 1st semester in Havilah, I've found you to be someone grateful and always full of thanks, just as your name implies. You were the first roommate I interacted with (on the day of resumption) as if we'd known each other for years. (Normally, it takes me about two weeks to start relating to anyone, given my introverted nature.) But you were just you, and you asked me for my plate to eat the indomie you smuggled. Since then, I guess you can say we became besties. You've been my ride-or-die ever since, which is why I gave you the nickname "Omo Iyami!." You know me more than a friend but like a sister. I don't need to say anything before you know what's on my mind; we just look at each other and understand clearly what I'm saying. I'm forever grateful to you for making my life in Babcock memorable. Thank you for all the prayer walks, thank you for making me your confidant, and thank you for being you—like pointing out that SOP's shoes were ABA-made when you were ranting in the cafeteria 😂. Most especially, thank you for making my life better and full of smiles. You're really a friend indeed... No, you're really a sister from another mother. I pray God grants you all your heart's desires, because you truly deserve it. Happy birthday, Omo Iyami❤ Love, Tunmise.`,
      initials: "Tunmise",
    },
    {
      type: "video",
      src: "./olamide.mp4",
      header: "Fish 🐟",
      text: `My baby ❤️ You light up my world.`,
      initials: "Peacock",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F5F0EA] overflow-hidden BirthdayDiv">
      {/* Decorative background circles */}
      <div className=" flex flex-col items-center justify-center w-[530px] bg-[#F5F0EA] h-[500px] border-[4px] border-[#837A6E] rounded-full absolute  -top-[38%] z-[99]">
        <img className="mt-[10rem] mb-4 " src="./logo.png" alt="" />
        <img className="absolute bottom-[22%]" src="./HAPPY.png" alt="" />
        <img
          className="w-[300px] bottom-[2%] absolute"
          src="./HappyBirthdayText.png"
          alt=""
        />
      </div>

      <div className="w-[600px] h-[600px] bg-[#F5F0EA] rounded-full absolute -bottom-[50%] z-[99] flex flex-col items-center p-4">
        <h1 className="w-[30%] text-center text-[2rem] font-qwitcher mb-4">
          {slides[currentIndex].header}
        </h1>
      </div>

      <div className="absolute bottom-0 z-[99] mt-6 w-[80%] max-w-xs border border-[#837A6E] rounded-lg p-4 overflow-y-scroll max-h-[200px] h-[200px] bg-[#F5F0EA] text-center">
        <p className="text-[#871058] text-lg font-quicksand ">
          {slides[currentIndex].text}
        </p>
      </div>

      <p className="absolute bottom-5 right-5 rotate-[-40deg] z-[100] font-qwitcher text-[2rem]">
        {slides[currentIndex].initials}
      </p>
      {/* Carousel content */}
      <div className=" relative w-[100%] h-[300px] bg-white rounded-lg shadow-lg overflow-hidden z-[10]">
        {slides[currentIndex].type === "image" && (
          <img
            src={slides[currentIndex].src}
            alt="Birthday slide"
            className="w-full h-full object-cover"
          />
        )}

        {slides[currentIndex].type === "video" && (
          <video
            src={slides[currentIndex].src}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        )}

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#871058] text-white rounded-full p-3 opacity-90 hover:opacity-100 focus:outline-none"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#871058] text-white rounded-full p-3 opacity-90 hover:opacity-100 focus:outline-none"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default BirthdayCarousel;

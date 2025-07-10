import { useState } from "react";

const BirthdayCarousel = () => {
  const slides = [
    {
      image: "https://your-cdn.com/image1.jpg",
      text: "My baby ❤️ You light up my world.",
    },
    {
      image: "https://your-cdn.com/image2.jpg",
      text: "Forever and always 💕 Stay amazing.",
    },
    {
      image: "https://your-cdn.com/image3.jpg",
      text: "You deserve all the happiness today.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      <div className="w-[500px] h-[500px] border-[4px] border-[#837A6E] rounded-[100%] left-[-18%] absolute top-[-40%] z-[100]" >

      </div>

      <div className="w-[500px] h-[500px] rounded-[100%] left-[-18%] absolute bottom-[-38%] z-[99]" >

      </div>
      
    </div>
  )
}

export default BirthdayCarousel

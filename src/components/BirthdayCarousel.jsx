import { useState } from "react";

const BirthdayCarousel = () => {
  const slides = [
    {
      type: "image",
      src: "./OloriMi.jpg",
      header: "Olori Mi 👑",
      text: `From the very first day I set my eyes on you, I was lost in the wonder of something so true. I remember it vividly like time slowed down, Your smile lit the room, turned my whole world around. I didn’t know then what destiny planned,But fate must have carved us with its own hand. You were the answer I didn’t know I’d been seeking, The calm in my storm, the warmth when I’m freezing. Since you came into my life, it’s been pure bliss, Days filled with laughter, sealed with your bliss.You brought me a joy so deep and so wide,That even my shadows have nowhere to hide. When the world feels heavy, you make it light, When hope seems dim, you make it bright. Your love is my refuge, my shelter, my song,With you in my arms is where I belong. You’re the beat in my heart, the breath in my chest, My reason to strive, to give only my best. I’ve known only happiness since you’ve been mine, A love so profound, it borders divine. For you are my sunrise after the night,The star that I wish on, my guiding light. I can’t imagine a day without you here,For your voice is my music, your touch so dear.So know this today and every day after, You’re my forever, my joy, my laughter. My promise to you is simple and true:As long as I live, I’ll always choose you.`,
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
      text: `Temitopeee!!!! My advicer My sister My special friend, Words can’t even describe how much I love and care for you, At first I didn’t know we would becoming this close from roommates to sisters, I really don’t regret meeting you, You are so nice, sweet and God fearing mentioned this three words cause they simply describe you,anyone should be lucky to have you in their life, On this day I pray God grants you all your heart desire and may his grace shine upon you!!!, You shall soar higher unexpectedly and you shall be a great person, You will always hold a special place in my heart😩🥹I love you baby`,
      initials: "Peacock",
    },
    {
      type: "image",
      src: "./Yemi1.jpg",
      header: "My Top Biscuit 🍪",
      text: `Dear Temitopssss, Like I used to call you, my top biscuit. Mysweet girl, you're such an amazing person and a wonderful friend. The first time I saw you, in my head I was like this one looks like a spoilt rude girl and then I realised you were my roommate in 100lvl first semester but turns out you're the opposite of what I thought. I just want to use this opportunity to tell you how much I love you and I will always have your back and be there for you. You're not just a friend but a sister God gave to me the first day I entered Babcock. Happy Birthday my sweetheart, Have a wonderful day and I pray all your heart desires come to pass in Jesus name, Amen.Love you baby girl. With love`,
      initials: "Yemi 💗",
    },
    {
      type: "video",
      src: "./Bisola1.mp4",
      header: "My number one cheerleader 🥳",
      text: `Temitops, 
      My number one cheerleader, 
      My personal hype man
      I remember when we met in 100l as roommates and I thought she was going to be the ‘Don’t sit on my bed’ type of gurl not knowing she’s the craziest of them all. 
      
      Being friends with you was not a choice cause I had to see your crazy ass almost everyday But staying friends with you is one of the best decisions I made in that school. We’ve been through so much together and I love that we got to grow together. 
      
      She’s also one of the realest people I know. She says things how it is as she no get filter. I’m trying so hard not to insult the weyrey but I can’t help it abeg😭
      
      There’s no way you can hang out with her without laughing… she’s more than a clown. And her smile! don’t get me started …
      
      I love how you always be yourself 
      I love how cheerful you are 
      I love how you honest you are 
      I love you inside out 
      There’s nothing not to love about you gurl, I mean aside the fact that you don’t have sense You’re still the best❤
      
      May God grant all your heart desires. Long life, good health, plenty moneyyy and happiness, may God grant it to you. 
      
      Happy birthday baby gurl🎊💃🏾 
      Start acting your age this woman!`,
      initials: "~Bisola",
    },
    {
      type: "image",
      src: "./Bisola2.jpg",
      header: "My Personal hype man 🥰",
      text: `
      
      Happy birthday baby gurl🎊💃🏾 
      Start acting your age this woman!`,
      initials: "~Bisola",
    },
    {
      type: "image",
      src: "./Tumise2.jpg",
      header: "My Swwetheart 🥰",
      text: `An enbordement of beauty, grace, and love.
      Happy birthday to you, my sweetheart. You are a blessing to me and everyone around you. Your smile lights up the room, and your laughter is music to my ears. I am grateful for every moment we share, and I cherish the bond we have. May this year bring you as much joy as you bring to others. Keep shining, my love!`,
      initials: "Tumise",
    },
    {
      type: "video",
      src: "./Dominion1.mp4",
      header: "Hey Pookie ♾️💞",
      text: `I didn’t just find a partner; I found my best friend, my confidant, and the other half of my soul. You are the first person I want to talk to when something amazing happens—and the one I run to when life feels too heavy to carry alone. Your laughter is my favorite sound, your smile my favorite sight, and your happiness my truest prayer. You understand me in ways no one else does. Even in silence, you know what I’m feeling. When I’m lost in my thoughts, you’re the gentle voice that brings me back. When I’m frustrated or afraid, you’re the calm that steadies me. I love that we can be completely silly together, with inside jokes that no one else gets. That we can talk for hours about everything and nothing. That we can sit in perfect silence and still feel more connected than ever. But what means the most is how safe I feel with you. Safe to be vulnerable. Safe to be imperfect. Safe to dream and fail and try again. You have seen every side of me—the good, the bad, the scared—and you’ve loved me through it all. You’re not just the love of my life. You’re my best friend. You’re my home. You’re the one I want to build a future with, side by side, through all of life’s storms and celebrations. I don’t know how I got so lucky to find someone who feels like my mirror and my missing piece all at once. But I do know this: I want to spend my forever making sure you never doubt how loved you are. Thank you for being my person. Thank you for choosing me. Thank you for being both my best friend and my soulmate. I promise to always choose you too.`,
      initials: "Your Man",
    },
    {
      type: "video",
      src: "./Olamide2.mp4",
      header: "Queen and More🥲🥰",
      text: `have sense abeg and don’t break our husbands heart 😭😭😭Man like this are rare`,
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
    <div className="z-[101] relative flex flex-col items-center min-h-screen bg-[#F5F0EA] BirthdayDiv">
      <div className=" relative w-[100%] h-[300px] bg-white shadow-lg overflow-hidden z-[10]">
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
            autoPlay
            loop
            playsInline
            controls={false}
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

      <div className="z-[101] mt-6 w-[80%] max-w-xs  p-4 bg-[#F5F0EA] text-center">
        <h1 className="w-[100%] text-center text-[2rem] font-qwitcher mb-4">
          {slides[currentIndex].header}
        </h1>
        <p className="text-[#871058] text-lg font-quicksand ">
          {slides[currentIndex].text}
        </p>
      </div>

      <p className="fixed bottom-5 right-5 rotate-[-40deg] z-[102] font-qwitcher text-[2rem]">
        {slides[currentIndex].initials}
      </p>
    </div>
  );
};

export default BirthdayCarousel;

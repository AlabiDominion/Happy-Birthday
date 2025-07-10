import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [inputCode, setInputCode] = useState("");
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (inputCode === "2025" && inputName === "Pookie") {
      onLogin();
    } else {
      setError("Invalid code. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-[#F5F0EA] relative overflow-hidden">
      <img className="absolute top-0 left-0 z-[100]" src="./Ribbon.png" alt="decoration1" />
      <img className="absolute z-100 top-0 right-0" src="./ribbon2.png" alt="decoration2" />
      <img className="absolute z-100 bottom-0 right-0" src="./ribbon3.png" alt="decoration3" />

      <img className="mt-[4.8rem] mb-2" src="./logo.png" alt="logo" />
      <img src="./HAPPY.png" alt="Happy" />
      <img className="absolute top-[114px]  z-[99]" src="./HappyBirthdayText.png" alt="Birthday" />
      <p className="mt-[6.7rem] font-quicksand font-[400]">Just wanna make sure it's you mama💝💖</p>

      <form action="Submit" className="flex flex-col mt-[3rem] ml-auto mr-auto w-[80%] ">
        <label className="font-quicksand mb-1" htmlFor="Name">My name for you:</label>
        <input
          type="text"
          id="Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="bg-[#ECE4DB] rounded-[16px] h-[50px] p-2 text-[]"
        />
        <label className="mt-[1rem] font-quicksand mb-1" htmlFor="Name">The password:</label>
        <input
          type="password"
          id="password"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className="bg-[#ECE4DB] rounded-[16px] h-[50px]"
        />
      </form>
      <button
        onClick={handleLogin}
        className="mt-[4rem] bg-[#871058] rounded-[24px] h-[50px] w-[50%] font-quicksand text-[#D9CFC4] text-[1.1rem]"
      >
        Unlock Secret →
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}


    </div>
  );
};

export default LoginPage;

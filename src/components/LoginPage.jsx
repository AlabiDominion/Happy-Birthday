import { useState } from "react";
import Loader from "./Loader";

const LoginPage = ({ onLogin }) => {
  const [inputCode, setInputCode] = useState("");
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (inputCode === "InfiniteLove" && inputName === "Pookie") {
        onLogin();
      } else {
        setError("Invalid code. Try again!");
      }
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="LoginLoader min-h-screen flex flex-col items-center bg-[#F5F0EA] relative overflow-hidden">
  
      <img className="mt-[4.8rem] mb-2" src="./logo.png" alt="logo" />
      <img src="./HAPPY.png" alt="Happy" />
      <img className="absolute top-[114px] z-[99]" src="./HappyBirthdayText.png" alt="Birthday" />

      <p className="mt-[6.7rem] font-quicksand font-[400]">
        Just wanna make sure it's you mama💝💖
      </p>

      
      <form
        className="flex flex-col mt-[3rem] ml-auto mr-auto w-[80%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="font-quicksand mb-1" htmlFor="Name">
          My name for you:
        </label>
        <input
          type="text"
          id="Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="bg-[#ECE4DB] rounded-[16px] h-[50px] p-2"
          disabled={loading}
        />

        <label className="mt-[1rem] font-quicksand mb-1" htmlFor="password">
          The password:
        </label>
        <input
          type="password"
          id="password"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          className="bg-[#ECE4DB] rounded-[16px] h-[50px] p-2"
          disabled={loading}
        />
      </form>

      
      <button
        onClick={handleLogin}
        className="mt-[4rem] bg-[#871058] rounded-[24px] h-[50px] w-[50%] font-quicksand text-[#D9CFC4] text-[1.1rem] z-[101]"
        disabled={loading}
      >
        Unlock Secret →
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

   
      {loading && (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default LoginPage;

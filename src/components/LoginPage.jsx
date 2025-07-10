import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (inputCode === "InfiniteLove") {
      onLogin();
    } else {
      setError("Invalid code. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0EA] relative overflow-hidden">
      <img className="absolute z-100" src="./Ribbon.png" alt="decoration1" />
      <img className="absolute z-100" src="./ribbon2.png" alt="decoration2" />
      <img className="absolute z-100" src="./ribbon3.png" alt="decoration3" />
    </div>
  );
};

export default LoginPage;

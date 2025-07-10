import { useState } from "react";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import BirthdayCarousel from "./components/BirthdayCarousel";

const App = () => {
  const [page, setPage] = useState("Login");

  return (
    <div className="min-h-screen bg-[#F5F0EA] relative">
      <img className="absolute top-0 left-0 z-[100]" src="./Ribbon.png" alt="decoration1" />
      <img className="absolute z-[100] top-0 right-0" src="./ribbon2.png" alt="decoration2" />
      <img className="absolute z-[100] bottom-0 right-0" src="./ribbon3.png" alt="decoration3" />
      {page === "Login" && (
        <LoginPage onLogin={() => setPage("Welcome")} />
      )}
      {page === "Welcome" && (
        <WelcomePage onStart={() => setPage("carousel")} />
      )}
      {page === "carousel" && <BirthdayCarousel />}
      
    </div>
  )
}

export default App

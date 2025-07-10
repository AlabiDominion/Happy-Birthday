import { useState } from "react";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import BirthdayCarousel from "./components/BirthdayCarousel";

const App = () => {
  const {page, setPage} = useState("login");

  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      {page === "Login" && (
        <LoginPage onLogin={() => setPage("welcome")} />
      )}
      {page === "Welcome" && (
        <WelcomePage onStart={() => setPage("carousel")} />
      )}
      {page === "carousel" && <BirthdayCarousel />}
      
    </div>
  )
}

export default App

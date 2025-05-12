import React from "react";
import { useNavigate } from "react-router-dom";
  
  const WelcomePage = () => {
    const navigate = useNavigate();

    const handleSignUpForm = () => {
      navigate('/signup')
    }

    const handleSignInForm = () => {
      navigate('/signin')
    }
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm h-screen bg-gray-50 flex flex-col relative">
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-8">
        <h1 className="text-2xl font-semibold text-gray-800">{"Welcome to PopX"}</h1>
        <p className="text-sm text-gray-500 mt-1 mb-6 mr-24">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
        <button 
          onClick={handleSignUpForm}
          className="w-full py-3 bg-[#6c25ff] text-white font-medium rounded-md mb-3 text-md"
        >
         {" Create Account"}
        </button>
        <button 
          onClick={handleSignInForm }
          className="w-full py-3 bg-[#d8b7fd] font-medium rounded-md text-md"
        >
         {" Already Registered? Login"}
        </button>
      </div>
      </div>
      </div>
     
    );
  }
  export default WelcomePage;
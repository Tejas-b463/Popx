import React from "react";
import { useNavigate } from "react-router-dom";
const SigninForm = () => {
  const navigate = useNavigate();

  const handleProfilePage = () => {
    navigate('/profile')
  }
  return (
    <div className="flex justify-center  min-h-screen bg-gray-50">
      <div className="w-full max-w-sm px-4 py-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{"Signin to your"}</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{"PopX account"}</h1>
        
        <p className="text-gray-400 text-sm mb-6 mr-24">
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        </p>
        
        <div className="space-y-6">
        <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
               {"Email address"}
             </label>
             <input
               type="text"
               placeholder="Enter email address"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
          
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
               {"Password"}
             </label>
             <input
               type="text"
               placeholder="Enter password"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
        </div>
        
        <div className="mt-6">
          <button
           onClick={handleProfilePage}
           className="w-full py-3 bg-gray-300 text-white font-medium rounded-md text-center">
            {"Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default SigninForm
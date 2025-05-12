import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();

  const handleProfilePage = () => {
    navigate('/profile')
  }
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-sm px-4 py-6 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{"Create your"}</h1>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{"PopX account"}</h1>
          
          <div className="space-y-6">
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
               {"Full Name"}<span className="text-red-500">{"*"}</span>
             </label>
             <input
               type="text"
               placeholder="Enter full name"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>

            
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
              {" Phone number"}<span className="text-red-500">{"*"}</span>
             </label>
             <input
               type="number"
               placeholder="Enter phone number"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
            
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
               {"Email address"}<span className="text-red-500">{"*"}</span>
             </label>
             <input
               type="email"
               placeholder="Enter email"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
            
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
               {"Password"}<span className="text-red-500">{"*"}</span>
             </label>
             <input
               type="number"
               placeholder="Enter password"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
            
          <div className="relative w-full">
             <label className="absolute -top-2 left-2 bg-white px-1 text-sm font-medium text-[#6c25ff] z-10">
              {" Company name"}
             </label>
             <input
               type="text"
               placeholder="Enter company name"
               className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none"
             />
          </div>
            
          <div className="mt-2">
  <p className="text-sm text-gray-700 mb-2">
    {"Are you an Agency?"}<span className="text-red-500">*</span>
  </p>
  <div className="flex items-center gap-4">
    <div className="flex items-center">
      <div className="relative">
        <input
          type="radio"
          name="agency"
          id="agency-yes"
          className="cursor-pointer opacity-0 absolute h-5 w-5 peer"
        />
        <div className="bg-white border-2 border-gray-300 rounded-full h-5 w-5 flex shrink-0 justify-center items-center mr-2 peer-checked:bg-white peer-checked:border-[#6c25ff] peer-checked:border-4">
          <div className="hidden peer-checked:block bg-white rounded-full h-2 w-2"></div>
        </div>
      </div>
      <label htmlFor="agency-yes" className="text-sm">{"Yes"}</label>
    </div>
    <div className="flex items-center">
      <div className="relative">
        <input
          type="radio"
          name="agency"
          id="agency-no"
          className="cursor-pointer opacity-0 absolute h-5 w-5 peer"
        />
        <div className="bg-white border-2 border-gray-300 rounded-full h-5 w-5 flex shrink-0 justify-center items-center mr-2 peer-checked:bg-white peer-checked:border-[#6c25ff] peer-checked:border-4">
          <div className="hidden peer-checked:block bg-white rounded-full h-2 w-2"></div>
        </div>
      </div>
      <label htmlFor="agency-no" className="text-sm">{"No"}</label>
    </div>
  </div>
</div>
          </div>
          <div className="mt-8">
            <button
             onClick={handleProfilePage}
             className="w-full py-3 bg-[#6c25ff] text-white font-medium rounded-md text-center">
             {" Create Account"}
            </button>
          </div>
        </div>
      </div>
    );
  }
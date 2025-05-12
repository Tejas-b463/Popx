import React from "react";
import {Camera} from "lucide-react"

const Profile = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-gray-100 shadow-sm">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-200 bg-white">
          <h1 className="text-xl font-medium text-gray-600">{"Account Settings"}</h1>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src="/marrydoe.png" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-1 bottom-0 bg-purple-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                <Camera size={16}/>
              </div>
            </div>
            
            <div>
              <h2 className="text-base font-medium text-gray-800">{"Marry Doe"}</h2>
              <p className="text-sm text-gray-500">{"Marry@Gmail.Com"}</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed">
           {" Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"}
          </p>
        </div>
        <div className="border-y-2 border-spacing-12 border-dashed">

        </div>
      </div>
    </div>
  );
}
export default Profile;
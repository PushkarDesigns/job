// import { useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const ProfileDropdown = ({
//   isOpen,
//   onToggle,
//   avatar,
//   companyName,
//   email,
//   onLogout,
// }) => {
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // Automatically close dropdown when clicking anywhere outside of it
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         onToggle(); // Triggers parent state update to close the menu
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen, onToggle]);

//   const handleLogoutClick = async () => {
//     if (onLogout) {
//       await onLogout();
//     }
//     navigate("/login"); // Redirects user cleanly after logging out
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       {/* Trigger Button */}
//       <button
//         onClick={onToggle}
//         className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors"
//       >
//         <img
//           src={avatar || "https://unsplash.com"} 
//           alt="Profile Avatar"
//           className="w-8 h-8 rounded-full object-cover bg-gray-200"
//         />
//         <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {/* Dropdown Menu Overlay Panel */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg z-50 overflow-hidden">
//           {/* User Info Header */}
//           <div className="px-4 py-3 border-b border-gray-50">
//             <p className="text-sm font-semibold text-gray-900 truncate">
//               {companyName || "Guest User"}
//             </p>
//             <p className="text-xs text-gray-500 truncate mt-0.5">
//               {email || "no-email@company.com"}
//             </p>
//           </div>

//           {/* Actions Block */}
//           <div className="p-1">
//             <button
//               onClick={() => navigate("/profile")}
//               className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
//             >
//               My Profile
//             </button>
//             <button
//               onClick={() => navigate("/settings")}
//               className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
//             >
//               Account Settings
//             </button>
//             <div className="h-px bg-gray-100 my-1" />
//             <button
//               onClick={handleLogoutClick}
//               className="w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//             >
//               Log out
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;

import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({
    isOpen,
    onToggle,
    avatar,
    companyName = "", // Added fallback string to prevent chatAt(0) crashes
    email,
    onLogout,
}) => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
                {avatar ? (
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-9 h-9 rounded-xl object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 text-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                            {companyName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
                <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                        {companyName || "Guest"}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                        Employer
                    </p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* This is where your code cut off — completed below */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg z-50 py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-100">{companyName}</p>
                        <p className="text-xs text-gray-500">{email}</p>
                    </div>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => navigate(userRole === 'jobseeker' ? '/profile' : '/company-profile')}>View Profile</a>
                    <div className="pt-1 mt-2 border-gray-100 border-t">
                        <a
                            onClick={onLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
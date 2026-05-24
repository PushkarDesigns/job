import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
    // const isAuthenticated = true;
    // const user = { fullName: "Alex", role: "employer" };
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    return (
        // <header>
        //     <div className="container mx-auto px-4">
        //         <div className="flex items-center justify-between h-16">
        //             {/* Logo */}
        //             <div className="flex items-center space-x-3">
        //                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        //                     <Briefcase className="w-5 h-5 text-white" />
        //                 </div>
        //                 <span className="text-xl font-bold text-gray-900">JobPortal</span>
        //             </div>

        //             {/* Navigation Links - Hidden on mobile */}
        //             <nav className="hidden md:flex items-center space-x-8">
        //                 <a onClick={() => navigate("/find-jobs")}
        //                     className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
        //                     Find Jobs
        //                 </a>
        //                 <a onClick={() => {
        //                     navigate(
        //                         isAuthenticated && user?.role === "employer"
        //                             ? "/employer-dashboard"
        //                             : "/login"
        //                     );
        //                 }}
        //                     className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
        //                     For Employers
        //                 </a>
        //             </nav>

        //             {/*Auth Buttons  */}
        //             <div className="flex items-center space-x-3">
        //                 {isAuthenticated ? (
        //                     <div className="flex items-center space-x-3">
        //                         <span className="text-gray-700">Welcome, {user?.fullName}</span>
        //                         <a
        //                             href={
        //                                 user?.role === "employer"
        //                                     ? "/employer-dashboard"
        //                                     : "/find-jobs"
        //                             }
        //                             className="bg-gradient-to-r from-blue-600 text-white px-2 py-2 rounded-lg font-medium hover:from-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
        //                         >
        //                             Dashboard
        //                         </a>
        //                     </div>
        //                 ) : (
        //                     <>
        //                         <a href="/login" className="text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-500">
        //                             Login
        //                         </a>
        //                         <a href="/signup" className="bg-gradient-to-r from-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transtion-all duration-300 shadow-sm hover:shadow-md">
        //                             Signup
        //                         </a>
        //                     </>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 px-2 sm:px-0">

                    {/* Logo */}
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                            <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-wide">
                            JobPortal
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            onClick={() => navigate("/find-jobs")}
                            className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Find Jobs
                        </a>

                        <a
                            onClick={() => {
                                navigate(
                                    isAuthenticated && user?.role === "employer"
                                        ? "/employer-dashboard"
                                        : "/login"
                                );
                            }}
                            className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            For Employers
                        </a>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-3">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700 font-medium">
                                    Welcome, <span className="text-blue-600">{user?.name}</span>
                                </span>

                                <a
                                    href={
                                        user?.role === "employer"
                                            ? "/employer-dashboard"
                                            : "/find-jobs"
                                    }
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Dashboard
                                </a>
                            </div>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    Login
                                </a>

                                <a
                                    href="/signup"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Signup
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const isAuthenticated = true;
    const user = { fullName: "Alex", role: "employer" };
    const navigate = useNavigate();

    return (
        <header>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">JobPortal</span>
                    </div>

                    {/* Navigation Links - Hidden on mobile */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a onClick={() => navigate("/find-jobs")}
                            className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                            Find Jobs
                        </a>
                        <a onClick={() => {
                            navigate(
                                isAuthenticated && user?.role === "employer"
                                    ? "/employer-dashboard"
                                    : "/login"
                            );
                        }}
                            className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                            For Employers
                        </a>
                    </nav>

                    {/*Auth Buttons  */}
                    <div className="flex items-center space-x-3">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-3">
                                <span className="">Welcome, {user?.fullName}</span>
                                <a
                                    href={
                                        user?.role === "employer"
                                            ? "/employer-dashboard"
                                            : "/find-jobs"
                                    }
                                    className=""
                                >
                                    Dashboard
                                </a>
                            </div>
                        ) : (
                            <>
                                <a href="/login" className="">
                                    Login
                                </a>
                                <a href="/signup" className="">
                                    Signup
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

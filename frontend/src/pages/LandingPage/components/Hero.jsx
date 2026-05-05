import { motion } from 'framer-motion';
import { Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const isAuthenticated = true
    const user = { fullName: "Alex", role: "employer" }

    const navigate = useNavigate()

    const stats = [
        { icon: Users, label: 'Active Users', value: '2.4M+' },
        { icon: Building2, label: 'Companies', value: '50K+' },
        { icon: TrendingUp, label: 'Jobs Posted', value: '150K+' }
    ];

    return (
        // <section className="pt-24 pb-16 bg-white min-h-screen flex items-center">
        <section className="pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 bg-white min-h-screen flex items-center relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-10'
                    >Find Your Dreame Job or
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-20">Perfect Hire</span>
                    </motion.h1> */}
                    <motion.h1
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight'
                    >
                        Find Your Dream Job or
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                            Perfect Hire
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        // className="text-xl md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                        className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
                        Connect talented professionals with innovative companies.
                        Your next career move or perfect candidate is just one click away.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        // className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            // className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg space-x-2"
                            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 shadow-lg"
                            onClick={() => navigate("/find-jobs")}><Search className='w-5 h-5' /><span >First Jobs</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                            onClick={() => {
                                navigate(
                                    isAuthenticated && user?.role === "employer"
                                        ? "/employer-dashboard"
                                        : "/login"
                                );
                            }}
                        >
                            Post a Job
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        // className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-2">
                                    <stat.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-20" />
            </div>

        </section>
    )
}

export default Hero
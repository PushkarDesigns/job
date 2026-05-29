import { Briefcase } from "lucide-react";

const LoadingSpinner = () => {
  return (
    // Full screen centering container
    <div className="flex min-h-screen items-center justify-center text-white bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center">
        
        {/* Relative container to stack the ring and the icon */}
        <div className="relative">
          {/* Animated spinning outer ring */}
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500 mx-auto mb-4"></div>
          
          {/* Centered static briefcase icon */}
          <div className="absolute insert-0 flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-blue-500" />
          </div>
        </div>

        {/* Loading text with a subtle fade animation */}
        <p className="font-medium text-gray-600">
          Finding amazing opportunities...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

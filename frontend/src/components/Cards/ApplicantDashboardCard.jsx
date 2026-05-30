import { Clock } from "lucide-react";

const ApplicantDashboardCard = ({ applicant, position, time }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="bg-gradient-to-br from-indigo-400 to-indigo-400 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-semibold text-sm">
          <span className="text-white font-medium text-sm">
            {applicant.name
              ?.split(" ")
              ?.map((n) => n[0])
              ?.join("")}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-[15px] text-gray-500">
            {applicant.name}
          </h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {time}
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboardCard;

import { useState, useEffect, useMemo } from "react";
import {
  Users,
  Calendar,
  MapPin,
  Briefcase,
  Download,
  Eye,
  ArrowLeft,
} from "lucide-react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { getInitials } from "../../utils/helper";
import DashboardLayout from "../../components/layout/DashboardLayout";

const ApplicationViewer = () => {
  const location = useLocation();
  const jobId = location.state?.jobId || null;

  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        API_PATHS.APPLICATIONS.GET_ALL_APPLICATIONS(jobId)
      );
      setApplications(response.data);
    } catch (err) {
      console.log("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (jobId) fetchApplications();
    else navigate("/manage-jobs");
  }, []);

  // Group applications by job
  const groupedApplications = useMemo(() => {
    const filtered = applications.filter((app) => app.job.title.toLowerCase());

    return filtered.reduce((acc, app) => {
      const jobId = app.job._id;
      if (!acc[jobId]) {
        acc[jobId] = {
          job: app.job,
          applications: [],
        };
      }
      acc[jobId].applications.push(app);
      return acc;
    }, {});
  }, [applications]);


  const handleDownloadResume = (resumeUrl) => {
    window.open(resumeUrl, "_blank");
  };


  return (
    <DashboardLayout activeMenu='manage-jobs'>
      {loading && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading applications...</p>
          </div>
        </div>
      )}

      <div className="">
        {/* Header */}
        <div className="">
          <div className="">
            <div className="">
              <button
                onClick={() => navigate("/manage-jobs")}
                className=""
              >
                <ArrowLeft className="" />
                <span>Back</span>
              </button>

              <h1 className="">
                Applications Overview
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="">

        </div>
      </div>
    </DashboardLayout>
  )
}

export default ApplicationViewer;

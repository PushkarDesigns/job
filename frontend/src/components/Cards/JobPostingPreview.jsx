import {
  MapPin,
  DollarSign,
  ArrowLeft,
  Building2,
  Clock,
  Users,
} from "lucide-react";
import { CATEGORIES, JOB_TYPES } from "../../utils/data";
import { useAuth } from "../../context/AuthContext";

const JobPostingPreview = ({ formData, setIsPreview }) => {
  const { user } = useAuth();
  const currencies = [{ value: "usd", label: "$" }];

  return (
    <div className="">
      <div className="">
        {/* Header with glassmorphism effect */}
        <div className="">
          <div className="">
            <div className="">
              <h2 className="">Job Preview</h2>
            </div>
            <button onClick={() => setIsPreview(false)}>
              <ArrowLeft className="" />
              <span>Back to Edit</span>
            </button>
          </div>

          {/* Main content card */}
          <div className="">
            {/* Hero section with clean background */}
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <h1 className="">
                      {formData.jobTitle}
                    </h1>

                    <div className="">
                      <div className="">
                        <MapPin className="" />
                        <span className="">
                          {formData.isRemote ? "Remote" : formData.location}
                        </span>
                        {formData.isRemote && formData.location && (
                          <span className="">
                            {" "}
                            {formData.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {user?.companyLogo ? (
                    <img
                      src={user.companyLogo}
                      alt="Company Logo"
                      className=""
                    />
                  ) : (
                    <div className="">
                      <Building2 className="" />
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="">
                  <span className="">
                    {
                      CATEGORIES.find((c) => c.value === formData.category)
                        ?.label
                    }
                  </span>
                  <span className="">
                    {JOB_TYPES.find((j) => j.value === formData.jobType)?.label}
                  </span>
                  <div className="">
                    <Clock className="" />
                    <span>Posted today</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingPreview;

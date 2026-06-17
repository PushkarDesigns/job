import { useState } from "react";
import { Building2, Mail, Edit3 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import uploadImage from "../../utils/uploadImage";

import DashboardLayout from '../../components/layout/DashboardLayout';

const EmployerProfilePage = () => {
  const { user, updateUser } = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    companyName: user?.companyName || "",
    companyDescription: user?.companyDescription || "",
    companyLogo: user?.companyLogo || "",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });
  const [uploading, setUploading] = useState({ avatar: false, logo: false });
  const [saving, setSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = async (file, type) => { };

  const handleImageChange = (e, type) => { };

  const handleSave = async () => { };

  const handleCancel = () => {
    setFormData({ ...profileData });
    setEditMode(false);
  };



  return (
    <DashboardLayout activeMenu='company-profile'>
      {formData && <div className="">
        <div className="">
          <div className="">
            {/* Header */}
            <div className="">
              <h1 className="">Edit Profile</h1>
            </div>

            {/* Edit Form */}
            <div className="">
              <div className="">
                {/* Personal Information */}
                <div className="">
                  <h2 className="">
                    Personal Information
                  </h2>

                  {/* Avatar Upload */}
                  <div className="">
                    <div className="">
                      <img
                        src={formData?.avatar}
                        alt="Avatar"
                        className=""
                      />
                      {uploading?.avatar && (
                        <div className="">
                          <div className=""></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="">
                        <span className="">Choose avatar</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, "avatar")}
                          className=""
                        />
                      </label>
                    </div>
                  </div>

                  {/* Name Input*/}
                  <div>
                    <label className="">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className=""
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email (Read-only) */}
                  <div>
                    <label className="">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className=""
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="">
                  <h2 className="">
                    Company Information
                  </h2>

                  {/* Company Logo Upload */}
                  <div className="">
                    <div className="">
                      <img
                        src={formData.companyLogo}
                        alt="Company Logo"
                        className=""
                      />
                      {uploading.logo && (
                        <div className="">
                          <div className=""></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="">
                        <span className="">Choose company logo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, "logo")}
                          className=""
                        />
                      </label>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className=""
                      placeholder="Enter company name"
                    />
                  </div>

                  {/* Company Description */}
                  <div>
                    <label className="">
                      Company Description
                    </label>
                    <textarea
                      value={formData.companyDescription}
                      onChange={(e) =>
                        handleInputChange(
                          "companyDescription",
                          e.target.value
                        )
                      }
                      rows={4}
                      className=""
                      placeholder="Describe your company..."
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div >}
    </DashboardLayout >
  );
};

export default EmployerProfilePage;

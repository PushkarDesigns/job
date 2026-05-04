import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Login from "./pages/Auth/Login.jsx";
import ApplicationViewer from "./pages/Employer/ApplicationViewer.jsx";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard.jsx";
import JobDetails from "./pages/JobSeeker/JobDetails.jsx";
import SavedJobs from "./pages/JobSeeker/SavedJobs.jsx";
import UserProfile from "./pages/JobSeeker/UserProfile.jsx";
import ProtectedRoute from "../src/routes/ProtectedRoute.jsx";
import EmployerDashboard from "./pages/Employer/EmployerDashboard.jsx";
import JobPostingForm from "./pages/Employer/JobPostingForm.jsx";
import ManageJobs from "./pages/Employer/ManageJobs.jsx";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage.jsx";

const App = () => {
  return (
    <>
      <div>

        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/find-jobs" element={<JobSeekerDashboard />} />
            <Route path="/job/:jobId" element={<JobDetails />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/profile" element={<UserProfile />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute requiredRole="employer" />}>
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              <Route path="/post-job" element={<JobPostingForm />} />
              <Route path="/manage-jobs" element={<ManageJobs />} />
              <Route path="/applicants" element={<ApplicationViewer />} />
              <Route path="/company-profile" element={<EmployerProfilePage />} />
            </Route>

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </div>
    </>
  );
};

export default App;

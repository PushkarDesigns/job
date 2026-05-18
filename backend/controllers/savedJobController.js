const SavedJob = require("../models/SavedJob");

// @desc Save a job
exports.saveJob = async (req, res) => {
    //   try {
    //     const { jobId } = req.params;
    //     const userId = req.user.id; // Assumes 'protect' middleware attaches user to req

    //     // Check if the job is already saved by this user
    //     let existingSave = await SavedJob.findOne({ user: userId, job: jobId });
    //     if (existingSave) {
    //       return res.status(400).json({ message: "Job already saved" });
    //     }

    //     const savedJob = await SavedJob.create({ user: userId, job: jobId });
    //     res.status(201).json({ message: "Job saved successfully", data: savedJob });
    //   } 
    try {
        const exists = await SavedJob.findOne({ job: req.params.jobId, jobseeker: req.user._id });
        if (exists) return res.status(400).json({ message: "Job already saved" });

        const saved = await SavedJob.create({ job: req.params.jobId, jobseeker: req.user._id });
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: "Failed to save job", error: err.message });
    }
};

// @desc Unsave a job
exports.unsaveJob = async (req, res) => {
    // try {
    //     const { jobId } = req.params;
    //     const userId = req.user.id;

    //     const deletedJob = await SavedJob.findOneAndDelete({ user: userId, job: jobId });
    //     if (!deletedJob) {
    //         return res.status(404).json({ message: "Saved job record not found" });
    //     }

    //     res.status(200).json({ message: "Job unsaved successfully" });
    try {
        await SavedJob.findOneAndDelete({ job: req.params.jobId, jobseeker: req.user._id });
        res.json({ message: "Job removed from saved list" });
    } catch (err) {
        res.status(500).json({ message: "Failed to unsave job", error: err.message });
    }
};

// @desc Get saved jobs for current user
exports.getMySavedJobs = async (req, res) => {
    // try {
    //     const userId = req.user.id;

    //     // Finds records and populates the related job data details
    //     const savedJobs = await SavedJob.find({ user: userId }).populate("job");
    //     res.status(200).json({ count: savedJobs.length, data: savedJobs });}
    try {
        const savedJobs = await SavedJob.find({ jobseeker: req.user._id })
            .populate({
                path: "job",
                populate: {
                    path: "company",
                    select: "name companyName companyLogo",
                },
            });
        res.json(savedJobs); 
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch saved jobs", error: err.message });
    }
};
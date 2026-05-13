const Job = require("../models/Job");
const User = require("../models/User");
const Application = require("../models/Application");
const SavedJob = require("../models/SavedJob");

// @desc    Create a new job (Employer only)
exports.createJob = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getJobs = async (req, res) => {

};

// @desc    Get jobs for logged in user (Employer can see posted jobs)
exports.getJobsEmployer = async (req, res) => {

};

// @desc    Get single job by ID
exports.getJobById = async (req, res) => {

};

// @desc    Update a job (Employer only)
exports.updateJob = async (req, res) => {

};

// @desc    Delete a job (Employer only)
exports.deleteJob = async (req, res) => {

};

// @desc    Toggle Close Status for a job (Employer only)
exports.toggleCloseJob = async (req, res) => {

};

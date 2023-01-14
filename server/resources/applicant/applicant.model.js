import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    fullNames: String,
    personalContactInfo: String,
    guardianContactInfo: String,
    registrationNumber: String,
    class: String,
    idNumber: String,
    yearOfCompletion: String,
    division: String,
    subLocation: String,
    location: String,
    institutionName: String,
    institutionAddress: String,
    institutionReferenceUrl: String,
    parentalStatus: String,
    noOfParents: String,
    parentEmploymentStatus: String,
    sponsorshipStatus: String,
    chiefReferenceUrl: String,
    courseName: String,
    yearOfStudy: String,
    yearOfCompletion: String,
    feesPerYear: String,
    outstandingFees: String,
    feeStatementUrl: String,
    totalFees: String,
  },
  { timestamps: true }
);


export const Applicant = mongoose.model("applicant", applicantSchema);

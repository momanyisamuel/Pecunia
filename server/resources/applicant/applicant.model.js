import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    fullNames: String,
    personalContactInfo: String,
    guardianContactInfo: String,
    registrationNumber: String,
    class: String,
    KCPEResusltUrl:String,
    idNumber: String,
    yearOfCompletion: String,
    division: String,
    subLocation: String,
    location: String,
    institutionName: String,
    institutionAddress: String,
    institutionReferenceUrl: String,
    institutionIdUrl:String,
    institutionAdmissionUrl:String,
    institutionTranscriptUrl:String,
    parentalStatus: String,
    noOfParents: String,
    parentEmploymentStatus: String,
    parentVoteCardUrl:String,
    parentIdCardUrl:String,
    sponsorshipStatus: String,
    sponsorshipCurrentlyAwarded: String,
    chiefReferenceUrl: String,
    courseName: String,
    yearOfStudy: String,
    feesPerYear: String,
    outstandingFees: String,
    feeStatementUrl: String,
    totalFees: String,
    institutionHead: String,
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    applicationStatus: 
      {
        type : String,
        default : 'pending'
    },
    programme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Programme"
    }
  },
  { timestamps: true }
);


export const Applicant = mongoose.model("applicant", applicantSchema);

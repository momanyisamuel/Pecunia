import mongoose from "mongoose";

const programmeSchema = new mongoose.Schema({
  programName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Applicant"
    }
  ]
});

export const Programme = mongoose.model("Programme", programmeSchema);


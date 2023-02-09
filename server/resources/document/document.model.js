import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      file_path: {
        type: String,
        required: true
      },
      file_mimetype: {
        type: String,
        required: true
      },
      programme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Programme"
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    },
    {
      timestamps: true
    }
  );
  
  export const Document = mongoose.model('Document', documentSchema);
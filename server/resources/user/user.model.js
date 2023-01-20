import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    role: {
      type:String,
      default:"user"
    },
    idNumber: String,
    contactNumber: String,
    workNumber: String,
    referenceName: String,
    referenceIdNumber: String,
    referenceEmail: String,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

export const User = mongoose.model("user", userSchema);

// a document instance
// var defaulUser = new User({
//   email: "admin@admin.admin",
//   password: "pass",
//   firstName: "Admin",
//   lastName: "Administrator",
//   role: "admin",
// });

// save model to database
// defaulUser.save(function (err, user) {
//   if (err) return console.error(err);
//   console.log(user.firstName + " saved as default user.");
// })
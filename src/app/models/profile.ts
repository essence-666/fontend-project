import mongoose, { Schema } from 'mongoose';

const profileSchema = new Schema(
  {
    name: String,
    place: String,
    email: String,
    description: String,
  },

  {
    timestamps: true,
  },
);

const Profile =
  mongoose.models.Profile || mongoose.model('Profile', profileSchema);

export default Profile;

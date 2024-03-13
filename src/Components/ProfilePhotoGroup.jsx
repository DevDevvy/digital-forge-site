import { ProfilePhotoFrame } from "./ProfilePhotoFrame";

const ProfilePhotoFrameGroup = ({ profiles }) => {
  return (
    <div className="photo-frame-group">
      {profiles.map((profile, index) => (
        <ProfilePhotoFrame
          key={index}
          photo={profile.photo}
          name={profile.name}
        />
      ))}
    </div>
  );
};

export default ProfilePhotoFrameGroup;

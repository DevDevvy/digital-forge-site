import { ProfilePhotoFrame } from "./ProfilePhotoFrame";
import efrain from "../assets/efrain.png";
import dustin from "../assets/dustin.png";
import mac from "../assets/mac.png";
import randall from "../assets/randall.png";
import "./ProfilePhotoFrameGroup.css";

const ProfilePhotoFrameGroup = () => {
  const profiles = [
    { photo: mac, name: "Mac" },
    { photo: randall, name: "Randall" },
    { photo: dustin, name: "Dustin" },
    { photo: efrain, name: "Efrain" },
  ];

  return (
    <>
      <div className="photo-frame-group">
        {profiles.map((profile, index) => (
          <ProfilePhotoFrame
            key={index}
            photo={profile.photo}
            name={profile.name}
          />
        ))}
      </div>
    </>
  );
};

export default ProfilePhotoFrameGroup;

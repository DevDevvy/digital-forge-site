import { ProfilePhotoFrame } from "./ProfilePhotoFrame";
import efrain from "../assets/efrain.png";
import dustin from "../assets/dustin.png";
import mac from "../assets/mac.png";
import randall from "../assets/randall.png";
import "./ProfilePhotoFrameGroup.css";
import { cardData } from "../Pages/eBusinessCards/cardData";

const ProfilePhotoFrameGroup = () => {
  const profiles = [
    { photo: mac, name: "Mac", linkedin: cardData.mac.linkedin },
    { photo: randall, name: "Randall", linkedin: cardData.randall.linkedin },
    { photo: dustin, name: "Dustin", linkedin: cardData.dustin.linkedin },
    { photo: efrain, name: "Efrain", linkedin: cardData.efrain.linkedin },
  ];

  return (
    <>
      <div className="photo-frame-group">
        {profiles.map((profile, index) => (
          <ProfilePhotoFrame
            key={index}
            photo={profile.photo}
            name={profile.name}
            linkedin={profile.linkedin}
          />
        ))}
      </div>
    </>
  );
};

export default ProfilePhotoFrameGroup;

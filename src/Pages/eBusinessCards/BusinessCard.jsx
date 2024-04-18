import styles from "./BusinessCard.module.css"; // Import CSS module
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "./cardData";
import emailIcon from "../../assets/email.svg";
import twitterIcon from "../../assets/twitterLogo.svg";
import logo from "../../assets/logo.png";
import linkedinIcon from "../../assets/linkedin.svg";
import SphereAnimation from "../../Components/SphereAnimation/SphereAnimation";
import { downloadVCard, createTwitterLink } from "./cardUtils";
import { ProfilePhotoFrame } from "../../Components/ProfilePhotoFrame";

const EBusinessCard = () => {
  let { name } = useParams();
  const person = useMemo(() => cardData[name.toLowerCase()], [name]);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsFlipped(true), 2000); // Flips card
  }, []);

  return (
    <>
      <div className={styles.cardParentContainer}>
        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
            <div className={styles.front}>
              {/* Splash Screen with Logo */}
              <img id={styles.cardLogo} src={logo} alt="Company Logo" />
            </div>
            <div className={styles.back}>
              <div className={styles.content}>
                <SphereAnimation />
                <div className={styles.profile}>
                  <a
                    href="https://digitalforge-tek.com"
                    alt="Digital Forge link"
                  >
                    <h1 id={styles.companyName}>{person.company}</h1>
                  </a>
                  <ProfilePhotoFrame photo={person.photo} name={""} />
                  <h2>{person.name}</h2>
                  <p className={styles.profile}>
                    {person.title}
                    <a href={`tel:${person.phone}`}>{person.phone}</a>
                  </p>
                </div>
                <p className={styles.about}> {person.about}</p>
                <div className={styles.socialDiv}>
                  {person.email && (
                    <a href={`mailto:${person.email}`}>
                      <img
                        className={styles.socialIcon}
                        src={emailIcon}
                        alt="Email"
                      />
                    </a>
                  )}
                  {person.twitter && (
                    <a href={createTwitterLink(person.twitter)}>
                      <img
                        src={twitterIcon}
                        className={styles.socialIcon}
                        alt="Twitter"
                      />
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedinIcon}
                        className={styles.socialIcon}
                        alt="LinkedIn"
                      />
                    </a>
                  )}
                </div>
                <div className={styles.download}>
                  <button
                    onClick={() => downloadVCard(person)}
                    className={styles.downloadButton}
                  >
                    Download Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EBusinessCard;

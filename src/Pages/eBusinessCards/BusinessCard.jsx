import styles from "./BusinessCard.module.css"; // Import CSS module
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import people from "./cardData";
import emailIcon from "../../assets/email.svg";
import twitterIcon from "../../assets/twitterLogo.svg";
import logo from "../../assets/logo.png";

const EBusinessCard = () => {
  let { name } = useParams();
  const person = people[name.toLowerCase()];
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsFlipped(true), 2000); // Flips card
  }, []);

  const downloadVCard = () => {
    const link = document.createElement("a");
    link.href = person.vcfFile;
    link.type = "text/vcard";
    link.download = `${name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <div className={styles.profile}>
                <img
                  src={person.profileImage}
                  alt={`${name}'s profile`}
                  className={styles.profileImage}
                />
                <h2>{name}</h2>
                <p>{person.title} at Digital Forge</p>
              </div>
              <div className={styles.socialDiv}>
                {person.email ? (
                  <a href={`mailto:${person.email}`}>
                    <img
                      className={styles.socialIcon}
                      src={emailIcon}
                      alt="Email"
                    />
                  </a>
                ) : (
                  ""
                )}
                {person.twitter ? (
                  <a href={person.twitter}>
                    <img
                      src={twitterIcon}
                      className={styles.socialIcon}
                      alt="Twitter"
                    />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.download}>
                <button
                  onClick={downloadVCard}
                  className={styles.downloadButton}
                >
                  Download Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EBusinessCard;

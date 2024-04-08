import styles from "./BusinessCard.module.css"; // Import CSS module
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import people from "./cardData";
import emailIcon from "../../assets/email.svg";
import twitterIcon from "../../assets/twitterLogo.svg";
import logo from "../../assets/logo.png";

const EBusinessCard = () => {
  let { name } = useParams();
  let origName = name;
  const person = people[name.toLowerCase()];
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsFlipped(true), 2000); // Flips card
  }, []);

  const downloadVCard = () => {
    // Example vCard data
    var vCardData = `BEGIN:VCARD
        VERSION:3.0
        FN:${name}
        ORG:${person.company}
        TEL;TYPE=WORK,VOICE:${person.phone}
        EMAIL;TYPE=PREF,INTERNET:${person.email}
        END:VCARD`;

    // Create a Blob with the vCard data
    var blob = new Blob([vCardData], { type: "text/vcard" });

    // Create an object URL for the Blob
    var url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger the download
    var a = document.createElement("a");
    a.href = url;
    a.download = `${origName}.vcf`;
    document.body.appendChild(a); // Required for Firefox
    a.click();
    window.URL.revokeObjectURL(url); // Clean up
    a.remove(); // Remove the element
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

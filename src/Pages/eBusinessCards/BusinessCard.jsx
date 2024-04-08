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

  const downloadVCard = (person) => {
    // Ensure person data is provided
    if (!person) {
      console.error("No person data provided for vCard.");
      return;
    }

    // Destructure for easier access and default values to avoid undefined in vCard
    const { name = "", company = "", phone = "", email = "" } = person;

    // Properly format the vCard data to ensure compatibility
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${name}`,
      `ORG:${company}`,
      `TEL;TYPE=WORK,VOICE:${phone}`,
      `EMAIL;TYPE=PREF,INTERNET:${email}`,
      "END:VCARD",
    ].join("\r\n"); // Use \r\n as a line separator to comply with vCard standard

    // Create a Blob with the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });

    // Use a more compatible method for handling the download
    if (window.navigator.msSaveOrOpenBlob) {
      // IE and Edge
      window.navigator.msSaveOrOpenBlob(blob, `${origName}.vcf`);
    } else {
      // Other browsers
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${origName}.vcf`;

      // Append to the body temporarily to handle Firefox's requirements
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      a.remove();
    }
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

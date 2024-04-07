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
    // Example VCF content
    const vCardData = `BEGIN:VCARD
  VERSION:3.0
  FN:${person.name}
  ORG:Digital Forge
  TEL;TYPE=WORK,VOICE:${person.phone}
  EMAIL;TYPE=WORK,EMAIL:${person.email}
  END:VCARD`;
    // Convert the string to a UTF-8 byte array
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(vCardData);

    // Convert the byte array to a Base64 string
    const base64String = uint8Array.reduce((acc, byte) => {
      return acc + String.fromCharCode(byte);
    }, "");

    // Use btoa to convert the binary string to Base64
    const base64VCard = btoa(base64String);

    // Create a data URI for the download
    const link = document.createElement("a");
    link.href = `data:text/vcard;base64,${base64VCard}`;
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

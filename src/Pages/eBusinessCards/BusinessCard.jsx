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
    // Create a Blob with the vCard data
    const blob = new Blob([person.vcfFile], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    console.log(url);
    // Create a temporary anchor element and trigger download
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${origName}.vcf`;
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
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
                <h1>{person.company}</h1>
                <img
                  src={person.profileImage}
                  alt={`${name}'s profile`}
                  className={styles.profileImage}
                />
                <p className={styles.profile}>
                  <h2>{name}</h2>
                  {person.title}
                  <a href={`tel:${person.phone}`}>{person.phone}</a>
                </p>
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
    </>
  );
};

export default EBusinessCard;

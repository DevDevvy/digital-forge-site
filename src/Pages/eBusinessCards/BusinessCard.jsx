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
    ].join("\r\n");

    // Detect iOS devices
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Create a Blob with the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });

    if (window.navigator.msSaveOrOpenBlob) {
      // IE and Edge
      window.navigator.msSaveOrOpenBlob(blob, `${name}.vcf`);
    } else if (isIOS) {
      // For iOS devices, instead of direct download, guide users to add manually or use an alternative approach
      // Optionally, create a temporary DOM element to show instructions or a link to the vCard
      showIOSDownloadInstructions(blob, origName);
    } else {
      // Other browsers
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}.vcf`;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      a.remove();
    }
  };

  // Function to handle iOS-specific download instructions or alternatives
  function showIOSDownloadInstructions(blob, fileName) {
    // For demonstration: alert the user. Implement a more sophisticated method as needed.
    alert(
      "iOS detected. Due to browser limitations, direct downloads are not supported on iOS. Please check your downloads folder or use an alternative method."
    );

    // Example: Convert blob to a readable URL and display it in an iframe or prompt the user with a link to open.
    const url = window.URL.createObjectURL(blob);
    const iframe = document.getElementById("download_vcard_iframe");
    iframe.src = url;

    // Other alternatives can include sending the vCard via email or displaying a QR code linking to the vCard.
  }

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

import styles from "./BusinessCard.module.css"; // Import CSS module
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import people from "./cardData";
import emailIcon from "../../assets/email.svg";
import twitterIcon from "../../assets/twitterLogo.svg";
import logo from "../../assets/logo.png";
import linkedinIcon from "../../assets/linkedin.svg";
import SphereAnimation from "../../Components/SphereAnimation/SphereAnimation";

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

    if (isIOS) {
      // For iOS, instead of hosting a static .vcf file, dynamically create a Blob and use a Data URI
      const blob = new Blob([vCardData], {
        type: "text/x-vcard;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);

      // Create an anchor and simulate a click to download
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${origName}.vcf`; // Use the person's name for the file name

      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // For non-iOS browsers, follow the Blob and Object URL approach
      const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}.vcf`;

      // Append to the document and trigger download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  };

  const createTwitterLink = (username) => {
    // Detect iOS devices
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // Use the Twitter app URL scheme on iOS, web URL otherwise
    return isIOS
      ? `twitter://user?screen_name=${username}`
      : `https://twitter.com/${username}`;
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
              <SphereAnimation />
              <div className={styles.profile}>
                <h1 id={styles.companyName}>{person.company}</h1>
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
                  <a href={createTwitterLink(person.twitter)}>
                    <img
                      src={twitterIcon}
                      className={styles.socialIcon}
                      alt="Twitter"
                    />
                  </a>
                ) : (
                  ""
                )}
                {person.linkedin ? (
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

// Utils for vCard creation and download
export const createVCardBlob = (vCardData) => {
    return new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
};

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

export const downloadVCard = (person) => {
    if (!person) {
        console.error("No person data provided for vCard.");
        return;
    }

    const { name = "", company = "", phone = "", email = "", cell = "", photo = "" } = person;

    const vCardData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${name}`,
        `ORG:${company}`,
        `TEL;TYPE=WORK,VOICE:${phone}`,
        `TEL;TYPE=CELL,VOICE:${cell}`,
        `PHOTO;TYPE=JPEG;ENCODING=BASE64:${photo}`,
        `EMAIL;TYPE=PREF,INTERNET:${email}`,
        "END:VCARD",
    ].join("\r\n");

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const filename = `${name.replace(/\s+/g, '_')}.vcf`;

    if (isIOS && !isFirefox()) {
        // For iOS, use a hidden iframe or open the vCard in a new window as direct downloads are not supported
        try {
            const blob = new Blob([vCardData], {
                type: "text/x-vcard;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);

            // Create an anchor and simulate a click to download
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = `${name}.vcf`;

            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Failed to prepare vCard for iOS:", error);
            // If Blob creation fails, fallback to an alternate method if available
        }
    } else {
        // Standard Blob download for non-iOS devices
        try {
            const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        } catch (error) {
            console.error("Failed to download vCard for non-iOS device:", error);
        }
    }
};


export const createTwitterLink = (username) => {
    // Detect iOS devices
    const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // Use the Twitter app URL scheme on iOS, web URL otherwise
    return isIOS
        ? `twitter://user?screen_name=${username}`
        : `https://twitter.com/${username}`;
};
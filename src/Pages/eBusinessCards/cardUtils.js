// Utils for vCard creation and download
export const createVCardBlob = (vCardData) => {
    return new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
};

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}
function convertImgToBase64URL(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = 512;
        canvas.width = 512;
        ctx.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}

export const downloadVCard = (person) => {
    if (!person) {
        console.error("No person data provided for vCard.");
        return;
    }

    const { name = "", phone = "", email = "", cell = "", photo = "" } = person;

    convertImgToBase64URL(photo, function (base64Img) {
        const base64EncodedImage = base64Img.substring(base64Img.indexOf(",") + 1); // Removing the prefix to get pure base64 data
        const vCardData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${name}`,
            `TITLE:'Co-Founder: Digital Forge`,
            `TEL;TYPE=WORK,VOICE:${phone}`,
            `TEL;TYPE=CELL,VOICE:${cell}`,
            `PHOTO;TYPE=PNG;ENCODING=BASE64:${base64EncodedImage}`,
            `EMAIL;TYPE=PREF,INTERNET:${email}`,
            "END:VCARD",
        ].join("\r\n");

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const filename = `${name.replace(/\s+/g, '_')}.vcf`;

        try {
            const blob = createVCardBlob(vCardData);
            const url = URL.createObjectURL(blob);
            if (isIOS && !isFirefox()) {
                // iOS-specific download logic
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = url;
                a.download = `${name}.vcf`;

                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } else {
                // Standard download logic for non-iOS devices
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error("Failed to download vCard:", error);
        }
    }, 'image/png');
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
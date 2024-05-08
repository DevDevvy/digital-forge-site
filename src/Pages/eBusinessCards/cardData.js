import randallImage from "../../assets/randall.png";
import macImage from "../../assets/mac.png";
import efrainImage from "../../assets/efrain.png";
import dustinImage from "../../assets/dustin.png";

export const cardData = {
    randall: {
        name: "Randall Thomas",
        title: "Co-Founder/Engineer",
        email: "randall@digitalforge-tek.com",
        twitter: "randalltmusic",
        company: "Digital Forge",
        linkedin: "https://www.linkedin.com/in/randall-thomas-music/",
        photo: randallImage,
        phone: "(863) 949-0039",
        cell: "(909) 810-7236",
        about: "Randall is a co-founder of Digital Forge and has a background in music production and software development. He is passionate about creating innovative solutions for businesses of all sizes, with a special focus on startups and small businesses. In his free time Randall enjoys developing AI platforms, singing and writing, and spending time with his partner and daughter.",
    },
    mac: {
        name: "Mac McMorries",
        title: "Co-Founder/Engineer",
        email: "matthew@digitalforge-tek.com",
        twitter: "",
        company: "Digital Forge",
        linkedin: "https://www.linkedin.com/in/matthew-mcmorries/",
        photo: macImage,
        phone: "(863) 949-0039",
        cell: "(731) 514-2992",
        about: "Mac is a co-founder of Digital Forge, has a background in software development and is a decorated veteran. He is passionate about creating secure, scalable infrastructure solutions for businesses of all sizes, specializing in startups and small businesses. In his free time Mac enjoys building AI platforms, hiking and fishing, and spending time with his partner and son.",
    },
    efrain: {
        name: "Efrain Santiago, MBA",
        title: "Co-Founder/Accountant",
        email: "efrain@digitalforge-tek.com",
        twitter: "",
        company: "Digital Forge",
        linkedin: "https://www.linkedin.com/in/efrain-s-9854bb237/",
        photo: efrainImage,
        phone: "(863) 949-0039",
        cell: "(786) 218-1830",
        about: "Efrain is a co-founder of Digital Forge and has a background in finance and accounting. He is passionate about supporting businesses and individuals in gaining financial independence and freedom with a focus on compliance. In his free time Efrain enjoys collecting certifications and degrees, curating an impressive shoe collection, and spending time with his partner and grand children.",
    },
    dustin: {
        name: "Dustin Smiddie",
        title: "Co-Founder/IT Specialist",
        email: "dustin@digitalforge-tek.com",
        twitter: "",
        company: "Digital Forge",
        linkedin: "https://www.linkedin.com/in/dsmiddie3/",
        photo: dustinImage,
        phone: "(863) 949-0039",
        cell: "(317) 563-6556",
        about: "Dustin is a co-founder of Digital Forge and has a background in networking and IT project management. He is passionate about building teams of people and networks for communications. In his free time Dustin enjoys studying military history, inventing new technologies, and spending time with his partner and family.",
    },

};
export const profiles = [
    { photo: macImage, name: cardData.mac.name },
    { photo: randallImage, name: cardData.randall.name },
    { photo: dustinImage, name: cardData.dustin.name },
    { photo: efrainImage, name: cardData.efrain.name },
];

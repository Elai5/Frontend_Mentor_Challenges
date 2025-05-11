/** @format */
import backgroundHome from "./background-home-desktop.jpg";
import backgroundCrew from "./background-crew-desktop.jpg";
import backgroundDestination from "./background-destination-desktop.jpg";
import imageAnousheh from "./image-anousheh-ansari.png";
import imageDouglas from "./image-douglas-hurley.png";
import imageMark from "./image-mark-shuttleworth.png";
import imageVictor from "./image-victor-glover.png";
import imageEuropa from "./image-europa.png";
import imageMars from "./image-mars.png";
import imageMoon from "./image-moon.png";
import imageTitan from "./image-titan.png";
import iconClose from "./icon-close.svg";
import iconHamburger from "./icon-hamburger.svg";
import logo from "./logo.svg";
import imageLaunch from "./image-launch-vehicle-landscape.jpg";
import imageSpaceCapsule from "./image-space-capsule-landscape.jpg";
import imageSpacePort from "./image-spaceport-landscape.jpg";

export const assets = {
  backgroundHome,
  backgroundCrew,
  backgroundDestination,
  imageAnousheh,
  imageDouglas,
  imageMark,
  imageVictor,
  imageEuropa,
  imageMars,
  imageMoon,
  imageTitan,
  iconClose,
  iconHamburger,
  logo,
  imageLaunch,
  imageSpaceCapsule,
  imageSpacePort,
};
export const crew = [
  {
    name: "Douglas Hurley",
    images: imageDouglas,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: imageMark,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: imageVictor,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

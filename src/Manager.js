import unityLogo from "/techLogos/untiyLogo.png";
import awsLogo from "/techLogos/awsLogo.jpg";
import blenderLogo from "/techLogos/blenderLogo.png";
import illustratorLogo from "/techLogos/illustratorLogo.png";
import playfabLogo from "/techLogos/playfab.jpg";

class Technology {
  constructor(name, desc, icon, color) {
    this.name = name;
    this.desc = desc;
    this.icon = icon;
    this.color = color;
  }
}

const unity = new Technology(
  "Unity",
  "A game developing framework",
  unityLogo,
  "rgba(255, 255, 255, 0)"
);

const aws = new Technology(
  "Amazon Web Services",
  "A cloud computing platform with over 200 services",
  awsLogo,
  "rgba(255, 140, 0, 0)"
);

const blender = new Technology(
  "Blender3D",
  "An free open source 3D modelling software",
  blenderLogo,
  "rgba(255, 100, 0, 0)"
);

const illustrator = new Technology(
  "Illustrator",
  "A vector based graphics software from Adobe",
  illustratorLogo,
  "rgba(255, 100, 0, 0)"
);

const playfab = new Technology(
  "Microsoft Azure PlayFab",
  "Cloud based utilities to build operate and analyze games",
  playfabLogo,
  "rgba(255, 100, 0, 0)"
);

export const Tech = {
  Unity: unity,
  AWS: aws,
  Blender: blender,
  Illustrator: illustrator,
  PlayFab: playfab,
};

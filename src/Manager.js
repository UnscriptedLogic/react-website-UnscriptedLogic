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
  "Unity Game Engine",
  "This game was made with Unity, a versatile game engine for creating 2D and 3D games with powerful tools and a user-friendly interface.",
  unityLogo,
  "rgba(255, 255, 255, 0)"
);

const aws = new Technology(
  "Amazon Web Services (AWS)",
  "This project uses AWS, a leading cloud computing platform offering scalable and flexible solutions for hosting, storage, and data management.",
  awsLogo,
  "rgba(255, 140, 0, 0)"
);

const blender = new Technology(
  "Blender3D",
  "This project used Blender3D, an open source versatile 3D creation suite for modeling, animation, rendering, and more, for its models and animations.",
  blenderLogo,
  "rgba(255, 100, 0, 0)"
);

const illustrator = new Technology(
  "Adobe Illustrator",
  "This project used Adobe Illustrator, a powerful vector graphic design software for creating illustrations, logos, and graphics with precision and creativity.",
  illustratorLogo,
  "rgba(255, 100, 0, 0)"
);

const playfab = new Technology(
  "Microsoft Azure PlayFab",
  "This project utilizes Microsoft Azure PlayFab, a comprehensive game development platform for building, deploying, and managing online games with ease.",
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

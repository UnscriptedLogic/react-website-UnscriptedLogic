import unnamedTDIcon from "/unnamedtdIcon.png";
import dtIcon from "/dtIcon.png";
import ccIcon from "/ccIcon.png";
import stIcon from "/stIcon.png";
import vIcon from "/vIcon.png";
import cc2Icon from "/cc2Icon.png";
import mlIcon from "/mlIcon.png";

import ggjIcon from "/submissiontypes/ggjIcon.png";
import mjIcon from "/submissiontypes/mjIcon.png";
import schoolIcon from "/submissiontypes/schoolIcon.png";
import gameOffIcon from "/submissiontypes/gameOffIcon.png";
import majIcon from "/submissiontypes/majIcon.png";
import gmtkIcon from "/submissiontypes/gmtkIcon.jpg";
import brackeysIcon from "/submissiontypes/brackeysIcon.jpg";
import { Tech } from "./Manager";

export const Genres = {
  Strategy: "Strategy",
  TowerDefense: "Tower Defense",
  Arcade: "Arcade",
  Shooter: "Shooter",
  Platformer: "Platformer",
  Horror: "Horror",
  Puzzle: "Puzzle",
};

export const GameStatus = {
  Completed: "Completed",
  Dropped: "Dropped",
  Halted: "Halted",
  Ongoing: "OnGoing",
  NotStarted: "Not Started",
};

class SubmissionType {
  constructor(name, desc, icon, abbreviation, color, fontColor) {
    this.name = name;
    this.desc = desc;
    this.icon = icon;
    this.abbreviation = abbreviation;
    this.color = color;
    this.fontColor = fontColor;
  }
}

const gmtkSubmission = new SubmissionType(
  "Game Maker's ToolKit Game Jam",
  "An annual game jam hosted by Mark Brown from Game Maker's ToolKit(GMTK) with a suprise theme. GMTK is a YouTube channel dedicated to breaking down game design of existing games and shedding light on the details.",
  gmtkIcon,
  "GMTK",
  "#000000",
  "#ffffff"
);

const brackeysSubmission = new SubmissionType(
  "Brackey's Game Jam",
  "A game jam hosted by the Brackey's team with a suprise theme. Brackey's is a YouTube channel that contains Unity tutorials of any topic targetted at any skill level.",
  brackeysIcon,
  "Brackey's",
  "white",
  "black"
);

const miniJamSubmission = new SubmissionType(
  "Mini Game Jam",
  "A game jam hosted bi-weekly over at Itch.IO with a pre-established theme and a suprise limitation.",
  mjIcon,
  "Mini Jam",
  "white",
  "black"
);

const sgGlobalJamSubmission = new SubmissionType(
  "Singapore Global Game Jam",
  "An annual game jam hosted by the Global Game Jam team and split into their individual countries. The jam consists of a surprise theme as well as the opportunity to present their submissions to the other jammers.",
  ggjIcon,
  "SGG",
  "#ff1f00",
  "#ffffff"
);

const gameoffSubmission = new SubmissionType(
  "Game Off Game Jam",
  "An annual game jam hosted by GitHub.",
  gameOffIcon,
  "GameOff",
  "white",
  "black"
);

const schoolSubmission = new SubmissionType(
  "School Submission",
  "This project was done for a school submission.",
  schoolIcon,
  "School",
  "#afafaf",
  "black"
);

const mixAndJamSubmission = new SubmissionType(
  "Mix and Game Jam",
  "An annual game jam hosted by Mix and Jam; a YouTube channel dedicated to breaking down game mechanics and recreating them in Unity.",
  majIcon,
  "Mix and Jam",
  "#ff556a",
  "#ffffff"
);

export const GameSubmissionType = {
  GMTK: gmtkSubmission,
  Brackeys: brackeysSubmission,
  MiniJam: miniJamSubmission,
  SGJam: sgGlobalJamSubmission,
  GameOff: gameoffSubmission,
  School: schoolSubmission,
  MixAndJam: mixAndJamSubmission,
};

class Game {
  constructor(name, desc, year, thumbnail, gameLink, genres, techUsed) {
    this.name = name;
    this.desc = desc;
    this.year = year;
    this.thumbnail = thumbnail;
    this.gameLink = gameLink;
    this.genres = genres;
    this.techUsed = techUsed;
  }
}

class MinorGame extends Game {
  constructor(
    name,
    desc,
    year,
    thumbnail,
    gameLink,
    genres,
    techUsed,
    submissionTypes
  ) {
    super(name, desc, year, thumbnail, gameLink, genres, techUsed);
    this.submissionTypes = submissionTypes;
  }
}

class MajorGame extends Game {
  constructor(
    name,
    desc,
    year,
    thumbnail,
    gameLink,
    genres,
    techUsed,
    gameStatus
  ) {
    super(name, desc, year, thumbnail, gameLink, genres, techUsed);
    this.gameStatus = gameStatus;
  }
}

export const GetStatusChipColor = (status) => {
  switch (status) {
    case GameStatus.NotStarted:
      return "#5f5f5f";
    case GameStatus.Ongoing:
      return "#ffd400";
    case GameStatus.Halted:
      return "#cf5400";
    case GameStatus.Dropped:
      return "#2c0000";
    case GameStatus.Completed:
      return "#7fce7f";
    default:
      return "#efefef";
  }
};

export const GenresToString = (genres) => {
  let genreString = " ";
  for (let index = 0; index < genres.length; index++) {
    const genre = genres[index];
    genreString += genre;

    if (index < genres.length - 1) {
      genreString += " | ";
    }
  }
  return genreString;
};

//Major Games
export const majorGames = [
  new MajorGame(
    "UnnamedTD",
    "A sci-fi themed 3D tower defense game with procedurally generated maps.",
    "2022",
    unnamedTDIcon,
    "/",
    [Genres.Strategy, Genres.TowerDefense],
    [Tech.Unity, Tech.Blender],
    GameStatus.Completed
  ),
  new MajorGame(
    "Desolite Tanks",
    "A cartoon themed 3D arcade game heavily inspired by Battle City by NAM-CO",
    "2022",
    dtIcon,
    "/",
    [Genres.Arcade, Genres.Shooter],
    [Tech.Unity, Tech.Blender],
    GameStatus.Completed
  ),
];

//Minor Games
export const minorGames = [
  new MinorGame(
    "The Skill Tree",
    "A 2D tower defense game where the player branches out to farm for resources to upgrade their skill tree while defending the towers",
    "2022",
    stIcon,
    "/",
    [Genres.Strategy, Genres.TowerDefense],
    [Tech.Unity, Tech.Illustrator],
    GameSubmissionType.SGJam
  ),
  new MinorGame(
    "CC2: An Asset's Graveyard",
    "A project built to mimic Cuboidal Control with better controls but with the integration of AWS",
    "2022",
    cc2Icon,
    "/",
    [Genres.Platformer],
    [Tech.Unity, Tech.AWS],
    GameSubmissionType.School
  ),
  new MinorGame(
    "Cuboidal Control",
    "A simplified version of the popular game 'Getting Over It' by Bennett Foddy",
    "2020",
    ccIcon,
    "/",
    [Genres.Platformer],
    [Tech.Unity],
    GameSubmissionType.GMTK
  ),
  new MinorGame(
    "Vizion",
    "A 3D horror themed maze game with a given ability to temporarily see the way out.",
    "2020",
    vIcon,
    "/",
    [Genres.Puzzle, Genres.Horror],
    [Tech.Unity],
    GameSubmissionType.MiniJam
  ),
  new MinorGame(
    "Memory Looper",
    "A 2D platformer with the ability to record actions and play them back in real time to aid the player in solving puzzles.",
    "2020",
    mlIcon,
    "/",
    [Genres.Puzzle, Genres.Platformer],
    [Tech.Unity],
    GameSubmissionType.MixAndJam
  ),
];

export default majorGames;

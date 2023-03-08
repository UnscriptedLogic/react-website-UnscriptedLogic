import unnamedTDIcon from "../assets/unnamedTDIcon.png";
import dtIcon from "../assets/dtIcon.png";
import ccIcon from "../assets/ccIcon.png";
import stIcon from "../assets/stIcon.png";
import vIcon from "../assets/vIcon.png";
import cc2Icon from "../assets/cc2Icon.png";
import mlIcon from "../assets/mlIcon.png";

import ggjIcon from "../assets/submissiontypes/ggjIcon.png";
import mjIcon from "../assets/submissiontypes/mjIcon.png";
import schoolIcon from "../assets/submissiontypes/schoolIcon.png";
import gameOffIcon from "../assets/submissiontypes/gameOffIcon.png";
import majIcon from "../assets/submissiontypes/majIcon.png";
import gmtkIcon from "../assets/submissiontypes/gmtkIcon.jpg";
import brackeysIcon from "../assets/submissiontypes/brackeysIcon.jpg";

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

export const GameSubmissionType = {
  GMTK: new SubmissionType(
    "Game Maker's ToolKit Game Jam",
    "An annual game jam hosted by the Mark Brown from GMTK with a suprise theme. Game Maker's ToolKit(GMTK) is a YouTube channel dedicated to breaking down game design of existing games",
    gmtkIcon,
    "GMTK",
    "#000000",
    "#ffffff"
  ),
  Brackeys: new SubmissionType(
    "Brackey's Game Jam",
    "A game jam hosted by the Brackey's team with a suprise theme. Brackey's is a YouTube channel that contains Unity tutorials of any topic targetted at any skill level.",
    brackeysIcon,
    "Brackey's",
    "white",
    "black"
  ),
  MiniJam: new SubmissionType(
    "Mini Game Jam",
    "A game jam hosted bi-weekly over at Itch.IO with a pre-established theme and a suprise limitation.",
    mjIcon,
    "Mini Jam",
    "white",
    "black"
  ),
  SGJam: new SubmissionType(
    "Singapore Global Game Jam",
    "An annual game jam hosted by the Global Game Jam team and split into their individual countries. The jam consists of a surprise theme as well as the opportunity to showcase their submissions.",
    ggjIcon,
    "SGG",
    "#ff1f00",
    "#ffffff"
  ),
  GameOff: new SubmissionType(
    "Game Off Game Jam",
    "An annual game jam hosted by GitHub.",
    gameOffIcon,
    "GameOff",
    "white",
    "black"
  ),
  School: new SubmissionType(
    "School Submission",
    "This project was done for a school submission.",
    schoolIcon,
    "School",
    "#afafaf",
    "black"
  ),
  MixAndJam: new SubmissionType(
    "Mix and Game Jam",
    "An annual game jam hosted by Mix and Jam; a YouTube channel dedicated to breaking down game mechanics and recreating them in Unity.",
    majIcon,
    "Mix and Jam",
    "#ff556a",
    "#ffffff"
  ),
};

class Game {
  constructor(name, desc, year, thumbnail, gameLink, genres) {
    this.name = name;
    this.desc = desc;
    this.year = year;
    this.thumbnail = thumbnail;
    this.gameLink = gameLink;
    this.genres = genres;
  }
}

class MinorGame extends Game {
  constructor(name, desc, year, thumbnail, gameLink, genres, submissionTypes) {
    super(name, desc, year, thumbnail, gameLink, genres);
    this.submissionTypes = submissionTypes;
  }
}

class MajorGame extends Game {
  constructor(name, desc, year, thumbnail, gameLink, genres, gameStatus) {
    super(name, desc, year, thumbnail, gameLink, genres);
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
    GameStatus.Completed
  ),
  new MajorGame(
    "Desolite Tanks",
    "A cartoon themed 3D top game arcade game inspired by Battle City by NAM-CO",
    "2022",
    dtIcon,
    "/",
    [Genres.Arcade, Genres.Shooter],
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
    GameSubmissionType.SGJam
  ),
  new MinorGame(
    "CC2: An Asset's Graveyard",
    "A project built to mimic Cuboidal Control with better controls but with the integration of AWS",
    "2022",
    cc2Icon,
    "/",
    [Genres.Platformer],
    GameSubmissionType.School
  ),
  new MinorGame(
    "Cuboidal Control",
    "A simplified version of the popular game 'Getting Over It' by Bennett Foddy",
    "2020",
    ccIcon,
    "/",
    [Genres.Platformer],
    GameSubmissionType.GMTK
  ),
  new MinorGame(
    "Vizion",
    "A 3D horror themed maze game with a given ability to temporarily see the way out.",
    "2020",
    vIcon,
    "/",
    [Genres.Puzzle, Genres.Horror],
    GameSubmissionType.MiniJam
  ),
  new MinorGame(
    "Memory Looper",
    "A 2D platformer with the ability to record actions and play them back in real time to aid the player in solving puzzles.",
    "2020",
    mlIcon,
    "/",
    [Genres.Puzzle, Genres.Platformer],
    GameSubmissionType.MixAndJam
  ),
];

export default majorGames;

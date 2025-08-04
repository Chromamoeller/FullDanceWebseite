import { Dance } from "../models/model.dances.js";
import {Difficulty, Figure} from "../models/model.figures.js";

const rumbaDance = new Dance(2, "Rumba", "Rumba", 104, "4/4");

const rumbaBasicMovement = new Figure(
    1,
    "Basic Movement",
    rumbaDance,
    Difficulty.Beginner,
    "4/4",
    "Straight",
    "Left",
    "Right",
    "Closed",
    "Closed",
    3,
    "Wall",
    ["Ball Flat", "Ball", "Ball Flat"]
);

const sideStep = new Figure(
    2,
    "Side Step",
    rumbaDance,
    Difficulty.Beginner,
    "4/4",
    "Side",
    "Left",
    "Right",
    "Closed",
    "Closed",
    2,
    "Center",
    ["Ball", "Ball Flat"]
);

const cucaracha = new Figure(
    3,
    "Cucaracha",
    rumbaDance,
    Difficulty.Beginner,
    "4/4",
    "Side and Return",
    "Left",
    "Right",
    "Open",
    "Open",
    4,
    "Wall",
    ["Ball", "Ball Flat", "Ball", "Ball Flat"]
);

const fan = new Figure(
    4,
    "Fan",
    rumbaDance,
    Difficulty.Intermediate,
    "4/4",
    "Opening Out",
    "Left",
    "Right",
    "Closed",
    "Fan",
    6,
    "Center",
    ["Ball", "Ball", "Ball Flat", "Ball", "Ball Flat", "Ball Flat"]
);

const alemana = new Figure(
    5,
    "Alemana",
    rumbaDance,
    Difficulty.Intermediate,
    "4/4",
    "Turning",
    "Left",
    "Right",
    "Fan",
    "Closed",
    6,
    "Diagonal Wall",
    ["Ball Flat", "Ball", "Ball", "Ball Flat", "Ball", "Ball Flat"]
);

export const rumbaFigures = [
    rumbaBasicMovement,
    sideStep,
    cucaracha,
    fan,
    alemana
];

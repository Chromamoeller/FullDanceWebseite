import { Dance } from "../models/dances.js";
import {Difficulty, Figure} from "../models/figures.js";

const rumbaDance = new Dance(2, "Rumba", "Rumba", 104, "4/4");

const basicMovementOneToThree = new Figure(
    1,
    "Basic Movement 1 to 3",
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
    ["Ball Flat", "Ball Flat", "Ball Flat"]
);

const basicMovementFourToSix = new Figure(
    2,
    "Basic Movement 4 to 6",
    rumbaDance,
    Difficulty.Beginner,
    "4/4",
    "Side",
    "Right",
    "Left",
    "Closed",
    "Closed",
    3,
    "Center",
    ["Ball Flat", "Ball Flat","Ball Flat"]
);

const underarmTurnToRight = new Figure(
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
    ["Ball Flat", "Ball Flat", "Ball Flat"]
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
    ["Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat"]
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
    ["Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat", "Ball Flat"]
);



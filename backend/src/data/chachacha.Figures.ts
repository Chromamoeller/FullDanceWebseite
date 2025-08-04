import {Difficulty, Figure} from "../models/model.figures.js";
import {Dance} from "../models/model.dances.js";

const chachachaDance = new Dance(2, "Chachacha", "Latein", 120, "4/4");


const basicMovementOneToThree = new Figure(
    1,
    "Basic Movement 1 to 3",
    chachachaDance,
    Difficulty.Beginner,
    "4/4",
    "Front to Wall",
    "Left",
    "Right",
    "Closed",
    "Open",
    5,
    "Center",
    ["Ball Flat", "Ball", "Ball", "Ball Flat", "Ball Flat"]
);

const basicMovementFourToSix = new Figure(
    2,
    "Basic Movement 4 to 6",
    chachachaDance,
    Difficulty.Beginner,
    "4/4",
    "Front to Wall",
    "Left",
    "Right",
    "Closed",
    "Open",
    5,
    "Center",
    ["Ball Flat", "Ball", "Ball", "Ball Flat", "Ball Flat"]
)
const underarmTurnToRight = new Figure(
    3,
    "Damensolo",
    chachachaDance,
    Difficulty.Beginner,
    "4/4",
    "Front to Wall",
    "Right",
    "Left",
    "Closed",
    "Closed",
    5,
    "Center",
    ["Ball Flat", "Ball", "Ball Flat", "Ball Flat"]
)
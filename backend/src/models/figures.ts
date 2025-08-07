import { Dance } from "./dances.js";
export enum Difficulty {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export class Figure {
  private id: number;
  name: string;
  dance: Dance;
  difficulty: Difficulty;
  timing: string;
  direction: string;
  neededFoot: string;
  freeFootAfterFinish: string;
  startDancePosition: string;
  endDancePosition: string;
  stepCount: number;
  alignment: string;
  footwork: string[];

  constructor(
    id: number,
    name: string,
    dance: Dance,
    difficulty: Difficulty,
    timing: string,
    direction: string,
    neededFoot: string,
    freeFootAfterFinish: string,
    startDancePosition: string,
    endDancePosition: string,
    stepCount: number,
    alignment: string,
    footwork: string[]
  ) {
    this.id = id;
    this.name = name;
    this.dance = dance;
    this.difficulty = difficulty;
    this.timing = timing;
    this.direction = direction;
    this.neededFoot = neededFoot;
    this.freeFootAfterFinish = freeFootAfterFinish;
    this.startDancePosition = startDancePosition;
    this.endDancePosition = endDancePosition;
    this.stepCount = stepCount;
    this.alignment = alignment;
    this.footwork = footwork;
  }
}

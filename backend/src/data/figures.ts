import { Dance } from "./dances";
class Figure {
  id: number;
  name: string;
  dance: Dance;
  difficulty: string;
  timing: string;
  direction: string;
  neededFoot: string;
  freeFootAferFinish: string;
  startDancePosition: string;
  endDancePosition: string;
  stepCount: number;
  aligment: string;
  footwork: string[];
  //   precedingFigures: number[];
  //   followingFigures: number[];

  constructor(
    id: number,
    name: string,
    dance: Dance,
    difficulty: string,
    timing: string,
    direction: string,
    neededFoot: string,
    freeFootAferFinish: string,
    startDancePosition: string,
    endDancePosition: string,
    stepCount: number,
    aligment: string,
    footwork: string[]
    // precedingFigures: number[],
    // followingFigures: number[]
  ) {
    this.id = id;
    this.name = name;
    this.dance = dance;
    this.difficulty = difficulty;
    this.timing = timing;
    this.direction = direction;
    this.neededFoot = neededFoot;
    this.freeFootAferFinish = freeFootAferFinish;
    this.startDancePosition = startDancePosition;
    this.endDancePosition = endDancePosition;
    this.stepCount = stepCount;
    this.aligment = aligment;
    this.footwork = footwork;
    // this.precedingFigures = precedingFigures;
    // this.followingFigures = followingFigures;
  }
}

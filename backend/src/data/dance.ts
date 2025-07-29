export class Dance {
  id: number;
  name: string; // z. B. "Cha Cha", "Langsamer Walzer"
  style: string; // z. B. "Standard", "Latein", "Show", "Discofox"
  tempo: number; // z. B. "Langsam", "Mittel", "Schnell"
  timeSignature: string;

  constructor(
    id: number,
    name: string,
    style: string,
    tempo: number,
    timeSignature: string
  ) {
    this.id = id;
    this.name = name;
    this.style = style;
    this.tempo = tempo;
    this.timeSignature = timeSignature;
  }
}

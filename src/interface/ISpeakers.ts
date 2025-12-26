type SpeakerType = "normal" | "panel" | "keynote" | "chief";
export interface IspeakerCard {
  id:string;
  coverImage:string;
  name:string;
  occupation:string;
  Linkedin:string;
  type: SpeakerType[];
}

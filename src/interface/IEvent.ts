export type TagType = "All" | "Workshop" | "Meetup" | "Competition";
export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string; // date should be in ISO format (YYYY-MM-DD)
  startTime?: string;
  endTime?: string;
  venue?: string;
  locationUrl?: string;
  coverImage?: string;
  tags?:  TagType[];
  status?: "upcoming" | "past";
}

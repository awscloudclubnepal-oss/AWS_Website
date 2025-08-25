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
  tags?: string[];
  status?: "upcoming" | "past";
}

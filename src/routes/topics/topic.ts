export interface Topic {
  id: string;
  name: string;
  content: string;
  status: "active" | "draft" | "archived";
  created: Date;
}
export type ReadingCategory =
  | "uni_provided_core"
  | "uni_provided_additional"
  | "wider_from_my_responses";

export type Reading = {
  id: string;
  week: number;
  week_title: string;
  category: ReadingCategory;
  section: string;
  listed_in: string;
  reading_type: string;
  title: string;
  authors: string[];
  year: number | null;
  source: string;
  publication_date_raw: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  doi_url: string;
  url: string;
  citation: string;
  notes: string;
  source_file: string;
};

export type ReadingSection = {
  category: ReadingCategory;
  title: string;
  readings: Reading[];
};

export type ReadingWeek = {
  week: number;
  title: string;
  sections: ReadingSection[];
};

export type ReadingListData = {
  metadata: Record<string, unknown>;
  weeks: ReadingWeek[];
};

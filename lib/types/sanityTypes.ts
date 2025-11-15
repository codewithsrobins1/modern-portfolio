export type About = {
  title: string;
  paragraphOne: string;
  paragraphTwo: string;
};

export type WorkExperience = {
  _id: string;
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
};

export type Project = {
  _id: string;
  name: string;
  tech: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
};

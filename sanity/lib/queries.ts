export const ABOUT_QUERY = `*[_type == "about"][0]{
  title,
  paragraphOne,
  paragraphTwo
}`;

export const WORK_EXPERIENCE_QUERY = `*[_type == "workExperience"] | order(sortOrder asc){
  _id,
  company,
  title,
  startDate,
  endDate,
  isCurrent,
  description
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(sortOrder asc){
  _id,
  name,
  tech,
  liveUrl,
  githubUrl,
  "imageUrl": image.asset->url
}`;

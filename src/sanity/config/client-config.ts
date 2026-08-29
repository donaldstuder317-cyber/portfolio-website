const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2023-06-19",
  token: process.env.SNITY_API_KEY as string,
  useCdn: false,
};

export default config;

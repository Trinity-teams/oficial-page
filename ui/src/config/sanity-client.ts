import SanityClient from "next-sanity-client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "";

export const sanityClient = new SanityClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === "production",
});

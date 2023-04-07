import SanityClient from "next-sanity-client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = new SanityClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",
  useCdn: process.env.NODE_ENV === "production",
});

// const client = createClient({
//   projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
//   dataset: process.env.SANITY_STUDIO_DATASET || "",
//   useCdn: process.env.NODE_ENV === "production",
// });

const s = sanityClient as unknown as any;

const imageBuilder = imageUrlBuilder(s);

export const urlFor = (source: any) => {
  return imageBuilder.image(source);
};

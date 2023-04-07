"use client";
import { createClient } from "@sanity/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: process.env.NODE_ENV === "production",
});

export const SanityImage: React.FC<{
  image: any;
  alt?: string;
  width?: number;
  height?: number;
}> = ({ image, alt = "", width = 1000, height = 1000 }) => {
  const props = useNextSanityImage(client, image) as any;
  return (
    <Image {...props} alt={alt || "image.png"} width={width} height={height} />
  );
};

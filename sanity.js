import {
  createImageUrlBuilder,
  createClient,
  createCurrentUserHook,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
  token:
    "sksxote1Sx0b5S4FBumHm8fa4K3tpvHqRpMFyplAUjbqFVexbfa0FWDMqTYjO1cHtp4IIkeibkLyJ4iGN1oyUPEkObhBl2FnllksGKx1SRMnX1OBge55ofRYbfXETX0MjBdG22tzY7j5fOjGmubLsrvP84vhBP42atA8lKkAHIUZ43tfs0nL",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);

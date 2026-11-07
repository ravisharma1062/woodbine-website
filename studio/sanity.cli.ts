import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Gives the admin screen a stable address: https://<studioHost>.sanity.studio
  studioHost: process.env.SANITY_STUDIO_HOST,
  deployment: { appId: "fbrbmyeqm0mxc4zreild6ed1" },
});

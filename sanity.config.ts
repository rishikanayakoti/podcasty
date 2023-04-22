import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "podcasty",

  projectId: "k9iiqkx5",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  basePath: "/admin",

  schema: {
    types: schemas,
  },
});

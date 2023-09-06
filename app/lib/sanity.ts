import { createClient } from "next-sanity";

const projectId = "4vngm2vt";
const dataset = "production";
const apiVersion = "2023-09-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

import { ProgramConfig } from "@core/scripts/makeProgram/@types";

const programConfig: ProgramConfig = {
  pagesDir: "./src/pages",
  templateDir: "./src/@core/pages",
  programs: [
    {
      name: ["study", "segment-label"],
      type: "LIST",
    },
  ],
};

export default programConfig;

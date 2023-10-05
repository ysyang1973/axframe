import { ProgramConfig } from "@core/scripts/makeProgram/@types";

const programConfig: ProgramConfig = {
  pagesDir: "./src/pages",
  templateDir: "./src/@core/pages",
  programs: [
    {
      name: ["DEMO", "userList"],
      type: "LIST",
    },
    {
      name: ["DEMO", "userForm"],
      type: "LIST_WITH_FORM",
    },
  ],
};

export default programConfig;

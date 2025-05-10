import type { PlopGeneratorConfig } from "node-plop";
import type { ActionType, NodePlopAPI } from "plop";


const wd = ".";
export default function (plop: NodePlopAPI) {
  const plopStorybookAction: ActionType = {
    type: "add",
    path: `${wd}/src/ui/{{kebabCase targetDestinationFileName}}/{{kebabCase targetDestinationFileName}}.stories.tsx`,
    skipIfExists: false,
    // templateFile: "templates/component.stories.tsx.hbs",
    templateFile: "templates/component.stories.tsx.hbs",
  };
  const actions: ActionType[] = [plopStorybookAction];
  const config: Partial<PlopGeneratorConfig> = {
    description: "Generate a new React component with TypeScript",
    prompts: [
      {
        type: "input",
        name: "targetDestinationFileName",

        message: "component name please",
      },
    ],
    actions: (data) => {
      console.debug("Plop generated data =>", data);
      return actions;
    },
  };
  plop.setGenerator("component", config);
}

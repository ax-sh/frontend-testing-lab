import type { PlopGeneratorConfig } from "node-plop";
import type { ActionType, NodePlopAPI } from "plop";

const wd = ".";
export default function (plop: NodePlopAPI) {
  const plopStorybookAction: ActionType = {
    type: "add",
    path: `${wd}/src/ui/{{kebabCase targetDestinationFileName}}/{{kebabCase targetDestinationFileName}}.stories.tsx`,
    skipIfExists: true,
    // templateFile: "templates/component.stories.tsx.ejs",
    templateFile: "templates/component.stories.tsx.ejs",
  };

  const plopComponentTestAction: ActionType = {
    type: "add",
    path: `${wd}/src/ui/{{kebabCase targetDestinationFileName}}/{{kebabCase targetDestinationFileName}}.test.tsx`,
    skipIfExists: true,
    // templateFile: "templates/component.stories.tsx.ejs",
    templateFile: "templates/component.test.tsx.ejs",
  };
  const plopComponentAction: ActionType = {
    type: "add",
    path: `${wd}/src/ui/{{kebabCase targetDestinationFileName}}/{{kebabCase targetDestinationFileName}}.tsx`,
    skipIfExists: true,
    // templateFile: "templates/component.stories.tsx.ejs",
    templateFile: "templates/component.tsx.ejs",
  };
  const actions: ActionType[] = [
    plopStorybookAction,
    plopComponentTestAction,
    plopComponentAction,
  ];
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

import type { Preview } from "@storybook/react";
import "uno.css";
import "virtual:unocss-devtools";
import { initialize } from "msw-storybook-addon";

initialize({
	// onUnhandledRequest: "bypass",
	onUnhandledRequest: ({ url, method }) => {
		const pathname = new URL(url).pathname;
		if (pathname.startsWith("/my-specific-api-path")) {
			console.error(`Unhandled ${method} request to ${url}.

        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `);
		}
	},
});

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
	},
};

export default preview;

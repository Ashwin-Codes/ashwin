import inquirer from "inquirer";

// Option Handlers
import downloadResume from "./downloadResume.js";
import quit from "./quit.js";
import openUrl from "./openUrl.js";

export default async function index() {
	const option = await inquirer.prompt({
		name: "options",
		type: "list",
		choices: ["Download Resume", "Quit"],
	});

	if (option.options === "Download Resume") {
		downloadResume();
	}

	if (option.options === "Quit") {
		quit();
	}
}

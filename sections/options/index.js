import inquirer from "inquirer";

// Option Handlers
import downloadResume from "./downloadResume.js";

export default async function showOptions() {
	const option = await inquirer.prompt({
		name: "options",
		type: "list",
		choices: ["Download Resume"],
	});

	if (option.options === "Download Resume") {
		downloadResume();
	}
}

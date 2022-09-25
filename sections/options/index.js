import inquirer from "inquirer";
import chalk from "chalk";

// Option Handlers
import downloadResume from "./downloadResume.js";
import quit from "./quit.js";
import socials from "../socials/socials.js";
import contact from "../contact/contact.js";
import projects from "../projects/projects.js";

// Options
const choices = {
	resume: "Download Resume",
	socials: "My Socials",
	projects: "Live Project Links",
	contact: "Contact Me",
	quit: "Quit",
};

function chalkTheme(theme) {
	if (theme) {
		for (const key in choices) {
			choices[key] = theme(choices[key]);
		}
	}
}

chalkTheme(chalk.white.bold);

export default async function index() {
	const option = await inquirer.prompt({
		name: "Menu",
		type: "list",
		message: "Pick an option :",
		prefix: " ",
		choices: choices.map((value, key) => {
			return value;
		}),
	});

	const choice = option.Menu;
	if (choice === choices.resume) {
		downloadResume();
	}

	if (choice === choices.socials) {
		socials();
	}

	if (choice === choices.projects) {
		projects();
	}

	if (choice === choices.contact) {
		contact();
	}

	if (choice === choices.quit) {
		quit();
	}
}

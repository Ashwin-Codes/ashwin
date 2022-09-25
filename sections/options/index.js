import inquirer from "inquirer";
import chalk from "chalk";

// Option Handlers
import downloadResume from "./downloadResume.js";
import quit from "./quit.js";
import socials from "../socials/socials.js";
import contact from "../contact/contact.js";

// Options
const choices = {
	resume: "Download Resume",
	socials: "My Socials",
	contact: "Contact Me",
	quit: "Quit",
};

export default async function index() {
	const option = await inquirer.prompt({
		name: "Menu",
		type: "list",
		question: chalk.bold.yellow,
		answer: chalk.bold,
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

	if (choice === choices.contact) {
		contact();
	}

	if (choice === choices.quit) {
		quit();
	}
}

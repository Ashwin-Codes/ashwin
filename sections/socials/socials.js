import inquirer from "inquirer";
import chalk from "chalk";

// Option Handlers
import options from "../options/index.js";
import quit from "../options/quit.js";
import openUrl from "../options/openUrl.js";

// Options

const choices = {
	github: "Github",
	linkedIn: "Linkedin",
	medium: "Medium",
	back: "Go Back",
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

export default async function socials() {
	const option = await inquirer.prompt({
		name: "My Socials",
		type: "list",
		message: "Pick a social :",
		prefix: " ",
		choices: choices.map((value, key) => {
			return value;
		}),
	});

	const choice = option["My Socials"];

	if (choice === choices.github) {
		openUrl("github");
		socials();
	}
	if (choice === choices.linkedIn) {
		openUrl("linkedin");
		socials();
	}
	if (choice === choices.medium) {
		openUrl("medium");
		socials();
	}
	if (choice === choices.back) {
		options();
	}
	if (choice === choices.quit) {
		quit();
	}
}

import inquirer from "inquirer";
import chalk from "chalk";

// Option Handlers
import options from "../options/index.js";
import quit from "../options/quit.js";
import openUrl from "../options/openUrl.js";

// Options

const choices = {
	updrop: "Updrop",
	hexhub: "Hexhub",
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

export default async function projects() {
	const option = await inquirer.prompt({
		name: "Live Projects",
		type: "list",
		message: "Pick a live project :",
		prefix: " ",
		choices: choices.map((value, key) => {
			return value;
		}),
	});

	const choice = option["Live Projects"];

	if (choice === choices.updrop) {
		openUrl("updrop");
		projects();
	}
	if (choice === choices.hexhub) {
		openUrl("hexhub");
		projects();
	}
	if (choice === choices.back) {
		options();
	}
	if (choice === choices.quit) {
		quit();
	}
}

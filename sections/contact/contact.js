import inquirer from "inquirer";
import clipboardy from "clipboardy";
import fetch from "node-fetch";
import chalk from "chalk";
import { createSpinner } from "nanospinner";

// Option Handlers
import quit from "../options/quit.js";
import openUrl from "../options/openUrl.js";
import options from "../options/index.js";

// Choices
const choices = {
	message: "Message Me",
	mail: "Mail Me",
	copyEmail: "Copy Email To Clippoard",
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

export default async function contact() {
	const option = await inquirer.prompt({
		name: "Contact",
		type: "list",
		message: "Pick a method of communication :",
		prefix: " ",
		choices: choices.map((value, key) => {
			return value;
		}),
	});

	const choice = option.Contact;

	if (choice === choices.mail) {
		openUrl("mail");
		contact();
	}

	if (choice === choices.copyEmail) {
		const spinner = createSpinner("Copying Email").start();
		clipboardy.writeSync("contact@ashwincodes.com");
		spinner.success({ text: "Email Copied" });
		contact();
	}

	if (choice === choices.message) {
		await messageHandler();
		setTimeout(() => {
			options();
		}, 1500);
	}

	if (choice === choices.back) {
		options();
	}

	if (choice === choices.quit) {
		quit();
	}
}

async function messageHandler() {
	const inputs = await inquirer.prompt([
		{
			name: "Message",
			message: "Enter Your Message",
			type: "input",
			prefix: " ",

			transformer: function (line) {
				return chalk.white.bold(line);
			},
		},
		{
			name: "Email",
			message: "Enter Your Email",
			type: "input",
			prefix: " ",

			transformer: function (line) {
				return chalk.white.bold(line);
			},
		},
	]);

	const spinner = createSpinner("Sending Message..").start();

	const res = await fetch("https://ashwincodes.com/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: inputs.Email,
			message: inputs.Message,
		}),
	});

	if (!res.ok) {
		spinner.error({ text: "Message Sent Failed" });
	}

	spinner.success({ text: "Message Sent" });
}

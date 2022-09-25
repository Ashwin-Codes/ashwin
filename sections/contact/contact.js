import inquirer from "inquirer";
import clipboardy from "clipboardy";
import fetch from "node-fetch";
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

export default async function contact() {
	const option = await inquirer.prompt({
		name: "Contact",
		type: "list",
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
		},
		{
			name: "Email",
			message: "Enter Your Email",
			type: "input",
		},
	]);

	const spinner = createSpinner("Sending Mail !").start();

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
		spinner.error({ text: "Mail Sent Failed" });
	}

	spinner.success({ text: "Mail Sent" });
}

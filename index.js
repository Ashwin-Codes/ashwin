#!/usr/bin/env node
import options from "./sections/options/index.js";
import header from "./sections/header/index.js";

export default async function main() {
	const consoleWidth = process.stdout.columns;
	console.clear();
	consoleWidth <= 42 ? space(0) : space(2);
	await header();
	consoleWidth <= 42 ? space(0) : space(3);
	await options();
}

main();

function space(numOfSpaces) {
	const spaces = [];
	for (let i = 0; i < numOfSpaces; i++) {
		spaces.push("\n");
	}

	console.log(spaces.join(""));
}

// Adding Map feature to Objects
Object.prototype.map = function (cb) {
	const objMap = [];
	const obj = this;
	for (let key in obj) {
		if (this.hasOwnProperty(key)) {
			objMap.push(cb(obj[key], key));
		}
	}
	return objMap;
};

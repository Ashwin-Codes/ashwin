#!/usr/bin/env node
import options from "./sections/options/index.js";
import header from "./sections/header/index.js";

async function main() {
	console.clear();
	space(2);
	await header();
	space(3);
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

// Adding Map to Objects

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

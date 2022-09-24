import fs from "fs";
import https from "https";
import { createSpinner } from "nanospinner";

const url = "https://ashwincodes.com/resume.txt";

export default async function downloadResume() {
	const spinner = createSpinner("Downloading Resume").start();

	https.get(url, (res) => {
		// Image will be stored at this path
		const path = `${process.cwd()}/resume.txt`;
		const filePath = fs.createWriteStream(path);
		res.pipe(filePath);
		filePath.on("finish", () => {
			filePath.close();
			spinner.success({ text: "Resume Downloaded" });
		});
	});

	setTimeout(() => {}, 3000);
}

import figlet from "figlet";
import gradient from "gradient-string";

export default async function index() {
	const title = createTitle();
	console.log(title);
}

function createTitle() {
	const consoleWidth = process.stdout.columns;
	let font = "Big";

	// Font as per width
	if (consoleWidth >= 180) font = "NScript";
	if (consoleWidth < 180 && consoleWidth >= 167) font = "3D Diagonal";
	if (consoleWidth < 167 && consoleWidth >= 123) font = "Bloody";
	if (consoleWidth < 123 && consoleWidth >= 71) font = "Thin";
	if (consoleWidth < 72 && consoleWidth >= 64) font = "Pagga";
	if (consoleWidth < 64 && consoleWidth >= 43) font = "Calvin S";
	if (consoleWidth < 43 && consoleWidth >= 35) font = "Italic";
	if (consoleWidth < 35 && consoleWidth >= 31) font = "Short";

	// Return normal text if width is too less
	if (consoleWidth < 31) return gradient.pastel.multiline("Ashwin Bhargava");

	const asci = figlet.textSync("Ashwin Bhargava", { font: font });
	const gradientAsci = gradient.pastel.multiline(asci);
	return gradientAsci;
}

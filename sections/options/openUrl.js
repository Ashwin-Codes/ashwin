import open from "open";

export default function openUrl(siteName) {
	siteName = siteName.toLowerCase();

	if (siteName === "mail") {
		open("mailto:contact@ashwincodes.com");
	}

	if (siteName === "updrop") {
		open("https://updrop.ashwincodes.com");
	}

	if (siteName === "hexhub") {
		open("https://hexhub.ashwincodes.com");
	}

	if (siteName === "linkedin") {
		open("https://www.linkedin.com/in/ashwin-codes/");
	}

	if (siteName === "github") {
		open("https://github.com/ashwin-codes");
	}

	if (siteName === "medium") {
		open("https://medium.com/@AshwinCodes");
	}
}

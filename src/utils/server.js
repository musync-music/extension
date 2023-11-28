export const LOCAL_URL = "http://localhost:3000";
export const PROD_URL = "https://musyncmusic.vercel.app";

export function getURL(bypass) {
	let env = "";

	if (bypass) return PROD_URL;

	chrome.management.getSelf(data => {
		env = data.installType;
	});

	if (env === "development") return LOCAL_URL;
	return PROD_URL;
}

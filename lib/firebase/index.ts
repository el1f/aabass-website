/* eslint-disable no-console */
import admin from "firebase-admin";

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert({
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
				privateKey: process.env.FIREBASE_PRIVATE_KEY,
				projectId: process.env.FIREBASE_PROJECT_ID,
			}),
		});

		console.log("Firebase initialized successfully.");
	} catch (error) {
		if (error instanceof Error) {
			if (!/already exists/u.test(error.message))
				console.error("Firebase admin initialization error", error.stack);
		} else console.error("Unknown error", error);
	}
}
export default admin;

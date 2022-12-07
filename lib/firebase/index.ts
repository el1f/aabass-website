/* eslint-disable no-console */
import admin from "firebase-admin";

import serviceAccount from "./serviceAccountKey.json";

// Remember to download the serviceAccountKey.json file from your
// firebase console or dashboard and place it in the lib/firebase folder.

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert({
				clientEmail: serviceAccount.client_email,
				privateKey: serviceAccount.private_key,
				projectId: serviceAccount.project_id,
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

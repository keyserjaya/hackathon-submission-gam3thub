import { google } from "googleapis";
import { readFileSync } from "fs";
import path from "path";

const sheetsClient = () => {
  // Load credentials JSON
  const keyFile = path.resolve(process.cwd(), "google-credentials.json"); // Ensure the path matches your service account key
  const credentials = JSON.parse(readFileSync(keyFile, "utf-8"));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

export const appendToSheet = async (spreadsheetId, range, values) => {
  const sheets = sheetsClient();

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED", // Or "RAW" for unformatted input
      resource: {
        values: [values], // Values must be in array format: [[value1, value2]]
      },
    });

    return response;
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw error;
  }
};

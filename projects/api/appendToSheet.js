import { appendToSheet } from "/utils/googlesheets";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { range, name, walletAddress, url, verificationLink } = req.body;

  if (!name || !url) {
    return res.status(400).json({ error: "Name and URL are required" });
  }

  try {
    const spreadsheetId = "1X-TtXtLiJMBb0MQRI4Z3bFgSqDic8yDRNDz7JyuDv7A";
    //const range = "Follow_on_X!A1"; // Change to your desired range

    const result = await appendToSheet(spreadsheetId, range, [name, walletAddress, url, verificationLink]);

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: "Failed to append data to Google Sheet" });
  }
}

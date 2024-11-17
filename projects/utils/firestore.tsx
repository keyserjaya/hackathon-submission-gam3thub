import { collection, getDocs, getDoc, doc, query, where, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

var accountId="";
var docIdByUsername="";

export async function GetUserDataByUsername(username: string) {
    try {
        if (docIdByUsername)
        {
            return await GetUserData(docIdByUsername);
        }
        
        if (!accountId)
        {
            accountId = localStorage.getItem('randomId') as string;
            if (!accountId) {
                accountId = generateRandomId();
                localStorage.setItem('randomId', accountId);
            }
        }

        if (!username) 
        {
            return await GetUserData(accountId);
        }

        const colRef = collection(db, "Users");
        const userQuery = query(colRef, where("userId", "==", username));
        const querySnapshot = await getDocs(userQuery);

        // Check if the document exists and process the results
        if (!querySnapshot.empty) {
            const results = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("User(s) found:", results);
            docIdByUsername = results[0].id;
            return await GetUserData(docIdByUsername);
        } 
        else 
        {
            console.log("No user found with the specified username.");
            return await GetUserData(accountId);
        }
    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
}

export async function GetUserData(docId: string) {
    try {
        const userDocRef = doc(db, "Users", docId);
        const docData = await getDoc(userDocRef);
        return docData.data();
    } catch (error) {
        console.error("Error fetching Firestore data:", error);
    }
}

export async function UpdateQuest(questsData: object[]) {
    await UpdateDoc({
        "quests": questsData
    });
}

export async function UpdateDoc(dataToUpdate: object) {
    const docId = docIdByUsername ? docIdByUsername : accountId;
    if (!docId) 
    {
        alert("docId not found!");
        return;
    }

    const userDocRef = doc(db, "Users", docId);
    await setDoc(userDocRef, dataToUpdate, { merge: true });
}

const generateRandomId = () => {
    // Example: Use UUID library or create a simple random string
    return Math.random().toString(36).substring(2, 9); // Generates a random alphanumeric string
};
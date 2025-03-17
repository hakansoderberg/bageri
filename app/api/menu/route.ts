import { NextResponse } from "next/server";

const SHEET_ID = "1SE3I8BX7Jqd6mbu5t8FfxahGqbY5dPqvUZUReonvhKU";
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

export const GET = async () => {
    try {
        const range = "B2:B6"; // Ange det område du vill hämta från Google Sheets
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Could not fetch from Google Sheets");
        }

        const data: SheetResponse = await res.json();

        // Bearbeta data till en lista med strängar (du kan formatera eller ändra detta enligt behov)
        const menuItems = data.values.map((item) => item[0]);
        console.log(menuItems);
        // Returnera den färdiga listan till klienten
        return NextResponse.json({ menuItems });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Fel vid hämtning av meny" }, { status: 500 });
    }
};

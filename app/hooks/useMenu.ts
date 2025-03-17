import { useState, useEffect } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch("/api/menu");
                if (!res.ok) throw new Error("Kunde inte hämta menyn");
                const data: { menuItems: string[] } = await res.json();
                if (data.menuItems) {
                    setMenu(data.menuItems);
                } else {
                    setError("Menyn är tom");
                }
            } catch (error) {
                setError(error instanceof Error ? error.message : "Fel vid hämtning av data");
            }
        };

        fetchMenu();
    }, []);

    return { menu, error };
};

export default useMenu;

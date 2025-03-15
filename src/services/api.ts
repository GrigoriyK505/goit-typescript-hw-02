import axios from "axios";

const API_KEY = "Cy60DZ_kpQ40CAK8Q4llK7DHMqVh0M3xoO9j97QXuJQ";
const API_URL = "https://api.unsplash.com/search/photos"

const fetchRequest = async (query: string, page: number): Promise<SelectImage[]> => {
    if (!query.trim()) {
        return [];
    }

    try {
        const response = await axios.get<SelectResponse>(API_URL, {
            params: {
                query: query,
                client_id: API_KEY,
                per_page: 16,
                page,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error(
            "Error fetching images",
            error instanceof Error ? error.message : "Unknown error"
        );
        throw new Error("Failed to fetch pictires");
    }
};
export default fetchRequest;
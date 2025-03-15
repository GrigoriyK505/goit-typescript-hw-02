interface SelectImage {
    id: string;
    alt_description : string;
    urls: {
        regular: string;
    }
};

interface SelectResponse {
    results: SelectImage[];
}
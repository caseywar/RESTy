export const fetchApi = async ({ url, method, body }) => {
    if (method === 'GET') {
        const res = await fetch(url);
        const results = await res.json();
        return results;
    } if (
        method === 'POST' || method === 'PUT' || method === 'DELETE'
    ) {
        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'appiication/json',
            },
            body,
        });
        const json = await res.json();
        return json;
    }
}
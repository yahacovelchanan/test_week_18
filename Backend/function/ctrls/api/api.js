const API_URL = "http://localhost:3006";


export async function getData() {
    try {
        const res = await fetch(API_URL + "/api/movie", {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            body: JSON.stringify({ id })
            
        })
        const json = await res.json();
        return json;
    } catch (err) {

    }

}
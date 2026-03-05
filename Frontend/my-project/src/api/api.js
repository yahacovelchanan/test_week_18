const API_URL = "http://localhost:3006";


export async function getData() {
    try{
        const res=await fetch(API_URL+"/api/movie",{
            method:"GET",
            headers:{"Content-Type":"Application/Json"}
        })
        const data =await res.json()
        return data
    }catch(error){console.log(error);
    }
}



type users = {
    id:number,
    names : string,
    email : string
}

type Product ={
    id:number,
    title:string,
    brandname:string
}

async function getUser():Promise<users []>{
    const data = await fetch ("api/user")
    return data.json()
} 
// const user1 = await getUser()
// user1.


async function get<T>(endpoint:string) : Promise<T>{
   const data = await fetch (endpoint)
    return data.json()
}

const products = await get<Product[]>("/api/product");
products[0]
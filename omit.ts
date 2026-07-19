type user ={
    id:number,
    name:string,
    email:string
}

const user1 : user []=[]

let lastid : number = 0
 function adduser (name:string,email:string): user{
    const users : user={
        id:++lastid,
        name,
        email
    }
    user1.push(users)
    return users
 }

// use omit 
  function adduser2 (user : Omit<user,"id">): user{
    const users1 : user={
        ...user,
        id:++lastid,
        
    }
    user1.push(users1)
    return users1
 }
 adduser2({name:"sagot",email:"hfdakshf@gmail.com"})
 console.log(user1)
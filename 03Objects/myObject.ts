const User = {
    name: "Pankaj",
    email: "pankaj@eg.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
createUser({name: "Pankaj", isPaid: false})




function createCourse(): {name: string, isPaid: boolean} {
    return {name: "pankaj",isPaid: false}
}


//type aliases
type User ={
    name: string;
    email: string;
    isActive: boolean
}
function createUser1(user: User){
    return {
        name: "",
        email: "",
        isActive: true
    }
}
createUser1({name: "", email: "",isActive: true})



export{}
type User ={
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetail?: number
}
let myUser: User ={
    _id: "123",
    name: "h",
    email: "p@eg.com",
    isActive: false,
}
myUser.email = "p@gmail.com"
// myUser._id= "asa"

function createUser(u: User){}
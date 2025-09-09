let score: number | string = 33

score = 44
score = "55"


type Users = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let pankaj: Users | Admin ={name: "Pankaj", id: 334}
pankaj = {username: "pan", id: 334}

getDbId(3)
getDbId("3")
function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
    // id.toLowerCase()
    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}

//array

//error
// const data2: number[] | string[] = [1, 2, 3, "4"]

const data: (number | string)[] = [1, 2, 3, "4"]

let pi: 3.14 =3.14

let seatAllotment: "aisle" | "middle" | "window"

// --> error
// seatAllotment = "crew"
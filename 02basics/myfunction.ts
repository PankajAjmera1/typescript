function addTwo(num: number): number{
    // num.toUpperCase();
    return num + 2
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

//arrow
let loginUser = (name: string, email: string, isPaid: boolean = false) =>{}



function getValue(myValue: number) : boolean | string {
    if(myValue > 5)
    {
        return true;
    }return "ok"
}

const getHello = (s: string): string => {
    return "good";
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return`hero is ${hero} `

})

function consoleError(errMsg: string): void{
    console.log(errMsg);
    
}

//recomended
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}

addTwo(5);
loginUser("hey","hW@gmail.dev")


export{}


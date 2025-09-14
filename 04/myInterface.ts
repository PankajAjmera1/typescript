interface  User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    startTrail: ( ) => string,

    startTrail2(): string,
    getCoupon(couponname: string, value: number): number
}
//reopening
interface User {
    gihubToken: string
}

// inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"

}

const pankaj: User = { 
        dbId: 22,
        email: "p@pankaj.com",
        gihubToken: "github",
        userId: 123,
        startTrail: () => {
            return "Trail Started"
        },
        startTrail2: () => {
            return "Trail Started2"
        },
        getCoupon: (name: "Pankaj10", off: 10) =>{
            return 10;
        }


    }
pankaj.email = "p@p.com"


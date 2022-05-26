// way1)

const logDetails = (uid: string|number, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// parameter로 객체가 들어올 수 있다.
const greet = (user: {name: string, uid: string|number}) => {
    console.log(`${user.name}say hello`);
}

// way2)
type StringOrNum = string | number
type objWithName = {name:string, uid: StringOrNum}

const logDetailsB = (uid: StringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetB = (user: objWithName) => {
    console.log(`${user.name}say hello`);
}
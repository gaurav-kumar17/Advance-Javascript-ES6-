export default function user()
{
    // return "Hello User";
    console.log("Hello user");
}

export function userother()
{
    return "Hello otheruser";
}

export let uservar="Hello ji kaise ho saare";

export class Userclass{

    test()
    {
        console.log("user class test function");
    }
}


class Userotherclass{

    test()
    {
        console.log("user otherclass test function");
    }
}
export let uoc1=new Userotherclass;
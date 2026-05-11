import { UserNameInvalid } from "../errors/UserNameInvalid.js"

export class UserName {


    constructor(
        readonly value:string
    ){
        this.isValid()
    }


    private isValid(){
        if(this.value.trim().length < 5) throw new UserNameInvalid()
    }


}
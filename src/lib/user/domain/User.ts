import { UserId , UserName , UserEmail, UserCreatedAt, UserPassword } from "./value-objects/index.js"

export class User {

  constructor(
    public id: UserId,
    public name: UserName,
    public email: UserEmail,
    public password:UserPassword,
    public createdAt: UserCreatedAt
  ) {}


  toPrimitives() {

    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      createdAt: this.createdAt.value
    };

  }

}
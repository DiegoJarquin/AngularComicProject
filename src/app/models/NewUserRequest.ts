export class NewUserRequest {
  name: string;
  username: string;
  pass: string;
  birth: any;
  sex: string;
  constructor(name: string, username: string, pass: string, birth: any, sex: string) {
    this.name = name;
    this.username = username;
    this.pass = pass;
    this.birth = birth;
    this.sex = sex;

  }
}

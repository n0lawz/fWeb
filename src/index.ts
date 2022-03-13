import { User } from "./models/Users";

const user = new User({name: 'myname', age: 20});

console.log(user.get('name'));
console.log(user.get('age'));

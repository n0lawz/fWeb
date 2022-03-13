import { User } from "./models/Users";

const user = new User({name: 'myname', age: 20});

user.set({name: 'new'});

console.log(user.get('name'));
console.log(user.get('age'));

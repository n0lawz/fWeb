import { User } from "./models/Users";

const user = new User({ name: 'new record', age: 0});

console.log(user.get('name'));


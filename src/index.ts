import { User } from "./models/Users";

const user = new User({ id: 1, name: 'newer name', age: 0});

user.on('save', () => {
    console.log(user);
});

user.save();




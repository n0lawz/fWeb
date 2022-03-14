import { User } from "./models/Users";

const user = new User({name: 'myname', age: 20});

user.on('change', () => {
    console.log('change 1')
});

user.on('change', () => {
    console.log('change 2')
});

user.trigger('change');
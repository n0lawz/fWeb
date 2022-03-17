import { User } from "./models/Users";




user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');


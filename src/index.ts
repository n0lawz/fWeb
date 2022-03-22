import { UserForm } from "./views/UserForm";
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 })

const root = document.getElementById('root');

// type guard to ensure we have root element available 
if (root) {
    const userForm = new UserForm(root, user);

    userForm.render();
} else {
    throw new Error('Root element not found');
}


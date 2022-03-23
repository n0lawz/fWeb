import { UserEdit } from "./views/UserEdit";
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 })

const root = document.getElementById('root');

// type guard to ensure we have root element available 
if (root) {
    const userEdit = new UserEdit(root, user);

    userEdit.render();
    
    console.log(userEdit);
} else {
    throw new Error('Root element not found');
}


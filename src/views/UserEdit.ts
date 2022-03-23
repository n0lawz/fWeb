import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";


export class UserEdit extends View<User, UserProps> {

    regionsMap(): { [key: string]: string} {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        };
    }

    // whenever this component is rendered, we create our child elements and pass in the div where to render
    onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }


    // HTML to be rendered
    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
    }
}
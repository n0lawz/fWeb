import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {

    // these are all the events currently available on UserForm
    eventsMap(): { [key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
        };
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        // type guard to remove null type union on input.
        if (input) {
            const name = input.value;

            this.model.set({ name });
        }

    }
    // click event for set age button
    onSetAgeClick = () : void => {
      this.model.setRandomAge();
    }

    // this is the html that will be generated on the page
    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button class='set-name'>Change Name</button>
                <button class='set-age'>Set Random Age</button>
            </div> 
        `;
    }
}
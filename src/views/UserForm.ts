import { User } from '../models/User';

export class UserForm {
    // within the constructor, we make sure that anytime change is called on User we call bindModel
    constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    // function called in constructor to call render function anytime change is called
    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        })
    }

    // these are all the events currently available on UserForm
    eventsMap(): { [key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick
        };
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
                <button>Click me</button>
                <button class='set-age'>Set Random Age</button>
            </div> 
        `;
    }

    // a function that binds events in eventsMap to html elements
    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector]  = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }

    // a function that is taking in our template and rendering html to the dom
    render(): void {
        // empties out the parent element so we do not generate new HTML, rather we replace what is there
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}
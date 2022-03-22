import { User } from "../models/User";

export abstract class View {
    // within the constructor, we make sure that anytime change is called on User we call bindModel
    constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    // abstract methods that tell our view class they will be available later through UserForm
    abstract eventsMap(): { [key: string]: () => void };
    abstract template(): string;

    // function called in constructor to call render function anytime change is called
    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        })
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
import { Model } from "../models/Model";
// T will have all the same properties as a model with type K loaded into it, the second generic type being passed
// into class View is K. so when we call View, we pass in the model as the first arguement, and the set of
// attributes that exist within that model are passed in as K
export abstract class View<T extends Model<K>, K> {
    // within the constructor, we make sure that anytime change is called on User we call bindModel
    constructor(public parent: Element, public model: T) {
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
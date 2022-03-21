import { User } from "./Users";
import { Eventing } from "./Eventing";

export class Collection {
    models: User[] = [];
    events: Eventing = new Eventing();

    get on() {
        return this.events.on;
    }

    get trigger() {
        this.events.trigger;
    }
}
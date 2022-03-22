import axios, { AxiosResponse } from 'axios';
import { Eventing } from "./Eventing";

export class Collection<T, K> {

    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T
    ) {}

    models: T[] = [];
    events: Eventing = new Eventing();

    get on() {
        return this.events.on;
    }

    get trigger() {
       return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.models.push(this.deserialize(value));
            });
        });

        this.trigger('change');
    }
}
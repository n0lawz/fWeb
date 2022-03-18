// used in on method to pass in argument
type Callback = () => void;

export class Eventing {

    events: { [key: string]: Callback[] } = {};

    // Both on and trigger are set up as bound functions to avoid ambiguity around this
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };
    
    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    };

}
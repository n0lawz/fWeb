export class Attributes<T> {

    constructor(private data: T) {}

    // limiting the different types that K can be. It can only ever be one of the types of T (which is UserProps)
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    };
    
    set(update: T): void {
        Object.assign(this.data, update);
    }
}


# fWeb framework [In Progress]

private data: UserProps - object to store information about a particular user (name, age)

get(propName: string): (string | number) - gets a single piece of info about this user (name, age)

set(update: UserProps): void - changes information about this user (name,age)

on(eventName: string, callback: () => {}) - registers an event handler with this object, so other parts of the    
app know when something changes   

trigger(eventName: string): void - triggers an event to tell other parts of the app that something has changed

fetch(): Promise - fetches some data about this user to the server

save(): Promise - saves some data about this user to the server

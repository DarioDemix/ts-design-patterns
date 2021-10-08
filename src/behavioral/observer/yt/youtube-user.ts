import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class YoutubeUser implements Observer {
    name: string;
    subscriptions: Subject[] = [];

    constructor(name: string) {
        this.name = name;
    }

    update(message: any): void {
        console.log(`Hi ${this.name}! \nYou have a new notification: ${message}`);
    }
    
    subscribe(channel: Subject): void {
        this.subscriptions.push(channel);
        channel.addObserver(this);
        console.log(`Subscribed!`)
    }

}
import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class YoutubeUser implements Observer<string> {
    name: string;
    subscriptions: Subject<string>[] = [];

    constructor(name: string) {
        this.name = name;
    }

    update(message: any): void {
        console.log(`\nHi ${this.name}! \nYou have a new notification: ${message}`);
    }
    
    subscribe(channel: Subject<string>): void {
        this.subscriptions.push(channel);
        channel.addObserver(this);
        console.log(`Subscribed!`)
    }

}
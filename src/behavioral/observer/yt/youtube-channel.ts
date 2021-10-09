import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class YoutubeChannel implements Subject<string> {
    private name: string;
    private uploadedVideos: string[] = [];

    private subscribers: Observer<string>[] = [];

    constructor(name: string) {
        this.name = name;
     }

    addObserver = (subscriber: Observer<string>) => this.subscribers.push(subscriber);

    removeObserver = (subscriber: Observer<string>) => this.subscribers = this.subscribers.filter(o => o !== subscriber);

    notifyObservers(value: string) {
        this.uploadedVideos.push(value);
        this.subscribers.forEach(sub => sub.update(`New video from ${this.name}: ${value}`));
    } 

}
import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class YoutubeChannel implements Subject {
    private name: string;
    private uploadedVideos: string[] = [];

    private subscribers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
     }

    addObserver(subscriber: Observer) {
        this.subscribers.push(subscriber);
    }

    removeObserver(subscriber: Observer) {
        this.subscribers = this.subscribers.filter(o => o !== subscriber);
    }

    uploadVideo(title: string) {
        this.subscribers.forEach(sub => sub.update(`New video from ${this.name}: ${title}`));
    }

}
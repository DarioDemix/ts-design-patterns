import { Subject } from "./subject";

export interface Observer {
    subscribe(subject: Subject): void;
    update(value: any): void;
}
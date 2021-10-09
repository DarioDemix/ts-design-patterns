import { Subject } from "./subject";

export interface Observer<T> {
    subscribe(subject: Subject<T>): void;
    update(value: T): void;
}
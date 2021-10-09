import { Observer } from "./observer";

export interface Subject<T> {
    addObserver(observer: Observer<T>): void;
    removeObserver(observer: Observer<T>): void;
    notifyObservers(value: T): void;
}
import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";
import { IBroadcastEventArgs } from "./abstraction/IBroadcastEventArgs";

export interface IBroadcastEvent<TEventType> {
    emit(eventType: TEventType, data: any): void;
    on(eventType: TEventType): Rx.Observable<any>;
    getKey(eventType: TEventType);
}

export interface IBroadcastSingleEvent {
    emit(data: any): void;
    on(): Rx.Observable<any>;
    getKey();
}

@Injectable()
export class BroadcasterService {
    private eventBus: Rx.Subject<IBroadcastEventArgs>;

    constructor() {
        this.eventBus = new Rx.Subject<IBroadcastEventArgs>();
    }

    broadcast(key: string, data?: any) {
        this.eventBus.next({ key, data });
    }

    on<T>(key: string): Rx.Observable<T> {
        const observable = this.eventBus.asObservable()
            .filter((event: IBroadcastEventArgs) => {
                if (event.key === key) {
                    return true;
                }
                return false;
            })
            .map((event: IBroadcastEventArgs) => <T>event.data);

        return observable;
    }
}

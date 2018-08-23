import { Injectable, Inject } from "@angular/core";
import * as Rx from "rxjs/Rx";
import { IBroadcastEvent, BroadcasterService } from "./broadcaster.service";

export enum ServiceEventType {
    RequestBegin,
    RequestEnd
}

@Injectable()
export class ServiceEvent implements IBroadcastEvent<ServiceEventType> {
    constructor( @Inject(BroadcasterService) protected broadcaster: BroadcasterService) { }

    emit(eventType: ServiceEventType, data?: any): void {
        let key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
    }

    on(eventType: ServiceEventType): Rx.Observable<any> {
        let key = this.getKey(eventType);
        return this.broadcaster.on<any>(key);
    }

    getKey(ofType: ServiceEventType) {
        switch (ofType) {
            case ServiceEventType.RequestBegin:
                return "ServiceEventType:RequestBegin";
            case ServiceEventType.RequestEnd:
                return "ServiceEventType:RequestEnd";
            default:
                return "ServiceEventType:None";
        }
    }
}

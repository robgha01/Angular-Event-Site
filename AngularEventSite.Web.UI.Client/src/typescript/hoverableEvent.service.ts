import { Injectable, Inject } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as bl from "./blueleet/";

export enum HoverableEventType {
    MouseEnter,
    MouseLeave,
    InstanceGroup
}

@Injectable()
export class HoverableEventService implements bl.IBroadcastEvent<HoverableEventType> {
    group: string = null;

    constructor( @Inject(bl.BroadcasterService) protected broadcaster: bl.BroadcasterService) { }

    emit(eventType: HoverableEventType, data?: any): void {
        let key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
    }

    on(eventType: HoverableEventType): Rx.Observable<any> {
        let key = this.getKey(eventType);
        return this.broadcaster.on<any>(key);
    }

    setGroup(value: any) {
        this.group = value;
    }

    getKey(ofType: HoverableEventType) {
        let key: string;
        switch (ofType) {
            case HoverableEventType.MouseEnter:
                key = "HoverableEventType:MouseEnter";
                break;
            case HoverableEventType.MouseLeave:
                key = "HoverableEventType:MouseLeave";
                break;
            case HoverableEventType.InstanceGroup:
                key = "HoverableEventType:InstanceGroup";
                break;
            default:
                key = "HoverableEventType:None";
                break;
        }

        return this.group === null ? `${key}` : `${key}:${this.group}`;
    }
}

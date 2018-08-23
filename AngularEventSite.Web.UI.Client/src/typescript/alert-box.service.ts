import { Injectable, Inject } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as bl from "./blueleet/";
import { IBroadcastSingleEvent } from "./blueleet/broadcaster.service";

export enum AlertBoxEventType {
    Info,
    Success,
    Error,
    Warning
}

export class AlertBoxOptions {
    type: AlertBoxEventType;
    message: string;
    showClose: boolean;

    constructor(type: AlertBoxEventType, message: string, showClose: boolean = true) {
        this.type = type;
        this.message = message;
        this.showClose = showClose;
    }
}

@Injectable()
export class AlertBoxService implements IBroadcastSingleEvent {
    constructor( @Inject(bl.BroadcasterService) protected broadcaster: bl.BroadcasterService) { }

    emit(data?: AlertBoxOptions): void {
        let key = this.getKey();
        this.broadcaster.broadcast(key, data);
    }

    on(): Rx.Observable<AlertBoxOptions> {
        let key = this.getKey();
        return this.broadcaster.on<AlertBoxOptions>(key);
    }

    getKey() {
        return "AlertBoxServiceEventType";
    }
}

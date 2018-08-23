import { Injectable, Inject } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as bl from "../../blueleet";
const _ = require("lodash");

@Injectable()
export class EventService {
    public stateChange: Rx.BehaviorSubject<IEventState> = new Rx.BehaviorSubject(null);
    public statusUpdate: Rx.BehaviorSubject<EventStatus> = new Rx.BehaviorSubject(null);

    constructor( @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService) { }

    public updateState(eventId: number, memberId?: number): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.umbracoAjaxService.post("Event", "BuildStatePost", { eventId: eventId, memberId: memberId })
                .catch((value) => {
                    reject(value);
                    this.stateChange.error(value);
                })
                .then((value: IEventState) => {
                    if (_.isEqual(value, this.stateChange.value)) {
                        console.log("updateState => No changes.");
                        // No changes
                        resolve();
                        return;
                    }

                    resolve(value);
                    this.stateChange.next(value);
                });
        });
    }

    public getEvent(eventId: number): Promise<IEvent> {
        return this.umbracoAjaxService.post("Event", "GetEventPost", { eventId: eventId });
    }

    public getMyEvents(): Promise<{ activeEvents: IEvent[], oldEvents: IEvent[] }> {
        return new Promise((resolve, reject) => {
            return this.umbracoAjaxService.post("Event", "GetMyEventsPost")
                .catch((value) => {
                    reject(value);
                })
                .then((value: { activeEvents: IEvent[], oldEvents: IEvent[] }) => {
                    if (_.isEmpty(value)) {
                        resolve([]);
                        return;
                    }

                    resolve(value);
                });
        });
    }

    public register(eventId: number, memberId: number): Promise<EventStatus> {
        const args = { eventId: eventId, memberId: memberId };
        return this.umbracoAjaxService.post("Event", "RegisterPost", args)
            .then(value => {
                this.statusUpdate.next(value);

                return value;
            });
    }

    public unregister(eventId: number, memberId: number): Promise<EventStatus> {
        const args = { eventId: eventId, memberId: memberId };
        return this.umbracoAjaxService.post("Event", "UnregisterPost", args)
            .then(value => {
                this.statusUpdate.next(value);

                return value;
            });
    }

    public unlockEvent(eventCode: string): Promise<IUnlockEventResult> {
        const args = { eventCode: eventCode };
        return this.umbracoAjaxService.post("Event", "UnlockEventPost", args)
            .then(value => {
                this.statusUpdate.next(value);

                return value;
            });
    }
}

export interface IUnlockEventResult {
    status: EventStatus;
    event?: IEvent;
}

export interface IEvent {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    url: string;
}

export enum EventStatus {
    Unknown,
    Registered,
    Unregistered,
    Full,
    CompanyAlreadyExists,
    Unlocked,
    WrongEventCode
}

export interface IEventState {
    //openSpots: number;
    //totalSpots: number;
    canUnregister: boolean;
    closed: boolean;
    isParticipating: boolean;
}
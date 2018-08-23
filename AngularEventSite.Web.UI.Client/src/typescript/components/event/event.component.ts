import {
    Component, Inject, NgZone, Input, ViewChild, ContentChild, ChangeDetectorRef, TemplateRef, ViewContainerRef,
    OnInit, AfterViewInit, ChangeDetectionStrategy
} from "@angular/core";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import * as enums from "../../enums/";
import { UserService } from "../../user.service";
import { EventService, IEventState, EventStatus, IEvent } from "./event.service";
import {IUser} from "../../abstraction/IUser";

@Component({
    selector: "event",
    template: require("./templates/event.html"),
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EventService]
})
export class EventComponent extends TemplateBaseComponent implements OnInit, AfterViewInit {
    @ViewChild("DefaultTemplate") defaultTemplate: TemplateRef<any>;
    
    // Modal templates
    @ViewChild("RegisterModalTemplate") registerModalTemplate: TemplateRef<any>;
    @ViewChild("RegisteredModalTemplate") registeredModalTemplate: TemplateRef<any>;
    @ViewChild("CompanyRegisterModalTemplate") companyRegisterModalTemplate: TemplateRef<any>;
    @ViewChild("RegisterReserveModalTemplate") registerReserveModalTemplate: TemplateRef<any>;
    @ViewChild("RegisteredReserveModalTemplate") registeredReserveModalTemplate: TemplateRef<any>;
    @ViewChild("UnregisterModalTemplate") unregisterModalTemplate: TemplateRef<any>;
    @ViewChild("UnregisteredModalTemplate") unregisteredModalTemplate: TemplateRef<any>;

    // Content templates
    @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
    
    @Input() updateInterval: number = 5000;
    @Input() eventId: number;
    @Input() memberId: number;
    @Input() btnRegisterText: string;
    @Input() btnRegisterReserveText: string;
    @Input() btnUnregisterText: string;
    @Input() btnUnregisterClosedText: string;
    @Input() btnEventClosedText: string;
    @Input() registeredText: string;
    @Input() unregisteredText: string;

    activeButtonTemplate: TemplateRef<any>;
    eventPage: IEvent = null;
    member: IUser = null;
    modalRef: BsModalRef;
    state: IEventState;
    isFull: boolean = false;
    buttonText: string = null;
    isUpdating: boolean = false;
    alerts: any = [];

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(BsModalService) private modalService: BsModalService,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(UserService) public userService: UserService,
        @Inject(EventService) private eventService: EventService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    openModal(template: TemplateRef<any>) {
        const self = this;
        self.modalRef = self.modalService.show(template, { class: "modal-sm" });
    }

    closeModal() {
        const self = this;
        self.modalRef.hide();
    }

    performRegister() {
        const self = this;
        self.eventService.register(self.eventId, self.memberId).then(value => {
            switch (value) {
                case EventStatus.Registered:
                    self.closeModal();
                    self.openModal(self.registeredModalTemplate);
                    break;
                case EventStatus.CompanyAlreadyExists:
                    self.closeModal();
                    self.openModal(self.companyRegisterModalTemplate);
                    break;
                default:
            }
        });
    }

    performUnregister() {
        const self = this;
        self.eventService.unregister(self.eventId, self.memberId).then(value => {
            switch (value) {
                case EventStatus.Unregistered:
                    self.closeModal();
                    self.openModal(self.unregisteredModalTemplate);
                    self.updateState();
                    break;
                default:
            }
        });
    }
    
    ngAfterViewInit(): void {
        const self = this;

        self.eventService.stateChange.subscribe((value: IEventState) => {
            if (value == null) {
                self.state = null;
                return;
            }

            self.state = value;
            //self.isFull = 1 % self.state.openSpots === 0 || self.state.openSpots === 0;
            
            if (value.closed) {
                self.buttonText = self.btnEventClosedText;
            } else if (self.isFull && value.isParticipating === false) {
                // Reserv anmälan
                self.buttonText = self.btnRegisterReserveText;
                self.activeButtonTemplate = self.registerReserveModalTemplate;
            } else if (value.isParticipating && value.canUnregister === false) {
                self.buttonText = self.btnUnregisterClosedText;
            } else if (value.isParticipating) {
                self.buttonText = self.btnUnregisterText;
                self.activeButtonTemplate = self.unregisterModalTemplate;
            } else {
                self.buttonText = self.btnRegisterText;
                self.activeButtonTemplate = self.registerModalTemplate;
            }

            self.changeDetectorRef.markForCheck();
        });

        setInterval(() => {
            self.updateState();
        }, self.updateInterval);
    }

    updateState() {
        const self = this;
        if (self.isUpdating) {
            return;
        }

        self.isUpdating = true;
        self.eventService.updateState(self.eventId, self.memberId).then(() => {
            self.isUpdating = false;
        });
    }

    ngOnInit(): void {
        const self = this;
        System.import("./event.scss");

        self.eventService.getEvent(self.eventId).then((value: IEvent) => {
            self.eventPage = value;
        });

        self.userService.getMember().then(value => {
            self.member = value.user;
        });

        self.viewState$ = enums.DefaultViewState.DefaultTemplate;
    }
}
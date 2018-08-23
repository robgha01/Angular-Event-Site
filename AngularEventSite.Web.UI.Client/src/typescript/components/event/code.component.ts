import {
    Component, Inject, NgZone, ViewChild, ContentChild, ChangeDetectorRef, TemplateRef, ViewContainerRef,
    OnInit, AfterViewInit
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import * as enums from "../../enums/";
import { UserService } from "../../user.service";
import { EventService, EventStatus, IEvent } from "./event.service";
import { IUser } from "../../abstraction/IUser";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { NavigationService } from "../../navigation.service";
const pace = require("pace-progress");

@Component({
    selector: "event-code",
    template: require("./templates/code.html"),
    providers: [EventService, NavigationService]
})
export class EventCodeComponent extends TemplateBaseComponent implements OnInit, AfterViewInit {
    @ViewChild("DefaultTemplate") defaultTemplate: TemplateRef<any>;

    // Modal templates
    @ViewChild("CompanyRegisterModalTemplate") companyRegisterModalTemplate: TemplateRef<any>;
    @ViewChild("SuccessModalTemplate") successModalTemplate: TemplateRef<any>;
    @ViewChild("WrongCodeModalTemplate") wrongCodeModalTemplate: TemplateRef<any>;

    // Content templates
    @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;

    unlockCodeForm: FormGroup;
    member: IUser = null;
    modalRef: BsModalRef;
    eventCode: string = "";
    event: IEvent;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(BsModalService) private modalService: BsModalService,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(LoginEventService) protected loginEventService: LoginEventService,
        @Inject(UserService) public userService: UserService,
        @Inject(EventService) private eventService: EventService,
        @Inject(NavigationService) private navigationService: NavigationService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    openModal(template: TemplateRef<any>) {
        const self = this;
        self.modalRef = self.modalService.show(template, { class: "modal-sm" });
    }

    closeModal() {
        const self = this;
        if (self.modalRef) {
            self.modalRef.hide();
        }
    }

    performUnlockCode($event?: Event) {
        if ($event !== null) {
            $event.preventDefault();
        }
        const self = this;
        this.ngZone.run(() => {
            self.userService.hasAccess(true).then(hasAccess => {
                if (hasAccess === false) {
                    // Not logged in!
                    self.loginEventService.emit(LoginEventType.ShowLoginView);
                } else {
                    pace.stop();
                    pace.bar.render();
                    self.eventService.unlockEvent(self.unlockCodeForm.value.eventcode).then(value => {
                        switch (value.status) {
                            case EventStatus.Unlocked:
                                self.event = value.event;
                                //self.closeModal();
                                //self.openModal(self.successModalTemplate);
                                self.navigationService.navigate(value.event.url);
                                break;
                            case EventStatus.WrongEventCode:
                                self.closeModal();
                                self.openModal(self.wrongCodeModalTemplate);
                                break;
                            case EventStatus.CompanyAlreadyExists:
                                self.closeModal();
                                self.openModal(self.companyRegisterModalTemplate);
                            default:
                        }

                        pace.stop();
                        pace.start();
                    });
                }
            });
        });
    }

    ngAfterViewInit(): void {
        const self = this;
    }

    ngOnInit(): void {
        const self = this;

        self.unlockCodeForm = this.formBuilder.group({
            eventcode: ["", Validators.required]
        });

        self.loginEventService.on(LoginEventType.Success).subscribe((): void => {
            if (self.unlockCodeForm.valid) {
                self.performUnlockCode(null);
            }
        });

        self.viewState$ = enums.DefaultViewState.DefaultTemplate;
    }
}
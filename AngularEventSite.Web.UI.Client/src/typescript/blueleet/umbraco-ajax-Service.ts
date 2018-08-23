import { Inject, Injectable, isDevMode } from "@angular/core";
import { RequestOptions, RequestMethod, Http, Headers, Response } from "@angular/http";
import * as $ from "jquery";
import { ConfigService } from "./config.service";
import { ServiceEvent, ServiceEventType } from "./ServiceEvent.service";

@Injectable()
export class UmbracoAjaxService {
    private url: string;

    constructor(
        @Inject(Http) protected $http: Http,
        @Inject(Window) protected window,
        @Inject(ConfigService) protected blueLeetConfigService: ConfigService,
        @Inject(ServiceEvent) protected serviceEvent: ServiceEvent) {
        const currentCulture = $("head").data("culture");
        this.blueLeetConfigService.addLocalConfig("currentCulture", currentCulture);
        this.url = this.getUrl();
    }

    private transform(data) {
        return $.param(data);
    }

    private transformJsonRequest(data) {
        return JSON.stringify(data);
    }

    private getUrl() {
        return window.location.protocol + "//" + window.location.host + "/";
    }

    private getEncryptedRoute(controller: string, action: string, area: string = "", additionalRouteVals: any = null): Promise<any> {
        let url = this.url + "umbraco/Api/JsonHelper/SurfaceActionPost";
        //console.log(`getEncryptedRoute(controller:'${controller}', action:'${action}', area:'${area}')`, additionalRouteVals);

        let body: any = {
            controllerName: controller,
            controllerAction: action,
            area: area,
            additionalRouteVals: additionalRouteVals
        };

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        body = this.transformJsonRequest(body);

        return this.$http.post(url, body, options)
            .map((res: Response) => {
                let json = res.json();
                return json;
            }).toPromise();
    }

    private getHeaders(): Headers {
        const headers = new Headers();
        headers.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

        let ajaxVerificationToken = $("head").data("ajaxVerificationToken");
        if (ajaxVerificationToken) {
            headers.set("RequestVerificationToken", ajaxVerificationToken);
            //console.log("setting ajaxVerificationToken header", ajaxVerificationToken);
        }

        return headers;
    }

    private getValidController(controller: string): string {
        const endsWithControllerRegex = new RegExp("controller$", "gi");
        if (endsWithControllerRegex.test(controller)) {
            //console.warn("[blueleet-http] a request was made with controller: '" + controller + "' which is ending with 'controller' please remove the controller part as it is not needed!");
            return controller.replace(new RegExp("controller$", "gi"), "");
        }

        return controller;
    }

    private validateNamingConventionForAction(controller: string, action: string, isPost: boolean = false) {
        if (isDevMode() === false) {
            return;
        }

        const postConventionRegex = new RegExp("(post$)|(^post)", "gi");
        const getConventionRegex = new RegExp("(get$)|(^get)", "gi");

        if (isPost && !postConventionRegex.test(action)) {
            console.error(`Convention: A request was made to controller: '${controller}' with an incorrectly named action: '${action}' make sure it starts or ends with 'post'.`);
        } else if (!isPost && getConventionRegex.test(action)) {
            console.error(`Convention: A request was made to controller: '${controller}' with an incorrectly named action: '${action}' make sure it starts or ends with 'get'.`);
        }
    }

    private handleServerError(response: Response, silentTry: boolean): any {
        this.handleDone(response);

        if (silentTry) {
            return Promise.resolve();
        }

        if (Object.isNullOrUndefined(response.headers)) {
            return Promise.reject(response);
        } else if (response.headers.has("Content-Type") && response.headers.get("Content-Type").indexOf("application/json") >= 0) {
            let json = response.json();
            return Promise.reject(json);
        } else {
            return Promise.reject(response.text());
        }
    }

    private handleDone(value) {
        if (!Object.isNullOrUndefined(value)) {
            this.serviceEvent.emit(ServiceEventType.RequestEnd, value);
        }
    }

    post(controller, action, parameters: any = null, info?: { area?: string, silentTry?: boolean }): Promise<any> {
        const defaultInfo = { area: "", noThrow: false };
        info = $.extend(defaultInfo, info || {});
        controller = this.getValidController(controller);
        this.validateNamingConventionForAction(controller, action, true);
        return this.getEncryptedRoute(controller, action, info.area, parameters)
            .then(response => {
                this.serviceEvent.emit(ServiceEventType.RequestBegin);
                const options = new RequestOptions({
                    headers: this.getHeaders()
                });

                return this.$http.post(window.location.href, this.transform(response), options)
                    .map((res: Response) => {
                        let data: any;
                        if (res.headers.has("Content-Type") && res.headers.get("Content-Type").indexOf("application/json") >= 0) {
                            data = res.json();
                        } else {
                            data = res.text();
                            if (!data) {
                                data = res;
                            }
                        }

                        this.handleDone(data);
                        return data;
                    })
                    .catch(r => this.handleServerError(r, info.silentTry))
                    .toPromise();
            });
    }

    get(controller, action, parameters: any = null, info?: { area?: string, silentTry?: boolean }): Promise<any> {
        const defaultInfo = { area: "", noThrow: false };
        info = $.extend(defaultInfo, info || {});
        controller = this.getValidController(controller);
        this.validateNamingConventionForAction(controller, action);
        return this.getEncryptedRoute(controller, action, info.area, parameters)
            .then(response => {
                this.serviceEvent.emit(ServiceEventType.RequestBegin);
                const options = new RequestOptions({
                    method: RequestMethod.Get,
                    headers: this.getHeaders(),
                    body: response
                });
                return this.$http.request(window.location.href, options)
                    .map((res: Response) => {
                        let data: any;
                        if (res.headers.has("Content-Type") && res.headers.get("Content-Type").indexOf("application/json") >= 0) {
                            data = res.json();
                        } else {
                            data = res.text();
                            if (!data) {
                                data = res;
                            }
                        }

                        this.handleDone(data);
                        return data;
                    })
                    .catch(r => this.handleServerError(r, info.silentTry))
                    .toPromise();
            });
    }
}

import * as Rx from "rxjs/Rx";

export abstract class WidgetContextService<TWidgetType> {
    protected widgetInstanceSubject: Rx.BehaviorSubject<TWidgetType> = new Rx.BehaviorSubject(null);
    widgetInstance = this.widgetInstanceSubject.asObservable();

    setContext(type: TWidgetType): void {
        this.widgetInstanceSubject.next(type);
    }
}
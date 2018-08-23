import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as components from "../inline-editor.component";
import { InlineEditorGroupComponent } from "../inline-editor-group.component";

@Injectable()
export class InlineEditorContextService {
    editorInstance: Rx.BehaviorSubject<components.InlineEditorComponent> = new Rx.BehaviorSubject(null);
}

@Injectable()
export class InlineEditorGroupContextService {
    editorGroupInstance: Rx.BehaviorSubject<InlineEditorGroupComponent> = new Rx.BehaviorSubject(null);
}

/**
 * @module
 * @description
 * Entry point for all inline editors.
 */
import { forwardRef } from "@angular/core";
import { MakeProvider } from "../../abstraction/AbstractValueAccessor";
import { InlineEditorContextService, InlineEditorGroupContextService } from "./services/InlineEditorContext.service";
import { InlineEditorGroupComponent, ButtonChangeComponent } from "./inline-editor-group.component";
import { InlineEditorComponent, RenderEditorComponent, PresentationStateComponent, EditStateComponent } from "./inline-editor.component";
import { InlineNumericComponent as NumericComponent } from "./editors/numeric/numeric.component";
import { InlineSelectComponent as SelectComponent } from "./editors/select/select.component";
import { InlineDatetimeComponent as DatetimeComponent } from "./editors/datetime/datetime.component";
import { InlinePasswordComponent as PasswordComponent } from "./editors/password/password.component";
import { InlineTextComponent as TextComponent } from "./editors/text/text.component";
import { InlineTextareaComponent as TextareaComponent } from "./editors/textarea/textarea.component";

// exports
export * from "./inline-editor-group.component";
export * from "./inline-editor.component";
export * from "./editors/datetime/datetime.component";
export * from "./editors/numeric/numeric.component";
export * from "./editors/password/password.component";
export * from "./editors/select/select.component";
export * from "./editors/text/text.component";
export * from "./editors/textarea/textarea.component";

export function inizialize() {
    const inlineEditors: any[] = [DatetimeComponent, NumericComponent, PasswordComponent, SelectComponent, TextComponent, TextareaComponent];
    const editors: any[] = [InlineEditorGroupComponent, ButtonChangeComponent, RenderEditorComponent, PresentationStateComponent, EditStateComponent].concat(inlineEditors);
    const editorProviders: any[] = [];
    const exports = editors;

    for (let editor of inlineEditors) {
        let provider = MakeProvider(editor);

        // Register a value accessor.
        editorProviders.push(provider);

        // Register a relation between base and implamentor.
        editorProviders.push({ provide: InlineEditorComponent, useExisting: forwardRef(() => editor), multi: true });
    }

    editorProviders.push(InlineEditorContextService);
    editorProviders.push(InlineEditorGroupContextService);

    return { editors, editorProviders, exports };
};

import { Directive, Inject, Input } from "@angular/core";
import * as bl from "./blueleet";

@Directive({ selector: "[apply-to-course]" })
export class ApplyToCourseDirective {
    @Input("course-id") courseId: number;
    
    constructor( @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService ) { }

    applyCourseClick() {
        
    }
}

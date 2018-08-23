// Type definitions for rangeslider v2.0.0
// Project: http://rangeslider.js.org/
// Definitions by: Robert Ghafoor <https://github.com/robgha01/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Rangeslider {
   export interface RangesliderOptions {
        /**
        * Feature detection the default is `true`.
        * Set this to `false` if you want to use
        * the polyfill also in Browsers which support
        * the native <input type="range"> element.
        */
        polyfill?: boolean;
        /**
        * range CSS classe.
        */
        rangeClass?: string;
        /**
        * disabled CSS classe.
        */
        disabledClass?: string;
        /**
        * horizontal CSS classe.
        */
        horizontalClass?: string;
        /**
        * vertical CSS classe.
        */
        verticalClass?: string;
        /**
        * fill CSS classe.
        */
        fillClass?: string;
        /**
        * handle CSS classe.
        */
        handleClass?: string;
        /**
        * initializing callback function.
        */
        onInit?: () => void;
        /**
        *  sliding callback function.
        */
        onSlide?: (position: any, value: any) => void;
        /**
        *  sliding end callback function.
        */
        onSlideEnd?: (position: any, value: any) => void;
    }
}

interface JQuery {
    /**
    * Simple, small and fast JavaScript/jQuery polyfill for the HTML5
    */
    rangeslider: {
        /**
        * initialize rangeslider on jquery object.
        *
        * @param settings Set of settings.
        */
        (settings?: Rangeslider.RangesliderOptions): JQuery;
        /**
        * Destroy plugin instance
        *
        * @param destroy value 'destroy'.
        */
        (destroy: "destroy"): JQuery;
        /**
        * Update rangeslider instance.
        *
        * @param update Where to scroll the matched elements.
        * @param triggerSlide sssdas
        */
        (update: "update", triggerSlide?: boolean): JQuery;
    };

}

interface JQueryStatic {
    /**
    * Simple, small and fast JavaScript/jQuery polyfill for the HTML5
    */
    rangeslider: {
        /**
        * initialize rangeslider on jquery object.
        *
        * @param settings Set of settings.
        */
        (settings?: Rangeslider.RangesliderOptions): JQuery;
        /**
        * Destroy plugin instance
        *
        * @param destroy value 'destroy'.
        */
        (destroy: "destroy"): JQuery;
        /**
        * Update rangeslider instance.
        *
        * @param update Where to scroll the matched elements.
        * @param triggerSlide sssdas
        */
        (update: "update", triggerSlide?: boolean): JQuery;
    };
}
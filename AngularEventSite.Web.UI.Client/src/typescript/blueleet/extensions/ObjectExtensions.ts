/**
 * Static extensions
 */
interface ObjectConstructor {
    isNullOrUndefined(object: any): boolean;
    isNotNullOrUndefined(object: any): boolean;
    getQueryStringValue(param: any): string;
};

Object.isNullOrUndefined = (object: any): boolean => {
    return !(object !== null && object !== undefined);
};

Object.isNotNullOrUndefined = (object: any): boolean => {
    return object !== null && object !== undefined;
};

Object.getQueryStringValue = (param: any): string => {
    let sPageUrl = window.location.search.substring(1);
    let sUrlVariables = sPageUrl.split("&");

    for (let i = 0; i < sUrlVariables.length; i++) {
        let sParameterName = sUrlVariables[i].split("=");

        if (sParameterName[0] === param) {
            return decodeURIComponent(sParameterName[1]);
        }
    }

    return null;
};

/**
 * Prototyped extensions
 */
interface Object { }

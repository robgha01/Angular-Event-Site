/**
 * Static extensions
 */
interface StringConstructor {
    isNullOrEmpty(str: string): boolean;
};

String.isNullOrEmpty = (str: string) => !str;


/**
 * Prototyped extensions
 */
interface String {
    asUrl(): URL;
}

String.prototype.asUrl = function (): URL {
    let url: URL;
    try {
        url = new URL(this);
    } catch (e) {
        // url is not absolut
        url = new URL(this, document.baseURI);
    }

    return url;
};

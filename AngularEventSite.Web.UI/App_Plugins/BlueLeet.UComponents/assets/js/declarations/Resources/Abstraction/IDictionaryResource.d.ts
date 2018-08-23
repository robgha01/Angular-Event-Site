/**
* @ngdoc resource
* @name IDictionaryResource
* @description
* This Resource performs lookups to a variety of translation methods.
*/
interface IDictionaryResource {
    /**
    * @ngdoc method
    * @name GetText
    * @methodOf umbraco.dictionaryResource
    *
    * @description
    * Resolves translations from a language xml file as a json object.
    *
    * ##usage
    * <pre>
    * dictionaryResource.GetText(path)
    *    .then(function(data) {
    *        //Do stuff with the json language object...
    *    });
    * </pre>
    * @param {string} path The path to a lang folder with language files.
    * @returns json object representing the parsed language file.
    */
    getText(path: string): any;
}

const _ = require("lodash");
import { IDescribeReflect as DescribeReflect } from "../declarations/IDescribeReflect";

export function Inherit() {
    return (target: Function) => {
        let reflect: DescribeReflect = window["Reflect"];
        let metaInformations = reflect.getOwnMetadata("annotations", target);
        let parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        let parentMetaInformation = reflect.getMetadata("annotations", parentTarget);
        
        if (!_.isNil(metaInformations) && !_.isNil(parentMetaInformation)) {
            for (let metaInformation of metaInformations) {                
                for (let parentMetadata of parentMetaInformation) {
                    if (parentMetadata.constructor === metaInformation.constructor) {
                        Object.keys(parentMetadata).forEach(key => {
                            const parentValue = parentMetadata[key];
                            const childValue = metaInformation[key];
                            if (!_.isNil(parentValue) && _.isNil(childValue)) {
                                if (_.isArray(parentValue) && _.isArray(childValue)) {
                                    metaInformation[key] = parentValue[key].concat(childValue);
                                } else if (_.isObject(parentValue) && _.isObject(childValue)) {
                                    Object.assign(metaInformation[key], parentValue);
                                } else {
                                    metaInformation[key] = parentMetadata[key];
                                }
                            }
                        });
                    }
                }
            }
        }
    };
}

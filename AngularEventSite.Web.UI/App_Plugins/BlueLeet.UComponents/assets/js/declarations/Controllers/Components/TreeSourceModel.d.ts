import { TreeSourceType } from "./TreeSourceType";
export declare class TreeSourceModel {
    query: string;
    sourceName: string;
    name: string;
    icon: string;
    private isResolveld;
    constructor(type: TreeSourceType, id: number, value: any, sourceName: string, query: string);
    private _id;
    id: any;
    private _value;
    value: any;
    private _type;
    type: TreeSourceType;
    private _typeText;
    readonly typeText: string;
    toJSON(): {
        id: any;
        value: any;
        query: string;
        sourceName: string;
        type: TreeSourceType;
        typeText: string;
    };
    getEntityType(): string;
    updateLazyInfo(): Promise<TreeSourceModel>;
    static copyFrom(node: any): TreeSourceModel;
}

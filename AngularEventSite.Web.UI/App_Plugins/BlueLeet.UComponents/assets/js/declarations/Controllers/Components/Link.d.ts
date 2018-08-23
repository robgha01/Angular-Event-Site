import { TreeSourceType } from "./TreeSourceType";
export declare class Link {
    private _name;
    private _url;
    private _target;
    private _icon;
    private _sourceType;
    private isResolveld;
    constructor(id: number, name: string, url: string, target: string, icon: string, sourceType: TreeSourceType);
    private _id;
    id: any;
    name: string;
    url: string;
    target: string;
    icon: string;
    sourceType: TreeSourceType;
    toJSON(): any;
    static parse(o: any, sourceType?: TreeSourceType): Link;
    private updateLazyInfo();
}

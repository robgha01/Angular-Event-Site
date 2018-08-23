export interface IShareSeoDataService {
    checkHasFoundKeyword: (keyword: string) => {
        title: boolean;
        desc: boolean;
    };
    removeKeywords: (index: number) => void;
    getTitle: () => string;
    getTitleMaxCount: () => number;
    getDescription: () => string;
    getDescriptionMaxCount: () => number;
    getKeywords: () => any[];
    setTitle: (value: string, maxCount: number) => void;
    setDescription: (value: string, maxCount: number) => void;
    setKeywords: (keyword: string) => void;
    onTitleUpdate: ($scope: any, callback: any) => void;
    onDescriptionUpdate: ($scope: any, callback: any) => void;
    onKeywordAdded: ($scope: any, callback: any) => void;
    onKeywordRemoved: ($scope: any, callback: any) => void;
    onPreviewUpdate: ($scope: any, callback: any) => void;
}

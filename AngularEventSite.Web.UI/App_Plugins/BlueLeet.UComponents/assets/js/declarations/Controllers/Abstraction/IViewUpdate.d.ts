import { IViewModel } from "../Abstraction/IViewModel";
export interface IViewUpdate<TViewModel extends IViewModel> {
    update(vm: IViewUpdate<IViewModel>, newValue?: any, updateExisting?: boolean): void;
}

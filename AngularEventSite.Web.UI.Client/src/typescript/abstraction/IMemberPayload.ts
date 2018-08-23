import { MemberStatus } from "../enums/member-status-enum";
import { IPayload } from "./IPayload";

export interface IMemberPayload extends IPayload {
    status: MemberStatus;
    user: any;
    redirectTo?: any;
    loginUrl?: any;
}
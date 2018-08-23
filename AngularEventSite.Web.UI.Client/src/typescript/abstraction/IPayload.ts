import { GenericMessages } from "../enums/generic-messages-enum";

export interface IPayload {
    message: string;
    messageType: GenericMessages;
    raw?: any;
}

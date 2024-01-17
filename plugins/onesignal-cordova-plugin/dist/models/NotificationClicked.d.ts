import { OSNotification } from '../OSNotification';
import { NotificationWillDisplayEvent } from '../NotificationReceivedEvent';
export declare type NotificationEventName = "click" | "foregroundWillDisplay" | "permissionChange";
export declare type NotificationEventTypeMap = {
    click: NotificationClickEvent;
    foregroundWillDisplay: NotificationWillDisplayEvent;
    permissionChange: boolean;
};
export interface NotificationClickEvent {
    result: NotificationClickResult;
    notification: OSNotification;
}
export interface NotificationClickResult {
    actionId?: string;
    url?: string;
}
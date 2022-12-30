import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../../repositories/notifications-repository";
import { NotificationNotFound } from "./notification-not-found";


interface CancelSendNotificationRequest {
    notificationId: string;
}

type CancelSendNotificationResponse = void;

@Injectable()
export class CancelSendNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(
    request: CancelSendNotificationRequest,
    ):Promise<CancelSendNotificationResponse> {
        const {notificationId } = request;
        
        const notification = await this.notificationsRepository.findById(
            notificationId,
        );

        if(!notification){
            throw new NotificationNotFound;
        }

        notification.cancel();

        await this.notificationsRepository.save(notification);

    }
}
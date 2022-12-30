import { Notification } from "@application/entiles/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";


export class InMemoryNotificationRepository implements NotificationsRepository {
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public notifications: Notification[] = [];

    async create(notification: Notification){
        this.notifications.push(notification);
    }
}
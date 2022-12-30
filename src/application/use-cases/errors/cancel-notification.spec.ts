import { Content } from "@application/entiles/content";
import { Notification } from "@application/entiles/notification";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";
import { CancelSendNotification } from "./cancel-notification";




describe('Cancel Notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const CancelNotification = new CancelSendNotification(notificationsRepository);

        const notification = new Notification({
            category: 'social',
            content: new Content('Nova solicitação de amizade'),
            recipientId: 'example-recipient-id',
        })

       await notificationsRepository.create(notification)

       await  CancelNotification.execute({
        notificationId: notification.id,
       });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date),
        );
    });
});
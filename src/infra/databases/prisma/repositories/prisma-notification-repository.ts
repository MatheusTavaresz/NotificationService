import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "@application/entiles/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationsMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prismaService: PrismaService){}
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async create(notification: Notification): Promise<void> {
        const row = PrismaNotificationsMapper.toPrisma(notification)

        await this.prismaService.notification.create({
            data: row,
        })
    }

}
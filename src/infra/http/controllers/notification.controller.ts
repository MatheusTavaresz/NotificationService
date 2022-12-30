import { Controller, Body, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/errors/send-notification';
import { CreateNotification } from '../dtos/notification-controller';
import { NotificationViewModel } from '../view-modules/notification-view-module';


@Controller('notifications') //"decorator"
export class NotificationsController {
  constructor(private sendNotification: SendNotification){}
  @Post()
  async create(@Body() body: CreateNotification){
    const {recipientId, content, category} = body;
    
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
  }
  

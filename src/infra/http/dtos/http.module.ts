import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/errors/send-notification';
import { DatabaseModule } from 'src/infra/databases/database.module';
import { NotificationsController } from '../controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification
  ]
})
export class HttpModule {}

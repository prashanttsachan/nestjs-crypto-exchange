import { Module } from '@nestjs/common';
import { Users } from 'apps/users/src/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Users],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cat/cat.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService],
})
export class AppModule {}

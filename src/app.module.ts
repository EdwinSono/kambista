import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ExchangeRateController } from './exchange-rate/exchange-rate.controller';
import { ExchangeRateService } from './exchange-rate/exchange-rate.service';

@Module({
  imports: [],
  controllers: [AppController, ExchangeRateController],
  providers: [AppService, ExchangeRateService],
})
export class AppModule {}

import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRate } from './interfaces/exchange-rate.interface';
import { ExchangeRateDto } from './dto/exchange-rate.dto';

@Controller('exchange-rate')
export class ExchangeRateController {
  constructor(private readonly appService: ExchangeRateService) {}

  @Post('/calculate')
  @HttpCode(HttpStatus.OK)
  calculateExchangeRate(@Body() payload: ExchangeRate): ExchangeRateDto {
    return this.appService.calculateExchangeRate(payload);
  }
}

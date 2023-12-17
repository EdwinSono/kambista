import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateDto } from './dto/exchange-rate.dto';
import { ExchangeRate } from './entities/exchange-rate.entity';

@ApiBearerAuth()
@ApiTags('exchange-rate')
@Controller('exchange-rate')
export class ExchangeRateController {
  constructor(private readonly appService: ExchangeRateService) {}

  @Post('/calculate')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Calculate exchange rate' })
  @ApiResponse({
    status: 200,
    description: 'Tipo de cambio calculado exitosamente',
    type: ExchangeRateDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Exchange rate not found' })
  calculateExchangeRate(@Body() payload: ExchangeRate): ExchangeRateDto | any {
    if (isNaN(payload.source_amount))
      throw new BadRequestException(`${payload.source_amount} is not a number`);
    return this.appService.calculateExchangeRate(payload);
  }
}

import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
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
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Tipo de cambio no encontrado' })
  calculateExchangeRate(@Body() payload: ExchangeRate): ExchangeRateDto {
    return this.appService.calculateExchangeRate(payload);
  }
}

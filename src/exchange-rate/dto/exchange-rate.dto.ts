import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ExchangeRateDto {
  @ApiProperty({
    description: 'Monto',
    minimum: 1,
    default: 1,
  })
  @IsNumber()
  monto_origen: number;

  @ApiProperty()
  @IsString()
  moneda_origen: string;

  @ApiProperty()
  @IsNumber()
  monto_destino: number;

  @ApiProperty()
  @IsString()
  moneda_destino: string;

  @ApiProperty()
  @IsNumber()
  tipo_cambio: number;
}

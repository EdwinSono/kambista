import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty, IsPositive } from 'class-validator';
export class ExchangeRate {
  @ApiProperty({
    description: 'Moneda origen',
    example: 'PEN',
  })
  @IsString()
  @IsNotEmpty()
  source_currency: string;

  @ApiProperty({
    description: 'Monto',
    example: 1,
  })
  @IsNumber()
  @IsPositive()
  source_amount: number;

  @ApiProperty({
    description: 'Moneda destino',
    example: 'USD',
  })
  @IsString()
  destination_currency: string;
  // destination_amount: string;
  // exchange_rate: number;
}

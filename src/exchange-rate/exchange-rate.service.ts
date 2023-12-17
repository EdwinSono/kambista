import { Injectable } from '@nestjs/common';
import { IExchangeRate } from './interfaces/exchange-rate.interface';
import { ExchangeRateDto } from './dto/exchange-rate.dto';
import { ExchangeRateList } from './interfaces/exchange-rate-list.interface';
import * as fs from 'fs';

@Injectable()
export class ExchangeRateService {
  private exchangeRate: ExchangeRateList[];

  loadExchangeRateList(): void {
    const jsonData = fs.readFileSync(
      './src/exchange-rate/exchange-rate.json',
      'utf8',
    );
    this.exchangeRate = JSON.parse(jsonData)['exchangeRate'];
  }

  private getExchangeRateDestination(
    currencySource: string,
    currencyDestination: string,
  ): number | null {
    const exchangeRate = this.exchangeRate.find(
      (cambio) =>
        cambio.source_currency === currencySource &&
        cambio.destination_currency === currencyDestination,
    );

    return exchangeRate ? Number(exchangeRate.exchange_type.toFixed(3)) : null;
  }

  convertCurrencyDestination(
    amount: number,
    exchangeRate: number,
  ): number | null {
    return amount * exchangeRate;
  }

  calculateExchangeRate(payload: IExchangeRate): ExchangeRateDto {
    this.loadExchangeRateList();

    const amountSource: number = payload.source_amount;
    const currencySource: string = payload.source_currency;
    const currencyDestination: string = payload.destination_currency;

    const exchangeRate = this.getExchangeRateDestination(
      currencySource,
      currencyDestination,
    );
    if (!exchangeRate) {
      console.error(
        `Tipo de cambio no encontrado para ${currencySource} a ${currencyDestination}.`,
      );
      return null;
    }

    const destinationAmount: number | null = this.convertCurrencyDestination(
      amountSource,
      exchangeRate,
    );

    const result =
      destinationAmount !== null
        ? `${amountSource} PEN son aproximadamente ${destinationAmount} USD.`
        : 'not calculate exchange rate';
    console.log(result);

    const exchangeRateDto: ExchangeRateDto = {
      monto_origen: amountSource,
      moneda_origen: currencySource,
      monto_destino: Number(destinationAmount.toFixed(3)),
      moneda_destino: currencyDestination,
      tipo_cambio: exchangeRate,
    };
    return exchangeRateDto;
  }
}

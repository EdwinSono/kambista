import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeRateService } from './exchange-rate.service';
import { NotFoundException } from '@nestjs/common';

describe('ExchangeRateService', () => {
  let service: ExchangeRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeRateService],
    }).compile();

    service = module.get<ExchangeRateService>(ExchangeRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateExchangeRate', () => {
    it('should calculate exchange rate successfully', () => {
      const payload = {
        source_amount: 10,
        source_currency: 'PEN',
        destination_currency: 'USD',
      };

      const result = service.calculateExchangeRate(payload);
      expect(result).toBeDefined();
    });

    it('should handle case where exchange rate is not found', () => {
      const payload = {
        source_amount: 10,
        source_currency: 'PEN',
        destination_currency: 'InvalidCurrency',
      };

      const calculateExchangeRate = () => {
        service.calculateExchangeRate(payload);
      };
      expect(calculateExchangeRate).toThrow(NotFoundException);
    });
  });
});

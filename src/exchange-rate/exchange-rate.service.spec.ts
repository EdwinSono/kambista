import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeRateService } from './exchange-rate.service';

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
      // Mock data or use actual data for testing
      const payload = {
        source_amount: 10,
        source_currency: 'PEN',
        destination_currency: 'USD',
      };

      const result = service.calculateExchangeRate(payload);

      // Add your assertions based on the expected result
      expect(result).toBeDefined();
      // Add more assertions as needed
    });

    it('should handle case where exchange rate is not found', () => {
      // Mock data or use actual data for testing
      const payload = {
        source_amount: 10,
        source_currency: 'PEN',
        destination_currency: 'InvalidCurrency',
      };

      const result = service.calculateExchangeRate(payload);

      // Add your assertions based on the expected result when rate is not found
      expect(result).toBeNull();
      // Add more assertions as needed
    });
  });
});

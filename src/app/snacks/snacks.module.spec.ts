import { SnacksModule } from './snacks.module';

describe('SnacksModule', () => {
  let snacksModule: SnacksModule;

  beforeEach(() => {
    snacksModule = new SnacksModule();
  });

  it('should create an instance', () => {
    expect(snacksModule).toBeTruthy();
  });
});

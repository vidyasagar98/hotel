import { BreakfastModule } from './breakfast.module';

describe('BreakfastModule', () => {
  let breakfastModule: BreakfastModule;

  beforeEach(() => {
    breakfastModule = new BreakfastModule();
  });

  it('should create an instance', () => {
    expect(breakfastModule).toBeTruthy();
  });
});

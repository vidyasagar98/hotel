import { DiabeticModule } from './diabetic.module';

describe('DiabeticModule', () => {
  let diabeticModule: DiabeticModule;

  beforeEach(() => {
    diabeticModule = new DiabeticModule();
  });

  it('should create an instance', () => {
    expect(diabeticModule).toBeTruthy();
  });
});

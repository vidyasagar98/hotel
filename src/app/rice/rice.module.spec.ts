import { RiceModule } from './rice.module';

describe('RiceModule', () => {
  let riceModule: RiceModule;

  beforeEach(() => {
    riceModule = new RiceModule();
  });

  it('should create an instance', () => {
    expect(riceModule).toBeTruthy();
  });
});

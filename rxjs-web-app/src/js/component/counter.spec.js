import {default as counterFactory} from "./counter";

describe('CounterComponent', () => {
  let component;

  beforeEach(() => {
    component = counterFactory(5); 
  });

  it('should initialize the counter to 0', () => {
    component = counterFactory(); 
    expect(component.count).toEqual(0);
  });

  it('should initialize the counter to a value', () => {
    expect(component.count).toEqual(5)
  });
});
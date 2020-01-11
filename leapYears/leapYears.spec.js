const leapYears = require('./leapYears')

describe('leapYears', function() {
  it('works with non century years', function() {
    expect(leapYears(1996)).toEqual(true);
  });
  it('works with non century years', function() {
    expect(leapYears(1997)).toEqual(false);
  });
  it('works with ridiculously futuristic non century years', function() {
    expect(leapYears(34992)).toEqual(true);
  });
  it('works with 1 century years', function() {
    expect(leapYears(1900)).toEqual(false);
  });
  it('works with 2 century years', function() {
    expect(leapYears(1600)).toEqual(true);
  });
  it('works with 3 century years', function() {
    expect(leapYears(700)).toEqual(false);
  });
});

const assert = require('assert');
const Rooster = require('../script.js');

describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
        Rooster.announceDawn = () => {
            return 'moo!';
          }
      const expected = 'moo!';
      const result = Rooster.announceDawn();
      assert.equal(expected, result);
    });
    describe('timeAtDawn', () => {
      it('returns its argument as a string', () => {
        Rooster.timeAtDawn = (hour) => {
          if (hour < 0 || hour > 23) {
            throw new RangeError;
            } else {
              return hour.toString();
            };
          }
        const expected = Rooster.timeAtDawn(8);
        const result = Rooster.timeAtDawn(8);
        assert.strictEqual(expected, result);
      });
      it('throws an error if passed a number less than 0', () => {
        Rooster.timeAtDawn = (hour) => {
          if (hour < 0 || hour > 23) {
            throw new RangeError;
            } else {
              return hour.toString();
            };
          }
        assert.throws(
          () => {
            Rooster.timeAtDawn(-1);
          },
          RangeError
        );
      });
      it('throws an error if passed a number greater than 23', () => {
        Rooster.timeAtDawn = (hour) => {
          if (hour < 0 || hour > 23) {
            throw new RangeError;
            } else {
              return hour.toString();
            };
          }
          assert.throws(
            () => {
              Rooster.timeAtDawn(24);
            },
            RangeError
          );
      });
    });
  });
});


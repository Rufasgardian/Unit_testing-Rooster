const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();

      assert.strictEqual(actual, expected);
    });
  });
    describe('.timeAtDawn', () => {
      it('returns its argument as a string', () => {
        const actual = Rooster.timeAtDawn(12);
        assert.strictEqual(actual, '12');
      });
    });
    
    describe('.timeAtDawn', () => {
      it('throws an error if passed a number less than 0', () => {
        const RangeError = 'Its Less than 0';
        assert.throws(() => {
          if(Rooster.timeAtDawn(hour) >= 0){
            Rooster.timeAtDawn(hour);
          }
        },
          RangeError
        );
      });
    });

  describe('.timeAtDawn', () => {
      it('throws an error if passed a number greater than 23', () => {
        const RangeError = 'Its greater than 23';
        assert.throws(() => {
          if(Rooster.timeAtDawn(hour) <= 23){
            Rooster.timeAtDawn(hour);
          }
        },
          RangeError
        );
      });
    });

});
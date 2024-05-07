import { heroarray } from '../matchers.js';

test('sorted hero list', () => {
    let sortlist = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]

      expect(sortlist).toEqual(heroarray);

});
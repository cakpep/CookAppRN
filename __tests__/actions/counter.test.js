import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../../src/constants/ActionTypes';
import { increment, decrement } from '../../src/actions/CounterActions';


test('increment action', () => {
    expect(increment().type).toBe(COUNTER_INCREMENT)
});

test('decrement action', () => {
    expect(decrement().type).toBe(COUNTER_DECREMENT)
});

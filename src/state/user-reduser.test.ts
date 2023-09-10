import {userReduser} from './user-reduser';

test('user render should increment only age', () => {
    const startState = { age:20, childrenCount: 2, name: 'Dimysh' };
    const endState = userReduser(startState, {type: 'INCREMENT-AGE'});
    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test('user render should increment only childrenCount', () => {
    const startState = { age:20, childrenCount: 2, name: 'Dimysh' };
    const endState = userReduser (startState,{type:'INCREMENT-CHILDREN-COUNT'});
    expect(endState.childrenCount).toBe(3);
    expect(endState.age).toBe(20);
});

test('user render should change name of user', () => {
    const startState = { age:20, childrenCount: 2, name: 'Dimysh' };
    const newName='Victor';
    const endState = userReduser (startState,{type:'CHANGE-NAME', newName:newName});
    expect(endState.name).toBe(newName);
});


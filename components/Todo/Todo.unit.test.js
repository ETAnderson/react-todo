const { expect } = require('@jest/globals')
const { test } = require('picomatch')
const { Todo } = require('./Todo')

test('Todo should be an object', () => {
    expect(Todo()).toBe({});
});
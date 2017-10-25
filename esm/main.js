import random, {random as defaultValue} from './module.js';

console.assert(defaultValue === random);

global.module = random;
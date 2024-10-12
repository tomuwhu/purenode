cica = require('./x.js');
console.log(cica.szoroz(2, 3));
var Q = require('spque').Queue
var Levenshtein = require('levenshtein')
let q = new Q()

q.put(2)
q.put(4)
var t = new Levenshtein( 'jézuska', 'géppuska' ).distance
console.log(
    q.size, q.get(), q.get(), t
)
//2 2
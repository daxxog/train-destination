/* TrainDestination / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    TrainDestination = require('../train-destination.min.js');

vows.describe('basic').addBatch({
    'TrainDestination': {
        topic: function() {
        	return TrainDestination;
        },
        'is function': function(topic) {
            assert.strictEqual(typeof topic, 'function');
        },
    },
    'new TrainDestination(\'Denver\')': {
        topic: function() {
        	return new TrainDestination('Denver');
        },
        '.name === \'Denver\'': function(denver) {
            assert.strictEqual(denver.name, 'Denver');
        },
    }
}).export(module);
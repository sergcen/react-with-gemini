const suite = require('../../suite');

suite({
    data: ['Button/default', 'Button/link', 'Button/action'],
    selector: '.button',
    before: function(actions, find) {
        this.button = find('.button');
    },
    states: {
        hover: function(actions, find) {
            actions.mouseMove(this.button);
        },
        pressed: function(actions, find) {
            actions.mouseDown(this.button);
        }
    }
});

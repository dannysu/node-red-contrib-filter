'use strict';

module.exports = function(RED) {
    function FilterNode(config) {
        RED.nodes.createNode(this, config);

        const node = this;
        node.on('input', function(msg) {
        });
    }

    RED.nodes.registerType('filter', FilterNode);
};

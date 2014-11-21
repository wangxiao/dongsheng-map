require.config({
    paths: {
        zepto: './base-library/zepto'
    },
    shim: {
        zepto: {
            exports: '$'
        }
    }
});

require(['app'], function () {});
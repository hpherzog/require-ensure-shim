
Why this shim?
==============

If you use webpacks code splitting feature with shared javascript modules that you want to use server side with node.js, you need to shim this function to require your modules properly.

How to use
==========

Put the following code in every file you define a split point with require.ensure. It is important that you first shim and then define the split point.

    require('require-ensure-shim').shim(require);

    require.ensure(['./module1'], function(require){

        var module1 = require('./module1');
        module1();
    });
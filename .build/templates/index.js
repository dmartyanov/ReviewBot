(function(dust){dust.register("index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<h1>Hello, ").f(ctx.get(["name"], false),ctx,"h").w("</h1>");}body_1.__dustBody=!0;return body_0}(dust));
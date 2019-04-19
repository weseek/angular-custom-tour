"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_1 = require("./app");
function main() {
    if ('prod' === process.env.ENV) {
        // Production
        core_1.enableProdMode();
    }
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule)
        .catch(function (err) {
        console.log(err);
    });
}
document.addEventListener('DOMContentLoaded', function () { return main(); });
//# sourceMappingURL=index.js.map
"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./hint.component");
var i3 = require("./hint.service");
var styles_HintComponent = [];
exports.RenderType_HintComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_HintComponent, data: {} });
function View_HintComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, 'div', [['class',
                'hint-overlay']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.dismiss() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_HintComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_HintComponent_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.show;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
exports.View_HintComponent_0 = View_HintComponent_0;
function View_HintComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'tour-overlay', [], null, null, null, View_HintComponent_0, exports.RenderType_HintComponent)), i0.ɵdid(1, 49152, null, 0, i2.HintComponent, [i3.HintService], null, null)], null, null);
}
exports.View_HintComponent_Host_0 = View_HintComponent_Host_0;
exports.HintComponentNgFactory = i0.ɵccf('tour-overlay', i2.HintComponent, View_HintComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2thaXNodXUwMTIzL3RtcC9hbmd1bGFyLWN1c3RvbS10b3VyL3NyYy9oaW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9rYWlzaHV1MDEyMy90bXAvYW5ndWxhci1jdXN0b20tdG91ci9zcmMvaGludC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9rYWlzaHV1MDEyMy90bXAvYW5ndWxhci1jdXN0b20tdG91ci9zcmMvaGludC5jb21wb25lbnQudHMuSGludENvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMva2Fpc2h1dTAxMjMvdG1wL2FuZ3VsYXItY3VzdG9tLXRvdXIvc3JjL2hpbnQuY29tcG9uZW50LnRzLkhpbnRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiaGludC1vdmVybGF5XCIgKm5nSWY9XCJzaG93XCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPjwvZGl2PiIsIjx0b3VyLW92ZXJsYXk+PC90b3VyLW92ZXJsYXk+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO0lBQUE7SUFBQTtJQUF1QztNQUFBO01BQUE7SUFBQTtJQUF2QztFQUFBOzs7b0JBQUE7TUFBQSw4QkFBQTtvQkFBQTs7SUFBMEI7SUFBMUIsV0FBMEIsU0FBMUI7Ozs7b0JDQUE7TUFBQTs4QkFBQSxVQUFBO01BQUE7OzsifQ==
//# sourceMappingURL=hint.component.ngfactory.js.map
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
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21pcmF4ZXMvRGV2L21tLWhpbnQvc3JjL2hpbnQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL21pcmF4ZXMvRGV2L21tLWhpbnQvc3JjL2hpbnQuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvbWlyYXhlcy9EZXYvbW0taGludC9zcmMvaGludC5jb21wb25lbnQudHMuSGludENvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvbWlyYXhlcy9EZXYvbW0taGludC9zcmMvaGludC5jb21wb25lbnQudHMuSGludENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJoaW50LW92ZXJsYXlcIiAqbmdJZj1cInNob3dcIiAoY2xpY2spPVwiZGlzbWlzcygpXCI+PC9kaXY+IiwiPHRvdXItb3ZlcmxheT48L3RvdXItb3ZlcmxheT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7SUFBQTtJQUFBO0lBQXVDO01BQUE7TUFBQTtJQUFBO0lBQXZDO0VBQUE7OztvQkFBQTtNQUFBLDhCQUFBO29CQUFBOztJQUEwQjtJQUExQixXQUEwQixTQUExQjs7OztvQkNBQTtNQUFBOzhCQUFBLFVBQUE7TUFBQTs7OyJ9
//# sourceMappingURL=hint.component.ngfactory.js.map
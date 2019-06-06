"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var hint_service_1 = require("./hint.service");
var core_1 = require("@angular/core");
var HintComponent = /** @class */ (function () {
    function HintComponent(hintService) {
        var _this = this;
        this.hintService = hintService;
        this.hintService.overlay$.subscribe(function (data) { return _this.show = data; });
    }
    HintComponent.prototype.dismiss = function () {
        if (this.hintService.hintOptions.dismissOnOverlay)
            this.hintService.overlayNext();
    };
    HintComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line
            selector: 'tour-overlay',
            template: "<div class=\"hint-overlay\" *ngIf=\"show\" (click)=\"dismiss()\"></div>",
        }),
        __metadata("design:paramtypes", [hint_service_1.HintService])
    ], HintComponent);
    return HintComponent;
}());
exports.HintComponent = HintComponent;
//# sourceMappingURL=hint.component.js.map
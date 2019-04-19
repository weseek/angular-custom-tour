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
var core_1 = require("@angular/core");
var hint_service_1 = require("../../src/hint.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(hintService) {
        this.hintService = hintService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.hintService.showingStep$.subscribe(function (step) {
            console.log('STEPPY, ', step);
        });
        this.hintService.finish$.subscribe(function (finish) {
            console.log('Finished, ', finish);
        });
    };
    AppComponent.prototype.startTour = function () {
        this.hintService.initialize({ defaultPosition: 'bottom' });
    };
    AppComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line
            selector: 'angular-custom-tour-app',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './template.html',
            providers: [hint_service_1.HintService],
            styleUrls: [
                '../../styles/main.css',
                './style.css',
            ],
        }),
        __metadata("design:paramtypes", [hint_service_1.HintService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=component.js.map
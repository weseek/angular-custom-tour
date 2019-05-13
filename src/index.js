"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hint_service_1 = require("./hint.service");
exports.HintService = hint_service_1.HintService;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var hint_component_1 = require("./hint.component");
var tour_component_1 = require("./intro-tour/tour.component");
exports.TourComponent = tour_component_1.TourComponent;
var HintModule = /** @class */ (function () {
    function HintModule() {
    }
    HintModule_1 = HintModule;
    HintModule.forRoot = function () {
        return {
            ngModule: HintModule_1,
            providers: [
                hint_service_1.HintService,
            ],
        };
    };
    HintModule = HintModule_1 = __decorate([
        core_1.NgModule({
            declarations: [hint_component_1.HintComponent, tour_component_1.TourComponent],
            exports: [hint_component_1.HintComponent, tour_component_1.TourComponent],
            imports: [common_1.CommonModule],
        })
    ], HintModule);
    return HintModule;
    var HintModule_1;
}());
exports.HintModule = HintModule;
//# sourceMappingURL=index.js.map
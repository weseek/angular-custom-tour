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
var hint_service_1 = require("../hint.service");
var variables_1 = require("../variables");
var TourComponent = /** @class */ (function () {
    function TourComponent(hintService) {
        this.hintService = hintService;
        this.nextEventEmitter = new core_1.EventEmitter();
        this.prevEventEmitter = new core_1.EventEmitter();
        this.exitEventEmitter = new core_1.EventEmitter();
    }
    TourComponent.prototype.ngOnInit = function () {
        this.hintService.register(this.selector, this);
    };
    TourComponent.prototype.showStep = function () {
        this.hintService.showingStep$.next(this);
        this.position = this.position || this.hintService.hintOptions.defaultPosition;
        this.order = +this.order || this.hintService.hintOptions.defaultOrder;
        var highlightedElement = document.getElementById(this.selector);
        if (highlightedElement) {
            highlightedElement.style.zIndex = variables_1.HintConfig.Z_INDEX;
            if (this.hintService.hintOptions.elementsDisabled) {
                this.disableClick(highlightedElement);
            }
            if (this.hintService.hintOptions.applyRelative) {
                highlightedElement.classList.add('hint-relative');
            }
            switch (this.position) {
                case 'top':
                    this.transformClass = 'transformX_50 transformY_100';
                    this.topPos = highlightedElement.offsetTop - this.hintService.hintOptions.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case 'bottom':
                    this.transformClass = 'transformX_50';
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight + this.hintService.hintOptions.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case 'left':
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft - this.hintService.hintOptions.defaultLayer;
                    this.transformClass = 'transformY_50 transformX_100';
                    break;
                case 'right':
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hintService.hintOptions.defaultLayer;
                    this.transformClass = 'transformY_50';
                    break;
                case 'neutral':
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hintService.hintOptions.defaultLayer;
                    this.transformClass = this.customCss;
                    break;
                default:
                    throw 'Invalid hint position ->' + this.position;
            }
        }
        else {
            this.topPos = 0;
            this.leftPos = 0;
        }
        this.showme = true;
        this.hasNext = this.hintService.hasNext();
        this.hasPrev = this.hintService.hasPrev();
    };
    TourComponent.prototype.hideStep = function () {
        var highlightedElement = document.getElementById(this.selector);
        if (highlightedElement) {
            highlightedElement.style.zIndex = '0';
            this.enableClick(highlightedElement);
            highlightedElement.classList.remove('hint-relative');
        }
        this.showme = false;
    };
    TourComponent.prototype.exit = function () {
        this.exitEventEmitter.emit();
        this.hintService.end();
    };
    TourComponent.prototype.next = function () {
        this.nextEventEmitter.emit();
        this.hideStep();
        this.hintService.showNext();
    };
    TourComponent.prototype.prev = function () {
        this.prevEventEmitter.emit();
        this.hideStep();
        this.hintService.showPrev();
    };
    TourComponent.prototype.disableClick = function (element) {
        element.classList.add('hint-disabled');
    };
    TourComponent.prototype.enableClick = function (element) {
        element.classList.remove('hint-disabled');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "selector", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TourComponent.prototype, "order", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "customCss", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TourComponent.prototype, "nextEventEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TourComponent.prototype, "prevEventEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TourComponent.prototype, "exitEventEmitter", void 0);
    TourComponent = __decorate([
        core_1.Component({
            selector: variables_1.HintConfig.HINT_TAG,
            template: "<div class=\"intro-tour-hint-wrapper {{transformClass}} step{{order}} {{position}}\"\n  *ngIf=\"showme\" [ngStyle]=\"{'top': topPos+'px', 'left': leftPos+'px'}\" >\n    <div class=\"header\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"content\"><ng-content></ng-content></div>\n    <div class=\"footer\">\n      <a class=\"navigate-btn prev\" *ngIf=\"hasPrev\" (click)=\"prev()\">&#8592;</a>\n      <a class=\"navigate-btn next\" *ngIf=\"hasNext\" (click)=\"next()\">&#8594;</a>\n      <a class=\"navigate-btn exit\" (click)=\"exit()\">&#10006;</a>\n    </div>\n  </div>",
        }),
        __metadata("design:paramtypes", [hint_service_1.HintService])
    ], TourComponent);
    return TourComponent;
}());
exports.TourComponent = TourComponent;
//# sourceMappingURL=tour.component.js.map
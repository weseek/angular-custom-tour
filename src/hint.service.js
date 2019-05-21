"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var options_1 = require("./options");
var HintService = /** @class */ (function () {
    function HintService() {
        this.anchors = {};
        this.overlay$ = new Subject_1.Subject();
        this.registration$ = new Subject_1.Subject();
        this.finish$ = new Subject_1.Subject();
        this.showingStep$ = new Subject_1.Subject();
    }
    /**
     * Initialize hint service
     * @method initialize
     * @param  {HintOptions} options init options
     * @param  {number} startOrder start order
     * @return void
     */
    HintService.prototype.initialize = function (options, startOrder) {
        this.hintOptions = Object.assign(new options_1.HintOptions(), options || new options_1.HintOptions());
        var nodes = document.getElementsByTagName(this.hintOptions.stepTag);
        this.steps = this.initSteps(nodes);
        var startStepIndex;
        // Find same order on startOrder and Steps
        this.steps.some(function (step, index) {
            if (step.order === startOrder) {
                startStepIndex = index;
                return true;
            }
        });
        if (startStepIndex == null) {
            startStepIndex = 0;
        }
        this.startAt(startStepIndex);
        this.overlay$.next(true);
    };
    /**
     * Show step
     * @method show
     * @param  {Step} step [description]
     */
    HintService.prototype.show = function (step) {
        var anchor = this.anchors[step.selector];
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * Show step next to {Step} this.currentStep
     * @method showNext
     */
    HintService.prototype.showNext = function () {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
        var anchor = this.anchors[this.currentStep.selector];
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * On overlay click behaviour
     * @method overlayNext
     */
    HintService.prototype.overlayNext = function () {
        if (this.hasNext()) {
            this.anchors[this.currentStep.selector].hideStep();
            this.showNext();
        }
        else {
            this.end();
        }
    };
    /**
     * Show step previous to {Step} this.currentStep
     * @method showPrev
     */
    HintService.prototype.showPrev = function () {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) - 1];
        var anchor = this.anchors[this.currentStep.selector];
        if (!anchor) {
            return;
        }
        anchor.showStep();
    };
    /**
     * Register hint component
     * @method register
     * @param  {string}            selector  binded to
     * @param  {TourComponent} component itself
     */
    HintService.prototype.register = function (selector, component) {
        if (this.anchors[selector]) {
            throw 'selector ' + selector + ' already registered!';
        }
        this.anchors[selector] = component;
        this.registration$.next(true);
    };
    /**
     * Is {Step} this.currentStep has next
     * @method hasNext
     * @return {boolean}
     */
    HintService.prototype.hasNext = function () {
        return this.steps.indexOf(this.currentStep) < this.steps.length - 1;
    };
    /**
     * Is {Step} this.currentStep has previous
     * @method hasPrev
     * @return {boolean}
     */
    HintService.prototype.hasPrev = function () {
        return this.steps.indexOf(this.currentStep) > 0;
    };
    /**
     * Finalize our hint tour.
     * @method end
     */
    HintService.prototype.end = function () {
        this.overlay$.next(false);
        var anchor = this.anchors[this.currentStep.selector];
        if (!anchor) {
            return;
        }
        this.currentStep = undefined;
        anchor.hideStep();
        this.finish$.next(true);
    };
    /**
     * Start hint tour at some position
     * @method startAt
     * @param  {number} stepId position in this.steps
     */
    HintService.prototype.startAt = function (stepId) {
        this.currentStep = this.steps[stepId];
        this.show(this.currentStep);
    };
    /**
     * Convert Element[] to Step[]
     * @method initSteps
     * @param  {NodeListOf<Element>} nodes
     * @return {Step[]}
     */
    HintService.prototype.initSteps = function (nodes) {
        var steps = [];
        for (var i = 0; i < nodes.length; i++) {
            steps.push({
                selector: nodes[i].getAttribute('selector'),
                order: +nodes[i].getAttribute('order') || this.hintOptions.defaultOrder,
            });
        }
        return steps = steps.sort(function (el1, el2) {
            return el1.order - el2.order;
        });
    };
    HintService.prototype.putOverlay = function () {
        document.getElementsByTagName('body');
    };
    HintService = __decorate([
        core_1.Injectable()
    ], HintService);
    return HintService;
}());
exports.HintService = HintService;
//# sourceMappingURL=hint.service.js.map
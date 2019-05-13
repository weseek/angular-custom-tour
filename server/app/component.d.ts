import { OnInit } from '@angular/core';
import { HintService } from '../../src/hint.service';
export declare class AppComponent implements OnInit {
    hintService: HintService;
    constructor(hintService: HintService);
    ngOnInit(): void;
    startTour(): void;
}

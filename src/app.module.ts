import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Ionic4MaskDirective } from './directives/ionic4-mask.directive';


@NgModule({
    declarations: [
        Ionic4MaskDirective
    ],
    exports: [
        Ionic4MaskDirective
    ],
    imports: [
        CommonModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class BrMaskerModule { }

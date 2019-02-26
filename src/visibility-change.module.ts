import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityChangeDirective } from './visibility-change.directive';

@NgModule({
    declarations: [ VisibilityChangeDirective ],
    imports: [ CommonModule ],
    exports: [VisibilityChangeDirective]
})
export class VisibilityChangeModule {}
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LdrIconComponent } from '../icon/icon.component';
import { LdrInputDirective } from '../editor/input.directive';

@Component({
	selector: 'ldr-textbox',
	imports: [LdrIconComponent, FormsModule],
	templateUrl: './textbox.component.html',
	styleUrl: './textbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LdrTextboxComponent),
            multi: true
        }
    ],
})
export class LdrTextboxComponent extends LdrInputDirective {

}

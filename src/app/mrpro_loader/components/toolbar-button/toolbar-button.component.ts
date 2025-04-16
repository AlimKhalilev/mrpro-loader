import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';

@Component({
	selector: 'ldr-toolbar-button',
	imports: [LdrIconComponent],
	templateUrl: './toolbar-button.component.html',
	styleUrl: './toolbar-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrToolbarButtonComponent {
    /** Событие клика на кнопку */
    @Output() onClick = new EventEmitter();

    /** Название иконки из набора */
    @Input() icon: string = '';
}

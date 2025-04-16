import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LdrButtonPallete } from '../../interfaces/button';

@Component({
	selector: 'ldr-button',
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrButtonComponent {
    /** Событие клика на кнопку */
    @Output() onClick = new EventEmitter();

    /** Палитра кнопки */
    @Input() pallete: LdrButtonPallete = 'purple';

    /** Текст кнопки */
    @Input() text: string = '';

    /** Флаг показа загрузки */
    @Input() loading: boolean = false;
}

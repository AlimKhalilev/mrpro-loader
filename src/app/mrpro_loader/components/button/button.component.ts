import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LdrButtonPallete } from '../../interfaces/button';

@Component({
	selector: 'ldr-button',
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrButtonComponent {
    /** Палитра кнопки */
    @Input() pallete: LdrButtonPallete = 'purple';

    /** Текст кнопки */
    @Input() text: string = '';

    /** Флаг показа загрузки */
    @Input() loading: boolean = false;
}

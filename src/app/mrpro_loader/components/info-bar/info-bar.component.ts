import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LdrInfoBarType } from '../../interfaces/info-bar';

@Component({
	selector: 'ldr-info-bar',
	imports: [],
	templateUrl: './info-bar.component.html',
	styleUrl: './info-bar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrInfoBarComponent {
    /** Тип информационной строки */
    @Input() type: LdrInfoBarType = 'info';

    /** Текст информационной строки */
    @Input() text: string = '';
}

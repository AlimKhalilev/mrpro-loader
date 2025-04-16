import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ldr-icon',
	imports: [],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrIconComponent {
    /** Название иконки из набора */
    @Input() icon: string = '';

    /** Размер иконки */
    @Input() size?: number;
}

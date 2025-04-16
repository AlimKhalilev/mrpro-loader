import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';

@Component({
	selector: 'ldr-toolbar-button',
	imports: [LdrIconComponent],
	templateUrl: './toolbar-button.component.html',
	styleUrl: './toolbar-button.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrToolbarButtonComponent {
    /** Название иконки из набора */
    @Input() icon: string = '';
}

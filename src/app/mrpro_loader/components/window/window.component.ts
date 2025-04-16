import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LdrToolbarButtonComponent } from '../toolbar-button/toolbar-button.component';

@Component({
	selector: 'ldr-window',
	imports: [LdrToolbarButtonComponent],
	templateUrl: './window.component.html',
	styleUrl: './window.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrWindowComponent {
    /** Событие клика на кнопку тулбара */
    @Output() toolbarBtnClick: EventEmitter<string> = new EventEmitter<string>();

    /** Флаг показа кнопки назад */
    @Input() showBackBtn: boolean = false;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ldr-details',
	imports: [],
	templateUrl: './details.component.html',
	styleUrl: './details.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrDetailsComponent {
    @Input() caption: string = '';
    @Input() value: string = '';
    @Input() valueColor: string = '';
}

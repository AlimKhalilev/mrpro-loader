import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';

@Component({
	selector: 'ldr-console',
	imports: [LdrIconComponent],
	templateUrl: './console.component.html',
	styleUrl: './console.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrConsoleComponent {
    @ContentChildren('ref', { descendants: true, read: ElementRef }) items: QueryList<ElementRef> | null = null;

    getAllInnerText(elements: QueryList<ElementRef>): string {
        return Array.from(elements).map(element => element.nativeElement.innerText).join('\n');
    }

    copy() {
        if (this.items) {
            const text: string = this.getAllInnerText(this.items);
            navigator.clipboard.writeText(text);
            console.log('Скопировано:');
            console.log(text);
        }
    }
}

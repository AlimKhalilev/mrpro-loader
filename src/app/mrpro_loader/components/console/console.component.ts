import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { LdrIconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ldr-console',
	imports: [CommonModule, LdrIconComponent],
	templateUrl: './console.component.html',
	styleUrl: './console.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LdrConsoleComponent implements AfterContentInit {
    @ContentChildren('ref', { descendants: true, read: ElementRef }) items: QueryList<ElementRef> | null = null;

    ngAfterContentInit(): void {
        console.log(this.items);
    }

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

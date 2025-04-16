import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { LdrEditorDirective } from './editor.directive';

/** Базовая директива для текстовых инпутов */
@Directive()
export class LdrInputDirective extends LdrEditorDirective {
    /** Событие очистки поля ввода через кнопку */
	@Output() onClearField: EventEmitter<void> = new EventEmitter<void>();

    /** Событие фокуса инпута */
	@Output() onFocus: EventEmitter<void> = new EventEmitter<void>();

    /** Событие потери фокуса инпута */
	@Output() onBlur: EventEmitter<void> = new EventEmitter<void>();

    /** Событие нажатия клавиши на клавиатуре */
	@Output() onKeyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** Событие отпускания клавиши на клавиатуре */
	@Output() onKeyUp: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** Событие клика на инпут поле */
	@Output() onClick: EventEmitter<void> = new EventEmitter<void>();

    /** Опциональная ширина поля ввода */
    @Input() width: number = 0;

    /** Placeholder input элемента */
    @Input() placeholder: string = '';

    /** Опциональная иконка в начале инпута */
    @Input() iconStart: string = '';

    /** Опциональный цвет иконки в начале инпута */
    @Input() iconStartColor: string = '';

    /** Опциональный картинка в начале инпута */
    @Input() pictureStart: string = '';

    /** Опциональный инлайн свг в начале инпута */
    @Input() svgStart: string = '';

    /** Программный фокус (когда состояния фокуса передается через переменнную) */
    @Input() programFocus: boolean = false;

    /** Флаг отключения показа кнопки очистки поля ввода */
    @Input() hideClearBtn: boolean = false;

    /** Флаг высоты относительно контейнера */
    @Input() heightByContainer: boolean = false;

    /** Метод очистки поля без погружения события клика на кнопку */
    public clearField(e: Event, value: string | null) {
        e.stopPropagation();
        this.updateModel(value);
        this.onClearField.emit();
    }
}

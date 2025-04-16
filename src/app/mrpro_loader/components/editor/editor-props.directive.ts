import { Directive, Input } from '@angular/core';

/** Директива базовых входных параметров редакторов */
@Directive()
export class LdrEditorPropsDirective {
    /** Подпись инпута */
    @Input() label: string = '';

    /** Позиция подписи инпута */
    @Input() labelPos: 'top' | 'left' = 'top';

    /** Ширина подписи инпута (в px) */
    @Input() labelWidth: number = 0;

    /** Статус обязательного объекта */
    @Input() required: boolean = false;

    /** Статус объекта (только для чтения) */
    @Input() readonly: boolean = false;

    /** Всплывающая подсказка */
    @Input() tooltip: string = '';

    /** Подсказка поля */
    @Input() hint: string = '';

    /** Текст ошибки поля */
    @Input() error: string = '';
}

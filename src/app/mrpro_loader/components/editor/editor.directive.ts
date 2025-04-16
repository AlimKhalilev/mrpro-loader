import { Directive, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { LdrEditorPropsDirective } from './editor-props.directive';

/** Базовая директива для всех editors инпутов */
@Directive()
export class LdrEditorDirective extends LdrEditorPropsDirective implements ControlValueAccessor {
    /** Уникальный идентификатор для назначения ключей инпутов */
    protected static uniqueId: number = 0;

    /** Поле уникального id для инпута */
    @Input() id: string = 'mc-editor-id-' + LdrEditorDirective.uniqueId++;

    /** Статус неактивности объекта */
    @Input() disabled: boolean = false;

    /** Содержит текущее значение (модель) инпута (также принимает props значение) */
    @Input('value') model: unknown = null;

    /** Вызывается, когда модель была изменена */
    onChange: (value: unknown) => void = () => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    /** Метод, который мы вызываем для изменения модели */
    public updateModel(model: unknown): void {
        this.model = model;
        this.onChange(this.model);
    }

    /**
     * Метод, который вызывается когда модель изменяется из вне (когда меняем переменную модели или меняем ее через UI)
     * @param value значение
     */
    public writeValue(value: unknown): void {
        this.model = value;
    }

    /**
     * Регистрирует функцию обратного вызова, которую следует вызывать при изменении значения элемента управления в интерфейсе
     * @param fn callback функция
     */
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Регистрирует функцию обратного вызова, которую следует вызывать, когда элемент управления получает событие потери фокуса.
     * @param fn callback функция
     */
    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /** Функция обратного вызова, которая вызывается, когда статус [disabled] у контрола в форме изменен */
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}

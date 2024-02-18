import {Component, Input} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {ControlValueAccessor, NgControl,} from "@angular/forms";

@Component({
    selector: 'input-text',
    standalone: true,
    imports: [
        JsonPipe,
    ],
    templateUrl: 'input-text.component.html',
    styleUrl: 'input-text.component.scss',
    providers: []
})

export class InputTextComponent implements ControlValueAccessor {
    @Input() label: string = ''
    @Input() placeHolder: string = ''
    @Input() required: boolean = false
    @Input() value: string = ''

    @Input({required: true}) name!: string
    @Input({required: true}) formControlName!: string

    touched: boolean = false
    disabled: boolean = false

    constructor(protected control: NgControl) {
        this.control.valueAccessor = this;
    }

    /** START ---- ControlValueAccessor interface implementation ---- **/
    onChange = (value: string) => {
    }

    onTouched = () => {
    }

    writeValue(value: any): void {
        this.value = value
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled
    }

    /** END ---- ControlValueAccessor interface implementation ---- **/

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    markAsChanged($event: Event) {
        this.markAsTouched()
        const value: string = (<HTMLInputElement>$event.target).value
        this.onChange(value)
    }
}

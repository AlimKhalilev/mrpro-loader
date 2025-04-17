import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LdrWindowComponent } from '../../mrpro_loader/components/window/window.component';
import { LdrButtonComponent } from '../../mrpro_loader/components/button/button.component';
import { LdrDetailsComponent } from '../../mrpro_loader/components/details/details.component';
import { LdrInfoBarComponent } from '../../mrpro_loader/components/info-bar/info-bar.component';
import { LdrTextboxComponent } from '../../mrpro_loader/components/textbox/textbox.component';
import { LdrWarningComponent } from '../../mrpro_loader/components/warning/warning.component';
import { LdrConsoleComponent } from '../../mrpro_loader/components/console/console.component';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'ldr-home-page',
	imports: [
		LdrButtonComponent,
		LdrInfoBarComponent,
		LdrTextboxComponent,
		LdrDetailsComponent,
		LdrWarningComponent,
		LdrConsoleComponent,
		LdrWindowComponent,
        FormsModule
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    text1: string = '';
    text2: string = '';

    btnClick(btn: string) {
        console.log(btn);
    }

    activate() {
        console.log('activate');
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LdrWindowComponent } from '../../mrpro_loader/components/window/window.component';
import { LdrButtonComponent } from '../../mrpro_loader/components/button/button.component';
import { LdrDetailsComponent } from '../../mrpro_loader/components/details/details.component';
import { LdrInfoBarComponent } from '../../mrpro_loader/components/info-bar/info-bar.component';
import { LdrTextboxComponent } from '../../mrpro_loader/components/textbox/textbox.component';
import { LdrToolbarButtonComponent } from '../../mrpro_loader/components/toolbar-button/toolbar-button.component';
import { LdrWarningComponent } from '../../mrpro_loader/components/warning/warning.component';
import { LdrConsoleComponent } from '../../mrpro_loader/components/console/console.component';

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
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}

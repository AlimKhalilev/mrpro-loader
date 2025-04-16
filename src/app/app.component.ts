import { Component } from '@angular/core';
import { LdrButtonComponent } from './mrpro_loader/components/button/button.component';
import { LdrInfoBarComponent } from './mrpro_loader/components/info-bar/info-bar.component';
import { LdrToolbarButtonComponent } from './mrpro_loader/components/toolbar-button/toolbar-button.component';
import { LdrTextboxComponent } from './mrpro_loader/components/textbox/textbox.component';
import { LdrDetailsComponent } from './mrpro_loader/components/details/details.component';
import { LdrWarningComponent } from './mrpro_loader/components/warning/warning.component';
import { LdrWindowComponent } from './mrpro_loader/components/window/window.component';

@Component({
	selector: 'app-root',
	imports: [LdrButtonComponent, LdrInfoBarComponent, LdrToolbarButtonComponent, LdrTextboxComponent, LdrDetailsComponent, LdrWarningComponent, LdrWindowComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'mrpro-loader';
}

import { Component } from '@angular/core';
import { LdrButtonComponent } from './mrpro_loader/components/button/button.component';
import { LdrInfoBarComponent } from './mrpro_loader/components/info-bar/info-bar.component';
import { LdrToolbarButtonComponent } from './mrpro_loader/components/toolbar-button/toolbar-button.component';

@Component({
	selector: 'app-root',
	imports: [LdrButtonComponent, LdrInfoBarComponent, LdrToolbarButtonComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'mrpro-loader';
}

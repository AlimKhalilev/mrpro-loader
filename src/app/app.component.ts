import { Component } from '@angular/core';
import { LdrButtonComponent } from './mrpro_loader/components/button/button.component';
import { LdrInfoBarComponent } from './mrpro_loader/components/info-bar/info-bar.component';

@Component({
	selector: 'app-root',
	imports: [LdrButtonComponent, LdrInfoBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'mrpro-loader';
}

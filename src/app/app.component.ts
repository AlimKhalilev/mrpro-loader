import { Component } from '@angular/core';
import { LdrButtonComponent } from './mrpro_loader/components/button/button.component';

@Component({
	selector: 'app-root',
	imports: [LdrButtonComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'mrpro-loader';
}

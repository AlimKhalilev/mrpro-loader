import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LdrButtonComponent } from '../../mrpro_loader/components/button/button.component';
import { LdrDetailsComponent } from '../../mrpro_loader/components/details/details.component';
import { LdrInfoBarComponent } from '../../mrpro_loader/components/info-bar/info-bar.component';
import { LdrTextboxComponent } from '../../mrpro_loader/components/textbox/textbox.component';
import { LdrToolbarButtonComponent } from '../../mrpro_loader/components/toolbar-button/toolbar-button.component';
import { LdrWarningComponent } from '../../mrpro_loader/components/warning/warning.component';
import { LdrWindowComponent } from '../../mrpro_loader/components/window/window.component';

@Component({
	selector: 'ldr-demo-page',
	imports: [LdrButtonComponent, LdrInfoBarComponent, LdrToolbarButtonComponent, LdrTextboxComponent, LdrDetailsComponent, LdrWarningComponent, LdrWindowComponent],
	templateUrl: './demo-page.component.html',
	styleUrl: './demo-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoPageComponent {}

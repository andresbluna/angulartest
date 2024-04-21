import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './header-2.component.html',
 styleUrls: ['./header-2.component.css']
})
export class AppComponent {
 onSliderChange(event: any) {
    console.log('Slider value:', event.value);
 }
}
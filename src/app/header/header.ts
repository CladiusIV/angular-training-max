import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // for versions 19+ this is set by default "true" and can be omitted
    templateUrl: './header.html',
    styleUrl: './header.scss' // for single css file
    // styleUrls: ['./app.scss'] // for multiple css files
})

export class HeaderComponent {}
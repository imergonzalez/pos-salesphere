import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent]
})
export class HomeComponent {

}

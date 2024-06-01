import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { PrimeNGSharedModule } from '../../prime-ngshared/prime-ngshared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,PrimeNGSharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

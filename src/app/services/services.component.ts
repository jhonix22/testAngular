// Services
import {ServicesProviderService} from '../services-provider.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title: string;

  constructor(private _servicesProvider: ServicesProviderService) { }

  ngOnInit() {
    this.title = this._servicesProvider.getServices()
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

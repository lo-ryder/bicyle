import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Bicycle } from '../../bicycle';
import { BicycleService } from '../../bicycle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bicycleslist: Array<Bicycle>;
  currentuser;

  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.bicycleService.userSubj.subscribe(currentuser => this.currentuser = currentuser);
    console.log(this.currentuser);
    this.bicycleService.bikeSubj.subscribe(bicycleslist => this.bicycleslist = bicycleslist);
    this.bicycleService.GetBicycles();
    console.log('browse bikes', this.bicycleslist);

  }
  DeleteBike(bicycle: Bicycle, owner: User) {
    this.bicycleService.DeleteBicycle(bicycle);
  }
  ContactOwner(bicycle: Bicycle) {
    alert("Name:" + bicycle.Owner.Name + "Email:" + bicycle.Owner.Email);
  }
}

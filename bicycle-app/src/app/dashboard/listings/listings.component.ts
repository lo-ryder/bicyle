import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Bicycle } from '../../bicycle';
import { BicycleService } from '../../bicycle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
fileToUpload: File = null;
newBike: Bicycle = new Bicycle();
currentuser;
mybicyclelist;
loginUser = new User();

  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.bicycleService.userSubj.subscribe(currentuser => this.currentuser = currentuser);
    this.bicycleService.MYbikeSubj.subscribe(mybicyclelist => this.mybicyclelist = [mybicyclelist]);
    this.bicycleService.GetMyBicycles(this.currentuser[0]);
    console.log('MY bikes listings', this.mybicyclelist);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  LoginUser(user: User) {
    console.log(user);
  }
  CreateBicycle(bicycle: Bicycle) {
    console.log(bicycle);
    this.bicycleService.CreateBicycle(bicycle, this.currentuser[0]);
    this.newBike = new Bicycle();
  }
  EditBicycle(bicycle: Bicycle) {
    console.log(bicycle);
    this.bicycleService.EditBicycle(bicycle);
    this.bicycleService.GetMyBicycles(this.currentuser[0]);
  }
  DeleteBicycle(bicycle: Bicycle) {
    console.log(bicycle);
    this.bicycleService.DeleteBicycle(bicycle);
    this.bicycleService.GetMyBicycles(this.currentuser[0]);
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';
import { Bicycle } from '../../../bicycle';
import { BicycleService } from '../../../bicycle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
url: string;
fileToUpload: File = null;
newBike: Bicycle = new Bicycle();
currentuser;
  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.bicycleService.userSubj.subscribe(currentuser => this.currentuser = currentuser);
    console.log('create2', this.currentuser[0]);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  CreateBicycle(bicycle: Bicycle) {
    console.log(bicycle);
    this.bicycleService.CreateBicycle(bicycle, this.currentuser[0]);
    this.newBike = new Bicycle();
  }
}

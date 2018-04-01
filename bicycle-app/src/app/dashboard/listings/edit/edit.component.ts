import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';
import { Bicycle } from '../../../bicycle';
import { BicycleService } from '../../../bicycle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  url: string;
  fileToUpload: File = null;
  editBike: Bicycle = new Bicycle();
  mybicyclelist: Array<Bicycle>;
  currentuser;

  constructor(
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.bicycleService.userSubj.subscribe(currentuser => this.currentuser = currentuser);
    this.bicycleService.bikeSubj.subscribe(mybicyclelist => this.mybicyclelist = mybicyclelist);
    this.bicycleService.GetMyBicycles(this.currentuser[0]);
    console.log('bikes', this.mybicyclelist);
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
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

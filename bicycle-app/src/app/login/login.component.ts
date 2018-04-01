import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUser: User = new User();
regUser: User = new User();
bikeOfDay: Bicycle;
compare: boolean = false;
bikeRList;
  constructor(
    private bicycleS: BicycleService
  ) { }

  ngOnInit() {
    this.bicycleS.bikeSubj.subscribe(bicycleslistR => {
      console.log('sub', bicycleslistR)
      this.bikeRList = bicycleslistR } );
    this.bicycleS.GetBicyclesRandom();
    console.log(this.bikeRList);

    if (this.bikeRList.length) {
      return this.bikeOfDay = this.bikeRList[Math.floor(Math.random()*this.bikeRList.length)]
    }
  }
  Register(user: User) {
    console.log(user, this.Compare(user));
    if (this.Compare(user)) {
      this.bicycleS.Register(user);
      this.regUser = new User();
    }
  }
  Login(user: User) {
    this.bicycleS.Login(user);
    this.loginUser = new User();
  }
  Compare(regUser: User){
    this.compare = !(regUser.PasswordCon === regUser.Password);
    return regUser.PasswordCon === regUser.Password;
  }


}

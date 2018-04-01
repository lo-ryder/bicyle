import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { User } from './user';
import { Bicycle } from './bicycle';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class BicycleService {
bikeSubj = new BehaviorSubject([]);
MYbikeSubj = new BehaviorSubject([]);
userSubj = new BehaviorSubject([]);

  constructor(
    private _http: Http,
    private route: Router
  ) { }
  Login(user: User) {
    return this._http.post('http://localhost:8000/login', user).subscribe(
      currentuser => {
        this.userSubj.next(currentuser.json());
        this.route.navigate(['dashboard', 'browse']);
      },
      errorResponse => console.log(errorResponse)
    );
  }
  Register(user: User) {
    return this._http.post('http://localhost:8000/register', user).subscribe(
      currentuser => {
        this.userSubj.next(currentuser.json());
        this.route.navigate(['dashboard', 'browse'])
      },
      errorResponse => console.log(errorResponse)
    );
  }
  GetBicyclesRandom() {
    console.log('runnging! R')
    return this._http.get('http://localhost:8000/random').subscribe(
      bicyclelistings => this.bikeSubj.next(bicyclelistings.json()),
      errorResponse => console.log(errorResponse)
    );
  }
  GetBicycles() {
    return this._http.get('http://localhost:8000/browse').subscribe(
      bicyclelistings => this.bikeSubj.next(bicyclelistings.json()),
      errorResponse => console.log(errorResponse)
    );
  }
  GetMyBicycles(user: User) {
    return this._http.get('http://localhost:8000/listings/' + user._id).subscribe(
      bicyclelistings => this.MYbikeSubj.next(bicyclelistings.json()),
      errorResponse => console.log(errorResponse)
    );
  }
  CreateBicycle(bicycle: Bicycle, currentUser: User) {
    bicycle.Owner = {
      Oid: currentUser._id,
      Name: currentUser.FirstName,
      Email: currentUser.Email
    }
    return this._http.post('http://localhost:8000/listings', bicycle).subscribe(
      bicyclelistings => this.GetMyBicycles(currentUser[0]),
      errorResponse => console.log(errorResponse)
    );

  }
  EditBicycle(bicycle: Bicycle) {
    return this._http.post('http://localhost:8000/listings/', bicycle._id).subscribe(
      bicyclelistings => this.GetBicycles(),
      errorResponse => console.log(errorResponse)
    );
  }
  DeleteBicycle(bicycle: Bicycle) {
    return this._http.delete('http://localhost:8000/delete/'+ bicycle._id).subscribe(
      bicyclelistings => this.GetBicycles(),
      errorResponse => console.log(errorResponse)
    );
  }
}

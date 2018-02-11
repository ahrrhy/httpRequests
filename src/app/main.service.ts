import { Http } from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor( private http: Http ){}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb').map( response => {
      return response.json();
    }).map(response =>  response.results )
      //u = user
      .map(u => {
      return u.map( u => {
        return {
          name: `${u.name.first} ${u.name.last}`,
          image: u.picture.large,
          geo: `${u.location.street}
          ${u.location.city}
          ${u.location.state}`
        }
      });
    });
  }
  users = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
  ];
}

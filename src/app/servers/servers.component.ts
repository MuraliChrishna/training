import { Component, OnInit } from '@angular/core';
import { empty } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
emptyString = false;
allowNewServer = false;
userName = '';
usernameStatus = 'clcik to update username';
sercerCreationStatus = 'no Server Was Created';
serverName = 'TestServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    if (this.userName = '') {
      this.emptyString = true;
      }
  }
  ngOnInit() {
  }
  onCreateServer() {
this.sercerCreationStatus = 'server was Created Name is ' + this.serverName;
  }
  onUserName() {
this.usernameStatus = 'new username is ' + this.userName;
  }
onUpdateServerName(event: any) {
this.serverName = (<HTMLInputElement>event.target).value;
}
onUpateUserName(event: any) {
this.userName = (<HTMLInputElement>event.target).value;
}

}

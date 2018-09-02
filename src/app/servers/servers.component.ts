import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
sercerCreationStatus = 'no Server Was Created';
serverName = 'TestServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
this.sercerCreationStatus = 'server was Created Name is '+ this.serverName;
  }
onUpdateServerName(event: any) {
this.serverName = (<HTMLInputElement>event.target).value;
}
}

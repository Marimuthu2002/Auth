import { Component } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasbord',
  templateUrl: './dasbord.component.html',
  styleUrls: ['./dasbord.component.scss']
})
export class DasbordComponent {

  title = 'authh';
  idleState: any;
  timedOut = false;
  constructor(private idle: Idle, private keepalive: Keepalive, private routes: Router) {
    idle.setIdle(5);
    idle.setTimeout(1);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.routes.navigate(['\login']);
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe(() => alert("Your's Login Time Is Out"));
    keepalive.interval(15);
    this.idle.watch();
    this.timedOut = false;
  }

}

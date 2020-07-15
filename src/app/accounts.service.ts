import { Injectable, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  constructor(private loggingServie: LoggingService) {}
  @Output() statusUpdated = new EventEmitter<string>();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingServie.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingServie.logStatusChange(newStatus);
  }
}

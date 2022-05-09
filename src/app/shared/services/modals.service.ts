import { MessageComponent } from './../components/modals/message-modal/message.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(private dialog: MatDialog) {}

  showMessage(title: string, message: string): MatDialogRef<MessageComponent> {
    return this.dialog.open(MessageComponent, {
      data: { title, message },
    });
  }
}

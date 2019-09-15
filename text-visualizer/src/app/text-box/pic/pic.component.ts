import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PicComponent>) { }

  ngOnInit() {
  }
  close(): void {

    this.dialogRef.close();
  }


}

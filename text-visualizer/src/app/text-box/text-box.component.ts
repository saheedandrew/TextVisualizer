import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PicComponent } from './pic/pic.component';
import { MatDialogRef } from '@angular/material';

// import {MatDialogModule} from '../app.module'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

   /**
   * getValue
   */
  public getValue(textBox: Text) {
    console.log(textBox);  
    return textBox; 
  }

   onCreate(){
    this.formDialog.open(PicComponent, {
      height: '40rem',
      width: '40rem'
    });
  }
  



  constructor(private formDialog : MatDialog ) { }


  ngOnInit() {

  }

 

}

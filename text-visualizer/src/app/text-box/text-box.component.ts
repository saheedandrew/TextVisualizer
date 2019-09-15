import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PicComponent } from './pic/pic.component';
import { MatDialogRef } from '@angular/material';
import { TestBoxService} from '../text-box/test-box.service'

// import {MatDialogModule} from '../app.module'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  ;
  private data: JSON;

   /**
   * getValue
   */
  public getValue(textBox: Text) {
    console.log(textBox);  
    this.tbService.getImage(textBox).subscribe(data => {
      this.data = data});
    console.log(this.data)
  }

   onCreate(){
    this.formDialog.open(PicComponent, {
      height: '40rem',
      width: '40rem'
    });
  }
  



  constructor(private formDialog : MatDialog, private tbService : TestBoxService ) { }


  ngOnInit() {

  }

 

}

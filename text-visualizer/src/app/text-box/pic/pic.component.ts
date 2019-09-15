import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TextBoxComponent} from '../text-box.component';
import { TouchSequence } from 'selenium-webdriver';



@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class PicComponent implements OnInit {
  data: any;
  keyList: any;
  imageList: any;
  sentenceString: any;


  constructor(public dialogRef: MatDialogRef<PicComponent>) { }

  ngOnInit() {
    this.data= TextBoxComponent.chartsList.subscribe(fakeObj =>{this.data=fakeObj;
      console.log('tryyy',this.data);



     if(this.data["sentences"][0]){
      this.keyList = this.data["sentences"][0]["keywords"]
      console.log("this is key list ", this.keyList);

      this.imageList = this.data["sentences"][0]["links"];
      console.log("this is image list" ,this.imageList);

      this.sentenceString = this.data["sentences"][0].sentence;
      console.log("this is sentence", this.sentenceString);}


    
    
    })




       
  
    
  }




  close(): void {

    this.dialogRef.close();
  }


}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PicComponent } from './pic/pic.component';
import { MatDialogRef } from '@angular/material';
import { TestBoxService} from '../text-box/test-box.service'
import { BehaviorSubject } from "rxjs/BehaviorSubject";


// import {MatDialogModule} from '../app.module'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  static charts: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  static chartsList = TextBoxComponent.charts.asObservable();

  private num= 0;
  private data: JSON;
  private keyList: any;
  private imageList: any;
  private sentenceString:any;


   /**
   * getValue
   */
  public getValue(textBox: Text) {
    this.num+=1;
    console.log('getValue', this.num);
    console.log(textBox);  
    this.tbService.getImage(textBox).toPromise().then(data =>{this.data = data}).then(this.onCreate());
    console.log(this.data);
    TextBoxComponent.charts.next(this.data);

    console.log('this is charts', TextBoxComponent.charts);
    console.log('this is charts list', TextBoxComponent.chartsList);
    

  

     if(this.data["sentences"][0]){
       this.keyList = this.data["sentences"][0]["keywords"]
       console.log("this is key list ", this.keyList);

       this.imageList = this.data["sentences"][0]["links"];
       console.log("this is image list" ,this.imageList);

       this.sentenceString = this.data["sentences"][0].sentence;
       console.log("this is sentence", this.sentenceString);



        
   
 }

    


    
  }

  // subscribe(data => {
  //   this.data = data;
    
  // });

   onCreate(){
    console.log('on create', this.num);

     if(this.num>1){
    this.formDialog.open(PicComponent, {
      height: '30rem',
      width: '40rem'
    });}
  }
  



  constructor(private formDialog : MatDialog, private tbService : TestBoxService ) { }


  ngOnInit() {

  }

 

}

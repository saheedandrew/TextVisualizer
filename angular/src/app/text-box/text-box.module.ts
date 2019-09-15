import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicComponent} from '../text-box/pic/pic.component';
import { TextBoxComponent} from '../text-box/text-box.component'
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {TestBoxService} from '../text-box/test-box.service';
@NgModule({
    declarations: [PicComponent, TextBoxComponent],
    imports: [
        MatDialogModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      
    ],
    exports: [PicComponent, TextBoxComponent ]
  })
  export class TestBoxModule {}

  

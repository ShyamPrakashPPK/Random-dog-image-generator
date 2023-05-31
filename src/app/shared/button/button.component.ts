import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() url=new EventEmitter<string>()
  imageUrl!:string
  constructor(private http: HttpClient) {
  }


  loadImage() {
    this.http.get<{ message: string }>('https://dog.ceo/api/breeds/image/random').subscribe(data => {
      console.log(data);
      this.imageUrl = data.message;
      this.url.emit(this.imageUrl)
    });
  }
  load(event:any) {
    console.log('check');
    
    this.url.emit(this.imageUrl)
    
  }

}

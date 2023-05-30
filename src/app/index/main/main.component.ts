import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
  

export class MainComponent {

  imageUrl?: string;


  constructor(private http:HttpClient) {
  }
  
  
  loadImage() {
    this.http.get<{ message: string }>('https://dog.ceo/api/breeds/image/random').subscribe(data => {
      console.log(data);
      this.imageUrl = data.message;
    });
  }

  // loadImage() {
  //   this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(data => {
  //     console.log(data)
  //     this.imageUrl = data['message'];
  //     return data
  //   })
    
  //   console.log("this button works");
  // }


}

import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  selectedFeature: string = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAThfzNhKCsSFsgPEXWo5uDYB2WQbCAZGI",
      authDomain: "udemy-ng-course-77665.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.selectedFeature = feature;
  }
}

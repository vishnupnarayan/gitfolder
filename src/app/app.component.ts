import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalidation';
  data={
    firstname:'',
    lastname:'',
    phone:'',
    email:''
  }
  onsubmit()
  {
    alert(JSON.stringify(this.data))
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
  }

  OnSubmit(contactForm: NgForm){
    if (contactForm.valid) {
      let email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-type':  'application/json'})
      this.http.post('https://formspree.io/f/xeqpwrgv', {name: email.name, replyto: email.email, subject: email.subject, message: email.message }, { 'headers': headers }).subscribe(
        response => {
       
          console.log(response);
        });
        contactForm.reset()

  } else if (!contactForm.valid){
    alert('Preencha o form')
  }
 
}

}

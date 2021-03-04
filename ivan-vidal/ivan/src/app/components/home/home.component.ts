import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 modal = false
 err= false
 send = false

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
      this.send = true
      setTimeout(()=>{ this.send = false }, 5000)


  } else if (!contactForm.valid){
    this.err = true
    
    setTimeout(()=>{ this.err = false }, 5000)
   
  }
}

  activeModal() {
let close = document.querySelector('.fa-bars')
    close.classList.add('fa-times')
}

removeModal() {
 document.querySelector('.fa-times').classList.remove('fa-times')
}

onClick(){

  if (!this.modal) {
    this.modal = true
    this.activeModal()
    console.log('ativei')
  } else if (this.modal) {
    this.modal = false
    this.removeModal()
console.log('desativei')
  }
}


}
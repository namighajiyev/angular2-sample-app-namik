import {Component , OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Message} from '../models/message';
import {MessageService} from '../services/message.service';
@Component({
    templateUrl:"app/views/second-view.html" ,
    providers:[MessageService]
    
})
export class SecondComponent {
    messages:Message[];
    errors:string[];
    message:string 
    isNewMessageValid:boolean;
  
constructor(private _service:MessageService , private _router:Router){}

goToFirst() {
    this._router.navigate(['First']);
}

 ngOnInit() {
    this._service.getMessages().then(messages => this.messages = messages);
    this.messages=[];
    this.message=''; 
    this.errors = [];
    this.isNewMessageValid =false;
  }
  
  addMessage(){
       this.validateNewMessage(this.message);
       if(!this.isNewMessageValid) {return;}
      this._service.addMessage(this.message);
      this.message='';
      this.isNewMessageValid=false;
  }
  
  validateNewMessage(newMessage:string){
      this.errors = [];
      let isEmpty:boolean  = newMessage ? false : true;
      let isInValidFormat = isEmpty ? false : newMessage.toLowerCase().includes('igor');
      if(isEmpty || isInValidFormat ) {
          if(isEmpty) {this.errors.push("Message is required!");}
          if(isInValidFormat) {this.errors.push("Message can't contain 'igor'!");}
          this.isNewMessageValid = false;}
      else {
         this.isNewMessageValid = true; 
      }
      
  }
}
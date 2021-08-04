import { Component, OnInit } from '@angular/core';
import { Contact } from '../app.models';
import { MiddlewareService } from '../middleware.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /**
   * To hold contact info
   */
   contact !: Contact;

   /**
    * Email Validation Purpose
    */
   emailRegexPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,3}/;
   isValidEmail: boolean = true;
 
   
   /**
    * Used for validation purpose
    */
   isValidForm: boolean = true;
   hasName: boolean = true;
   hasEmail: boolean = true;
   hasMessage: boolean = true;
   
   isResponseSucceeded: boolean = false;
   showResponseMessage: boolean = false;
 
   /**
    * To show character count for message area
    */
  showCharCount: boolean = false;
 
   constructor(private middleware: MiddlewareService) {
   }
 
 
   ngOnInit(): void {
     this.resetContact();
     
   }
 
   /**
    * To reset contact form values
    */
   resetContact(){
     this.contact = {
       name : '',
       company: '',
       email: '',
       mobile: '',
       message: ''
     }
   }
  
   /**
    * Event - On submit
    */
   onSubmit(){
     if(this.validateMandatoryFields()){
       this.isValidForm = true;
       this.middleware.sendMessageInfo(this.contact).then((response: any) => {
         if(response){
           this.isResponseSucceeded = true;
           this.showResponseMessage = true;
           this.resetContact();
         } 
         })
         .catch(() => {
           this.isResponseSucceeded = false;
           this.showResponseMessage = true;
         });
         setTimeout(() => {
           this.showResponseMessage = false;
         },5000);
     }else{
       this.isValidForm = false;
     }
   }
 
   /**
    * To validate the mandatory fields
    * @returns Whether is valid or not : boolean
    */
   validateMandatoryFields(){
     this.validateEmail();
     this.hasName = this.contact.name !== null && this.contact.name !== '';
     this.hasMessage = this.contact.message !== null && this.contact.message !== '';
     this.hasEmail = this.contact.email !== null && this.contact.email !== '' && this.isValidEmail;
     if(this.hasName && this.hasEmail && this.hasMessage){
       return true;
     }else{
       return false;
     }
   }
 
   /**
    * Event - On Focus Message area
    */
   onFocusMessageArea(){
     this.showCharCount = true;
   }
 
   /**
    * Event - On Blur Message area
    */
   onBlurMessageArea(){
     this.showCharCount = false;
   }
 
   /**
    * To validate email address
    */
   validateEmail(): void{
     // returns true when email is empty
     if(!this.contact.email || this.contact.email === ''){
       this.isValidEmail = true;
       return;
     }
     const matches =  this.contact.email.match(this.emailRegexPattern);
     this.isValidEmail = matches && matches[0] === this.contact.email ? true : false;
  }

}


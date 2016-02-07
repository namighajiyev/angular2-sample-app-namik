
import {Injectable} from 'angular2/core';
import {MESSAGES} from '../models/mock-messages';
import {Message} from '../models/message';

@Injectable()
export class MessageService {
   
getMessages() {return messagesPromise; }

addMessage(message :string){
    let messageObj = {text :message};
    this.getMessages().then(messages => messages.push(messageObj));
}

}
 var messagesPromise = Promise.resolve(MESSAGES);
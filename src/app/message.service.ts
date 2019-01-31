import { Injectable } from '@angular/core';

// The service exposes its cache of messages and two methods: one to add() a message to the cache and another to clear() the cache.
@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // property 
  // empty string array.
  messages: string[] = [];

  // The service exposes its cache of messages and two methods: one to add() a message to the cache and another to clear() the cache.
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

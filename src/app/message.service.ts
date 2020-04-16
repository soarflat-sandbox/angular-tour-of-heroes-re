import { Injectable } from '@angular/core';

@Injectable({
  // サービスを注入可能にするためには、そのサービスをプロバイダとして登録する必要がある
  // "root" を指定すると HeroService をアプリケーションのどこにでも注入できる
  providedIn: 'root',
})
// メッセージを取り扱うサービス
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

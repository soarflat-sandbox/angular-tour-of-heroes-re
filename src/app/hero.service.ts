import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  // サービスを注入可能にするためには、そのサービスをプロバイダとして登録する必要がある
  // "root" を指定すると HeroService をアプリケーションのどこにでも注入できる
  providedIn: 'root',
})
// ヒーロデータを取り扱うサービス。
// サービスとは目的が明確に定義されたクラス。クライアントのために何かを行うオブジェクト。
export class HeroService {
  constructor() {}

  // HEROES を通知する Observable を返す
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

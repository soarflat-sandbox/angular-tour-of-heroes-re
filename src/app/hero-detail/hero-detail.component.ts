import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // @Input() を利用することで、親コンポーネントのデータを子コンポーネントに共有（バインド）できる。
  // 今回の場合 <app-hero-detail [hero]="selectedHero"></app-hero-detail> のようにして
  // 親のデータ(selectedHero)を、子では hero として利用する。
  // @Input() を利用したバインディングのことをプロパティバインディング（Property binding）という。
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}

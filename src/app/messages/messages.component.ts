import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  // MessageService を注入
  // 今回、messageService はテンプレート内でバインドして利用する。
  // そのため、messageService はパブリックである必要がある。
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}

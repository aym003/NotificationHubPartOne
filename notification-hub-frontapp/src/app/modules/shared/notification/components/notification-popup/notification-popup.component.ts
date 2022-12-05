import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import {Notification} from '../../../../product/models/notification';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent implements OnInit{
  private _hubConnection!: HubConnection;
  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
    this._hubConnection =new HubConnectionBuilder().withUrl('https://localhost:7132/Notify',
   { skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets}).build();

  
    this._hubConnection
      .start()
      .then(() =>{ console.log('Connection started!');  this._hubConnection.invoke("SuscribeToProduct", "P01") })
      .catch(err => console.log('Error while establishing connection :('));
    this._hubConnection.on('SendMessage', (notification: Notification) => {
      this.showSuccess(notification);
    });


  }

  showSuccess(notification: Notification) {
    this.toastr.success(notification.productID+" "+notification.productName, notification.message);
  }
}

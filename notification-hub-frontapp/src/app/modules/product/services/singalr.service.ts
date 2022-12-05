import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { ToastrService } from 'ngx-toastr';
import {Notification} from '../models/notification';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class SingalrService {

  
  private hubConnection!: signalR.HubConnection;

  constructor(private toastr: ToastrService,public productService: ProductService) {

  }
    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('https://localhost:7132/Notify',{ skipNegotiation: true,
                              transport: signalR.HttpTransportType.WebSockets})
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    
    public addProductListener = () => {
      this.hubConnection.on('SendMessage', (notification: Notification) => {
        this.showNotification(notification);
        this.productService.get();
      });
    }

    showNotification(notification: Notification) {
      this.toastr.warning( notification.message,notification.productID+" "+notification.productName);
    }

    public subscribeToProduct(productId:string)
    {
      this.hubConnection.invoke("SuscribeToProduct",productId)
    }
}

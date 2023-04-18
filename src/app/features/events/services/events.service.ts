import { AccountService } from 'src/app/features/account/services/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICreateEvent } from '../models/create-event';
import { IEvent } from '../models/event';
import { ISimpleEvent } from '../models/simple-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  controllerUrl: string;

  constructor(private http: HttpClient,
    private accountService: AccountService) {
    this.controllerUrl = environment.apiUrl + "events/";
  }

  getSimpleEvents(): Observable<ISimpleEvent[]> {
    return this.http.get<ISimpleEvent[]>(this.controllerUrl);
  }
  getfullEvents(): Observable<IEvent[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    }
    return this.http.get<IEvent[]>(this.controllerUrl + "full", httpOptions);
  }
  addEvent(model: ICreateEvent): Observable<any> {
    let formData = new FormData();

    formData.append("title", model.title);
    formData.append("text", model.text);
    formData.append("price", model.price + "");
    formData.append("eventTime", model.eventTime.toString());

    formData.append("isOnline", model.isOnline.toString());

    if (model.site != null) formData.append("site", model.site);
    if (model.facebook != null) formData.append("facebook", model.facebook);
    if (model.instagram != null) formData.append("instagram", model.instagram);


    for (var i = 0; i < model.types.length; i++) {
      if (model.types[i] != null) {
        formData.append('types[]', model.types[i] + "");
      }
    }

    for (var i = 0; i < model.images.length; i++) {
      if (model.images[i] != null) {
        formData.append('images', model.images[i]);
      }
    }
    return this.http.post(this.controllerUrl, formData, this.accountService.getHttpOptions());
  }
  updateEvent(model: ICreateEvent): Observable<any> {
    return this.http.put(this.controllerUrl, model, this.accountService.getHttpOptions());
  }
  getById(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(this.controllerUrl + id);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(this.controllerUrl + id, this.accountService.getHttpOptions());
  }
}

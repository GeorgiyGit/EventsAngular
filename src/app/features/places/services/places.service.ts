import { AccountService } from 'src/app/features/account/services/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ICreatePlace } from '../models/create-place';
import { IPlace } from '../models/place';
import { ISimplePlace } from '../models/simple-place';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    controllerUrl: string;

    constructor(private http: HttpClient, private accountService: AccountService) {
        this.controllerUrl = environment.apiUrl + "places/";
    }

    getSimplePlaces(): Observable<ISimplePlace[]> {
        return this.http.get<ISimplePlace[]>(this.controllerUrl);
    }
    getfullPlaces(): Observable<IPlace[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accountService.getToken()
            })
        };
        return this.http.get<IPlace[]>(this.controllerUrl + "full", httpOptions);
    }
    
    addPlace(model: ICreatePlace): Observable<any> {
        let formData = new FormData();

        formData.append("name", model.name);
        formData.append("text", model.text);
        formData.append("route", model.route);


        if (model.site != null) formData.append("site", model.site);
        if (model.facebook != null) formData.append("facebook", model.facebook);
        if (model.instagram != null) formData.append("instagram", model.instagram);

        formData.append("googleMaps", model.googleMaps);


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
    updatePlace(model: ICreatePlace): Observable<any> {
        return this.http.put(this.controllerUrl, model, this.accountService.getHttpOptions());
    }
    getById(id: number): Observable<IPlace> {
        return this.http.get<IPlace>(this.controllerUrl + id);
    }

    deletePlace(id: number): Observable<any> {
        return this.http.delete(this.controllerUrl + id, this.accountService.getHttpOptions());
    }
}

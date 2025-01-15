import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl="https://api.unsplash.com//search/photos";
  private apiKey="Eg7_tF3OvsPFjrhK9gNNDqORp9AgnC8zv52dQ4CSMQ8"
  constructor(private http:HttpClient) { }

  searchImages(query:string, page:number=1,per_page:number=10){

  const url=`${this.apiUrl}?query=${query}&page=${page}&per_page=${per_page}`;
  return this.http.get(url, {
    headers:{
      Authorization:`Client-ID ${this.apiKey}`
    }
  })
   }

}

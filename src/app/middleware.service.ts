import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  constructor(private http: HttpClient) { }

  gitToken = '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';

  mediumFeedUrl = 'https://medium.com/feed/@jeganathpv';

  contactForm: string = 'https://contact-flask-api.herokuapp.com';

  /**
   * To get GIT Header.
   */
  get gitHeader(): HttpHeaders{
    const header = new HttpHeaders();
    header.append('Authorization', `token ${this.gitToken}`);
    return header;
  }

  /**
   * To get GIT Parameters.
   */
  get gitParameters(): HttpParams{
    const params = new HttpParams();
    params.append('sort', 'updated');
    params.append('per_page', 10);
    return params;
  }

  /**
   * To get recent github repositories.
   * @returns Observable
   */
  getRecentRepos(){
    return this.http.get('https://api.github.com/users/jeganathpv/repos?sort=updated&per_page=10', { headers: this.gitHeader, params: this.gitParameters }).toPromise();
  }

  /**
   * To get list of blogs.
   * @returns Observable
   */
  getBlogList(){
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${this.mediumFeedUrl}`;
    return this.http.get(url);
  }

  /**
   * To send message from user
   * @param contact Contact
   * @returns boolean
   */
  sendMessageInfo(contact: Contact){
    return new Promise((resolve, reject) => {
      this.http.post(this.contactForm + "/addMessage", contact).subscribe(response => {
        resolve(response);
      });
    });
  }
}

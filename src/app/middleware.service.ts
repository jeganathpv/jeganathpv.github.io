import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  constructor(private http: HttpClient) { }

  gitToken = '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';

  mediumToken = '28002ff09fc0ba516af001f9afb8b94eb8fedd5342ca466fdebb7ddb0c86c551d';

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
    return this.http.get('');
  }
}

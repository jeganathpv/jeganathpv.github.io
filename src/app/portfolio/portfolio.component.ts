import { Component, OnInit } from '@angular/core';
import { Work } from '../app.models';
import { MiddlewareService } from '../middleware.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  isLoaded = false;
  isSucceeded = false;
  works: Array<Work> = [];

  constructor(private middleWare: MiddlewareService) { }

  ngOnInit(): void {
    this.fetchRecentWorks();
  }

  /**
   * To fetch recent works from github
   */
  fetchRecentWorks(){
    this.middleWare.getRecentRepos().then((data) => {
      if(!Array.isArray(data)){
        return;
      }
      data.map(project =>{
        if(!project.name.toLowerCase().includes('jegan')){
          this.works.push({
            name: project.name,
            description: project.description,
            projectUrl: project.html_url
          });
        }
      });
      this.works = this.works.slice(0,6);

      this.isSucceeded = true;
      this.isLoaded = true;
    });
  }

}

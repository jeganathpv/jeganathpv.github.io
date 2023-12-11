import { Component, OnInit } from '@angular/core';
import { Blog } from '../app.models';
import { MiddlewareService } from '../middleware.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  

  isLoaded = false;

  blogs: Array<Blog> = [];

  responsiveOptions: Array<{breakpoint: string, numVisible: number, numScroll: number}>;

  constructor(private middleware: MiddlewareService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.fetchRecentBlogs();
  }

  /**
   * To fetch recent blogs from medium feeds
   */
  fetchRecentBlogs(){
    this.middleware.getBlogList().then((data: any) => {
      const blogItems = data?.items;
      if(!Array.isArray(blogItems)){
        return;
      }
      // let filteredBlogs = blogItems.slice(blogItems.length - 5, 5);
      blogItems.forEach(item => {
        this.blogs.push({
          name: item.title,
          thumbnail: this.fetchThumbnail(item.content_html),
          blogUrl: this.sanitizeUrl(item.url),
          date: item.date_published,
          description: this.fetchDescription(item.content_html)
        });
      });

      this.isLoaded = true;
    });
  }

  sanitizeUrl(url: string): string{
    const regex = /\?.*/gm;
    return url.replace(regex, '');
  }

  /**
   * To parse description from content
   * @param content - HTML COntent
   * @returns Parsed Paragraph
   */
  fetchDescription(content: string): string{
    const htmlParser = new DOMParser();
    const htmlElements = htmlParser.parseFromString(content, 'text/html');
    return htmlElements.getElementsByTagName('p')[0].innerText
  }

  /**
   * To parse description from content
   * @param content - HTML COntent
   * @returns Parsed Paragraph
   */
  fetchThumbnail(content: string): string{
    const htmlParser = new DOMParser();
    const htmlElements = htmlParser.parseFromString(content, 'text/html');
    return htmlElements.getElementsByTagName('img')[0].src;
  }

}

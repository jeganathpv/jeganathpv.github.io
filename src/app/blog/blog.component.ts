import { Component, OnInit } from '@angular/core';
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
    this.middleware.getBlogList().subscribe((data: any) => {
      const blogItems = data?.items;
      if(!Array.isArray(blogItems)){
        return;
      }
      let filteredBlogs = blogItems.slice(blogItems.length - 5, 5).reverse();
      filteredBlogs.forEach(item => {
        this.blogs.push({
          name: item.title,
          thumbnail: item.thumbnail,
          blogUrl: this.sanitizeUrl(item.link),
          date: item.pubDate,
          description: this.fetchDescription(item.content)
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

}

export class Blog{
  name?: string;
  description?: string;
  thumbnail?: string;
  date?: Date;
  blogUrl?: string;
}

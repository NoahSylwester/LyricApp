import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import axios from 'axios';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @ViewChild("embedContent") embedElement: ElementRef;

  private selectedId: string;
  private sub: any;
  public song: any;

  private sendSongRequest(id: string) {
    axios({
      "method":"GET",
      "url":`https://genius.p.rapidapi.com/songs/${id}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"genius.p.rapidapi.com",
      "x-rapidapi-key":"b7ece58cddmsh492adbb2d0e2f6fp19717djsnc1c02a305ff9",
      "useQueryString":true
      }
      })
      .then((response)=>{
        console.log(this.embedElement)
        this.song = response.data.response.song;
        this.embedElement.nativeElement.innerHtml = response.data.response.song.embed_content;
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.selectedId = params['id']; 
   });
   this.sendSongRequest(this.selectedId)
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

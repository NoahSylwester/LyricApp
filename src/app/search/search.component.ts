import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { 
    
  }

  public searchResults: Object[];
  public sendSearchRequest(query: String) {
    // fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${query}`)
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res)
    //   this.searchResults = res;
    // })
    axios({
      "method":"GET",
      "url":"https://genius.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"genius.p.rapidapi.com",
      "x-rapidapi-key":"b7ece58cddmsh492adbb2d0e2f6fp19717djsnc1c02a305ff9",
      "useQueryString":true
      },"params":{
      "q":query
      }
      })
      .then((response)=>{
        console.log(response)
        this.searchResults = response.data.response.hits;
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  ngOnInit(): void {
    this.sendSearchRequest("Metallica")
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../api-data.service';
import { Observable } from 'rxjs';
/* Observable will hold data. */

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users$: Object;

  constructor(private data: ApiDataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.users$ = data
    )
  }

}

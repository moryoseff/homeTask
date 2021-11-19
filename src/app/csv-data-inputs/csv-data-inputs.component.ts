import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-csv-data-inputs',
  templateUrl: './csv-data-inputs.component.html',
  styleUrls: ['./cvs-data-inputs.component.css'],
})
export class CsvDataInputsComponent implements OnInit {
  p: number = 1;
  loadedData: any = [];
  filterBy = '';
  selectedValue = '';
  startDate = '';
  endDate = '';


  @ViewChild('accordion', { static: true }) Accordion: MatAccordion
  @Input() multi: boolean
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  onFetchByDate() {
    this.fetchByDate()
  }
  onFetchAllData() {
    this.fetchPosts()
  }

  private fetchPosts() {
    this.http.get('http://localhost:3000/getData').subscribe(posts => {
      this.loadedData = posts
    });
  }
  private fetchByDate() {
    this.http.get(`http://localhost:3000/getDataByDates/` + this.startDate + '/' + this.endDate).subscribe(posts => {
      this.loadedData = posts
    });
  }

  onChange($event: any) {
    this.selectedValue = $event.target.options[$event.target.options.selectedIndex].text;
  }

}
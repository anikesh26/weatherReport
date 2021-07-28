import { Component, OnInit } from '@angular/core';
import {ReportDataService} from './report-data.service';
// @ts-ignore
import cities from '../cityJson/cities.json';
import {CitiesInterface} from './cities.interface';
import {ReportInterface} from '../cityData/cityReport.interface';
import {DatePipe} from '@angular/common';
import {WeekReportInterface} from '../cityData/weekReport.interface';
@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.scss']
})
export class ReportDataComponent implements OnInit {
  public cityList: CitiesInterface[] = cities;
  selectedValue: CitiesInterface;
  weatherIconURL = 'https://openweathermap.org/img/w/';
  selectedImage: string;
  weatherMapData: ReportInterface;
  weekReport: WeekReportInterface;
  constructor(private service: ReportDataService, private date: DatePipe) { }
  ngOnInit(): void {
  }
  weatherData() {
    this.service.getDailyWeatherReport(this.selectedValue.coord.lat, this.selectedValue.coord.lon).subscribe((res: WeekReportInterface) => {
      this.weekReport = res;
    });
  }
}


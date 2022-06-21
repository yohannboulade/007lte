import { Component, OnInit, Input} from '@angular/core';
import {Slide} from "../models/slide.model";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() slide!: Slide;
  ngOnInit(): void {
  }
}

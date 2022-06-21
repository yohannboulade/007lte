import { Component, OnInit } from '@angular/core';
import { Slide } from "../models/slide.model";
import {SliderServices} from "../services/slider.services";

@Component({
  selector: 'app-diaporama',
  templateUrl: './diaporama.component.html',
  styleUrls: ['./diaporama.component.scss']
})

export class DiaporamaComponent implements OnInit {

  slider!: Slide[];
  constructor(private sliderServices: SliderServices) { }

  ngOnInit(): void {
    this.slider = this.sliderServices.getSlider();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const yPos = -(window.scrollY / 15); 
    const yPos2 = -(window.scrollY / 15); 
    const bgpos = '50% '+ yPos + 'px';      
    const bgpos2 = '50% '+ yPos2 + 'px';  
    const selectedElement = document.getElementById("main-banner");
    const selectedElement2 = document.getElementById("main-banner2");     

    selectedElement.style.backgroundPosition = bgpos;   

    selectedElement2.style.backgroundPosition = bgpos2;
  };

}
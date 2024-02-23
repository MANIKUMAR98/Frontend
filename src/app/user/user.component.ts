import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, NgZone,  ElementRef, HostListener } from '@angular/core';
import Typed from 'typed.js';
declare var VANTA : any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [trigger('slideUpDown', [
    state('open', style({
      height: '200px',
    })),
    state('closed', style({
      height: '0',
      opacity: 0,
      overflow: 'hidden',
    })),
    transition('open <=> closed', animate('400ms ease-in-out')),  // Adjust the animation duration
  ])
  ]
})

export class UserComponent {
  @ViewChild('typingElement', { static: false }) typingElement!: ElementRef;

  boeingCard = true;
  ctsCard = false
  data: any = '';
  boeingtechStack = ['Java', 'Angular', 'Spring Boot', 'Kubernetes', 'Azure', 'MS SQL']
  ctstechStack = ['Java', 'Kafka', 'Python', 'OpenShift', 'Jenkins', 'Splunk']
  boeingBackgroundColor = "#740cdc"
  ctsBackgroundColor = "#490C86DE"

  ngAfterViewInit(): void {
    this.initTyped();
    VANTA.NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.00,
      minWidth: 500.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 17.00,
      maxDistance: 26.00,
      spacing: 21.00,
      showDots : false,
      color: 0x987185,
      backgroundColor: 0xa2539 
    });
  }

  initTyped(): void {
    const options = {
      strings: ['Manikumar Honnenahalli Lakshminarayana Swamy  '],
      typeSpeed: 80, 
      backSpeed: 30, 
      showCursor: false, 
    };

    new Typed(this.typingElement.nativeElement, options);
  }
    
  constructor(private el: ElementRef, private http: HttpClient, private ngZone: NgZone) {
    // http.get("http://localhost:8080/getMessage").subscribe((res :any) => {
    //   this.data = res;
    //   console.log("res", res)
    // })
  }

  ngOnInit(): void {
  
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  onclick(event:any) {
    if(event == 'CTS') {
      this.ctsCard = !this.ctsCard
      if(this.ctsBackgroundColor == "#490C86DE") {
        this.ctsBackgroundColor = "#740cdc"
      } else {
        this.ctsBackgroundColor = "#490C86DE"
      }
    } else {
      this.boeingCard = !this.boeingCard;
      if(this.boeingBackgroundColor == "#490C86DE") {
        this.boeingBackgroundColor = "#740cdc"
      } else {
        this.boeingBackgroundColor = "#490C86DE"
      }
    }  
  }

}

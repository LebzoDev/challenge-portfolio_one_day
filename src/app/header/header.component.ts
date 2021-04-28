import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,fromEvent, asyncScheduler} from 'rxjs';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { throttleTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() home_activate:boolean;
  @Input() projects_activate:boolean;
  @Input() contact_activate:boolean;
  @Input() about_activate:boolean;
  resizeObservable$:any;
  resizeSubscription$:any;
  checkScreenSize:any = document.body.offsetWidth;
  mobile_activate:any;
  constructor(private route:Router) { }

  // ngOnInit(): void {
  //   if (document.body.offsetWidth < 1024) { // 768px portrait
  //     const checkScreenSize = () => document.body.offsetWidth < 1024;
  //     //console.log(checkScreenSize);
  //     // Create observable from window resize event throttled so only fires every 500ms
  //     //const screenSizeChanged$ = fromEvent(window, 'resize').throttleTime(500).map(checkScreenSize);
  //     const screenSizeChanged$ = fromEvent(window, 'resize').pipe(
  //       throttleTime(400, asyncScheduler, defaultThrottleConfig)
  //     ).subscribe((data)=>{
  //       //console.log(data)

  //     });

  //     this.resizeObservable$ = fromEvent(window, 'resize')
  //     const resizeSubscription$ = this.resizeObservable$.subscribe( (evt:any) => {
  //     //console.log('event: ', evt)
  //     if (window.screen.width < 360) { // 768px portrait
  //       //this.mobile = true;
  //       console.log('bbbb');
  //     }
  //     if (document.body.offsetWidth < 1024) { 
  //       console.log(this.checkScreenSize);
  //     console.log("aaaa")
  //     }
  //     })
  //   }else{
  //     // this.resizeObservable$ = fromEvent(window, 'resize')
  //     // const resizeSubscription$ = this.resizeObservable$.subscribe( (evt:any) => {
  //     // console.log('event: ', evt)
  //     // })
  //     // console.log("non atteint");
  //   }
  // }

  ngOnInit():void{
      this.resizeObservable$ = fromEvent(window, 'resize')
      const resizeSubscription$ = this.resizeObservable$.subscribe( (evt:any) => {
      this.lancement();
      })

  }
  lancement(){
    this.resizeObservable$.subscribe((data:any)=>{
      this.checkScreenSize=document.body.offsetWidth;
      console.log(this.checkScreenSize);
        if (this.checkScreenSize < 600) {
        this.mobile_activate=true;
        console.log("fonctionne");
      }else{
        this.mobile_activate=false;
        console.log("nonon");
      }

    })
  }

  home(){
    console.log(this.home_activate);
    this.route.navigate(['/']);
    this.home_activate=true;
    console.log(this.home_activate);
  }
  projects(){
    this.projects_activate=true;
  }
  about(){
    this.about_activate=true;
  }
  contact(){
    this.contact_activate=true;
  }
  navigate_contact(){
    this.route.navigate(['/contact']);
  }

  navigate_home(){
    this.route.navigate(['/']);
  }

}

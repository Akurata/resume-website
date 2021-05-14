import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollTo {
  scrollTo(element): void {
    const e: HTMLElement = document.getElementById(element);
    e.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}

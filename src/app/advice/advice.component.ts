
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advice, Advice100 } from './advice.model';
import { AdviceService } from './advice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {

  advice: string = '';
  characterCount: number = 0
  adviceList: any = [];
  inputNumber: number = 0;
  generateAdvice: any

  constructor(private http: HttpClient, private adviceService: AdviceService, private activatedRoute: ActivatedRoute) {
    this.generateAdvice = activatedRoute.snapshot.data?.['advice'];
    console.log(this.generateAdvice)
  }

  /**
   * used to generate  advice
   */
  getAdvice() {
    this.adviceService.generateAdvice(this.inputNumber).subscribe((res: any) => {
      this.advice = res.slip.advice;
      this.characterCount = this.advice.replace(/\s+/g, '').length;
      if (this.characterCount >= 30) {
        this.advice = 'Your advice is too long to dispaly here';
      }
    }),
      (error: any) => {
        console.error('Error fetching advice:', error);
      };
  }

  /**
   * to generate first 100 advice and fillter containe leter c
   */
  get100Advices() {
    this.adviceList = [];
    for (let i = 1; i <= 100; i++) {
      this.adviceService.get100Addvice(i).subscribe((res: any) => {
        const advice = res.slip.advice;
        if (this.fillterAdvice(advice)) {
          this.adviceList.push(advice);
        }
      }),
        (error: any) => {
          console.error('Error fetching advice:', error);
    }
  }
}

  /**
   * to fillter using letter c
   * @param advice 
   * @returns 
   */
  private fillterAdvice(advice: any): boolean {
    const firstTwoWords = advice.split(' ', 2).join(' ');
    return firstTwoWords.toLowerCase().includes('c');
  }
}


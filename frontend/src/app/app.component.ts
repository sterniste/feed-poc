import { Component, OnInit } from '@angular/core';
import { GreetingService } from './services/greeting.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting: string;

  constructor(private greetingService: GreetingService) {}

  ngOnInit(): void {
    this.getGreeting();
  }

  getGreeting(): void {
    this.greetingService.getGreeting().subscribe(greeting => this.greeting = greeting);
  }
}

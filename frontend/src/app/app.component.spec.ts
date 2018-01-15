import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { GreetingService } from './services/greeting.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [
        GreetingService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as greeting 'mock-greeting'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.greeting).toEqual('mock-greeting');
  }));
  it('should render greeting in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('mock-greeting');
  }));
});

class MockHttpClient {
  get(url: string) {
    return 'mock-greeting';
  }
}

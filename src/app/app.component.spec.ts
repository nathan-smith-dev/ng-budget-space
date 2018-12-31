import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  MockAppHeader,
  MockToastMessage,
  MockLoadingSpinner
} from './testing/mock-components';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fromAuth from './store/auth';
import { User } from './shared/models/auth.model';

describe('AppComponent', () => {
  let mockStore;
  let mockFireAuthStub;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    mockStore = jasmine.createSpyObj(['dispatch', 'select']);

    mockFireAuthStub = {
      user: of({})
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockAppHeader,
        MockToastMessage,
        MockLoadingSpinner
      ],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: AngularFireAuth, useValue: mockFireAuthStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call initializeUser onInit', () => {
    spyOn(component, 'initializeUser');
    fixture.detectChanges();

    expect(component.initializeUser).toHaveBeenCalledWith({});
  });

  describe('#initializeUser', () => {
    it('should dispatch a null user and token if user is falsy', () => {
      component.initializeUser(null);

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new fromAuth.SetUser(null)
      );
      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new fromAuth.SetToken(null)
      );
    });

    it('should dispatch valid user', () => {
      const user = {
        qa: 'token_1234',
        uid: 'id_123',
        displayName: 'John Doe',
        email: 'test@test.com'
      };
      component.initializeUser(user);

      const noTokenUser = new User(user.uid, 'John', user.email);
      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new fromAuth.SetUser(noTokenUser)
      );
      expect(mockStore.dispatch).toHaveBeenCalledWith(
        new fromAuth.SetToken(user.qa)
      );
    });
  });
});

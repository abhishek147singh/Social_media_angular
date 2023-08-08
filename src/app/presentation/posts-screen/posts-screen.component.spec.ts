import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsScreenComponent } from './posts-screen.component';

describe('PostsScreenComponent', () => {
  let component: PostsScreenComponent;
  let fixture: ComponentFixture<PostsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsScreenComponent]
    });
    fixture = TestBed.createComponent(PostsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

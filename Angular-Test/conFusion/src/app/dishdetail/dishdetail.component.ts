import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  commentForm: FormGroup;
  feedback: Comment;
  @ViewChild('cform') commentFormDirective;

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Author name is required!',
      'minlength': 'Author name must be at least 2 characters long!',
      'maxlength': 'Author name cannot have more than 25 characters!',
    },
    'comment': {
      'required': 'Comment of feedback is required!',
      'minlength': 'Comment of feedback must be at least 2 characters long!',
      'maxlength': 'Comment of feedback cannot have more than 250 characters!',
    }
  };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { 
      this.createForm();
    }

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  paramDish: string;
  newComment: any[] = [];
  

  ngOnInit() {
    this.dishService.getDishIds().subscribe((dishIds) => this.dishIds = dishIds);
    let id = this.route.snapshot.params['id'];
    this.paramDish = id;
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id); });
    //this.dishService.getDish(id).then(dish => this.dish = dish);
    
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length];
  }

  goBack(): void{
    this.location.back();
  }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }


  onSubmit() {
    this.feedback = this.commentForm.value;
    const date = new Date();
    this.feedback.date = date.toString();
    this.dish.comments.push(this.feedback);
    console.log(this.dish.comments);
    this.commentForm.reset(   
      {author: '',
      rating: 1,
      comment: ''});
    this.commentFormDirective.resetForm();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 1,
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      date: ''
    });

    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }


  onValueChanged(data?: any){
    if(!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors){
      if (this.formErrors.hasOwnProperty(field)){
        // Clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}

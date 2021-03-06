import { Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy} from '@angular/core';

import {Product} from './../product.model';
@Component({
  selector: 'app-prodcut',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any>= new EventEmitter();
  today= new Date();

  constructor(){
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('2. ngOnChanges');
    console.log(changes);
    }

    ngOnInit(){
      console.log('3. ngOnInit');
    }

ngDoCheck(){
  console.log('4. doCheck');
}

ngOnDestroy(){
  console.log('5. ngOnDestroy');
}

  addCart(){
    console.log('añador al carrito');
    this.productClicked.emit(this.product.id);
  }
}

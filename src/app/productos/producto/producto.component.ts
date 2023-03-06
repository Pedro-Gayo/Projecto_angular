import { Component,Input} from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'producto',
  template: ` 
      <div class="media">
          <img src="{{ data.imageUrl }}" class="mr-3" alt="...">
          <div class="media-body">
              <h5 class="mt-0">{{ data.productName }}</h5>
              {{ data.releasedDate }}
              <rating 
                  [rating]="data.rating" 
                  [numOfReviews]="data.numOfReviews">
                  <div [ngswitch]="data.rating">
                    <div *ngSwitchCase="1"> deficiente </div>
                    <div *ngSwitchCase="2"> mal </div>
                    <div *ngSwitchCase="3"> mediocre </div>
                    <div *ngSwitchCase="4"> ta bueno </div>
                    <div *ngSwitchCase="5"> ta muy bueno </div>
                    <div *ngSwitchCase="6"> muy bien wachin </div>
                    <div *ngSwitchCase="7"> excelente </div>
                  </div>
              </rating>
              <br>                                            
              {{ data.description }}                
          </div>
      </div>    
  `,
  styles: [` 
      .media {
          margin-bottom: 20px;
      }                      
  `]    
})
export class ProductoComponent {
  @Input() data: any;    
}


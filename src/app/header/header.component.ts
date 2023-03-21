import { Component, EventEmitter, Output } from "@angular/core";

@Component({    
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() shoppingClicked = new EventEmitter<boolean>();
    
    recipesClick()  {
        this.shoppingClicked.emit(false);  
    }
    shoppingClick() {
        this.shoppingClicked.emit(true);
    }
}
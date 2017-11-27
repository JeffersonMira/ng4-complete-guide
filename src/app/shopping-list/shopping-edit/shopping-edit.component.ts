import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // NO NEEDED AS USING FORM CONTROL TEMPLATE DRIVEN  OF ANGULAR NOW.
  // @ViewChild('nameInput') nameInputRef : ElementRef;
  // @ViewChild('amountInput') amountInputRef : ElementRef;

  @ViewChild('f')  slForm : NgForm;  //This is the ref to the form
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {

    //IF THE USER CLICKS ON ANY LINE OF SHOPPING LIST TABLE, THAT WILL FIRE THIS EVENT. THIS EVENT IS FIRED IN THE
    //HOPPING-LIST COMPONENT, ON onAddItem.
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index : number)=>{
          this.editedItemIndex = index;
          this.editMode=true;
          this.editedItem = this.slService.getIngredient(index);

          this.slForm.setValue(
            {
              name : this.editedItem.name ,
              amount : this.editedItem.amount
            }
          );
        }
      );
  }

  onSubmit(form : NgForm){
    const value = form.value;
    const ingredient =  new Ingredient(
      // this.nameInputRef.nativeElement.value,
      // this.amountInputRef.nativeElement.value
      value.name, value.amount);

    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, ingredient);
    }else {
      this.slService.addShoppingItem(ingredient);
    }

    this.editMode = false;
    form.reset(); //CLEAN ALL THE VALUES OF THE FORM
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

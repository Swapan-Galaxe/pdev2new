import { LightningElement } from 'lwc';
 
export default class Parent extends LightningElement {
    text;
 
    handleNotify(event) {
        event.preventDefault();
        this.text = 'Notify event listened in parent.';
        console.log(this.text);
    }
}
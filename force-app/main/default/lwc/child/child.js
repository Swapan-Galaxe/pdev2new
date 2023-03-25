import { LightningElement } from 'lwc';
 
export default class Child extends LightningElement {
    text;
 
    handleNotify(event) {
        event.preventDefault();
        this.text = 'Notify event listened in child.';
        console.log(this.text);
    }
}
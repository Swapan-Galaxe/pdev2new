import { LightningElement } from 'lwc';
 
export default class GrandParent extends LightningElement {
    text;
 
    handleNotify(event) {
        event.preventDefault();
        this.text = 'Notify event listened in grand parent.';
        console.log(this.text);
    }
}
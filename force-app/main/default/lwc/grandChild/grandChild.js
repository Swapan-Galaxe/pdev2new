import { LightningElement } from 'lwc';
 
export default class GrandChild extends LightningElement {
    text;
 
    handleClick(event) {
        event.preventDefault();
        this.text = 'Notify event fired in grand child.';
        // Creates the event
        const customEvent = new CustomEvent('notify');
        // Dispatches the event.
        console.log(this.text);
        this.dispatchEvent(customEvent);
    }
}

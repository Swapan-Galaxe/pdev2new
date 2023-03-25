import { LightningElement, track, wire } from 'lwc';
import retrieveContactData from '@salesforce/apex/AccountSelector.retrieveContactData';

export default class DisplayContactsOnAccountName extends LightningElement {

   @track currentAccountName;
   @track searchAccountName;
   @track dataNotFound;

    handleChangeAccName(event){
      this.currentAccountName = event.target.value;      
    }

    handleAccountSearch(){
       this.searchAccountName = this.currentAccountName;
       if(this.searchAccountName==''){
        this.dataNotFound = 'Please enter account name';
       }
    }
   
    @track records;
  
    @wire (retrieveContactData,{keySearch:'$searchAccountName'})
    wireRecord({data,error}){
        if(data){           
            this.records = data;
            this.error = undefined;
            this.dataNotFound = '';
            if(this.records == ''){
                this.dataNotFound = 'There is no Contact found related to Account name';
            }

           }else{
               this.error = error;
               this.data=undefined;             
            }
           }
    }
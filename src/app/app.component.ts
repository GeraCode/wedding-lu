import { Component } from '@angular/core';
import  partiesJson from './parties.json';

/*interface Parties {
  id: Number;
  partyName: String,
  churchName: String,
  churchAddress: String,
  holyMassHour: String,
  partyRoomName: String,
  partyRoomAddress: String,
  openingHours: String,
  closingHours: String,
  city: String
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'wedding-lu';

  partyId_weddin=1;
  parties: any = partiesJson;


  partyName= "";
  churchName= "";
  churchAddress= "";
  holyMassHour= "";
  partyRoomName= "";
  partyRoomAddress= "";
  openingHours= "";
  closingHours= "";
  city= "";

  constructor(){
    console.log(this.parties);
    for(let data of this.parties ) {
      if(this.partyId_weddin==data.id){
        console.log(data.id);
        console.log(data.partyName);
        console.log(data.churchName);
        console.log(data.churchAddress);
        console.log(data.holyMassHour);
        console.log(data.partyRoomName);
        console.log(data.partyRoomAddress);
        console.log(data.openingHours);
        console.log(data.closingHours);
        console.log(data.city);

        this.partyName= data.partyName;
        this.churchName= data.churchName;
        this.churchAddress= data.churchAddress;
        this.holyMassHour= data.holyMassHour;
        this.partyRoomName= data.partyRoomName;
        this.partyRoomAddress= data.partyRoomAddress;
        this.openingHours= data.openingHours;
        this.closingHours= data.closingHours;
        this.city= data.city;
      }
    } 
  }

}

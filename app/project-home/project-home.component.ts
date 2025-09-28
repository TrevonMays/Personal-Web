import { Component, OnInit } from '@angular/core';

@Component({ 
 standalone: true, 
 imports: [], 
 selector: 'app-projects-home', 
 templateUrl: './project-home.component.html', 
 styleUrls: ['./project-home.component.css']
})

export class ProjectHomeComponent implements OnInit { 
  firstName: string ="Guy Who Knows A Guy"; 
  lastName: string = "Wallace"; 
  phoneNumber: string = "(201) 748-6000";
  email: string = "ceo@definitelyreal.biz";
  jobTitle: string = "The Big Lebowski";
  address: string = "1234 Imaginary Lane, Nowhere, NJ 07001";
  color:string = "#f0ffff";


private getContrastColor(hex: string): string {
    if (!hex) return "#191919";
    const c = hex.replace("#", "");
    const full = c.length === 3 ? c.split("").map(ch => ch + ch).join("") : c.padEnd(6, "0").slice(0, 6);
    const r = parseInt(full.substring(0, 2), 16);
    const g = parseInt(full.substring(2, 4), 16);
    const b = parseInt(full.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#ffffff";
  }

  setProperty(event: Event){ 
   let target = event.target as HTMLInputElement 
   let property: string = target.id 
   switch(property){ 
     case "firstNameInput": 
       this.firstName = target.value; 
       break; 
     case "lastNameInput": 
       this.lastName = target.value; 
       break; 
     case "phoneNumberInput": 
       this.phoneNumber = target.value; 
       break; 
     case "emailInput": 
       this.email = target.value; 
       break; 
     case "jobTitleInput": 
       this.jobTitle = target.value; 
       break; 
     case "addressInput": 
       this.address = target.value; 
       break; 
     case "colorInput": 
       this.color = target.value; 
       break; 
     default: 
        console.warn("No matching ID found!") 
       break; 
    } 
  }

  constructor() { }

  ngOnInit(): void {  }
}
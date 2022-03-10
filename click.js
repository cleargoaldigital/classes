 class Sokaschools {
   set location(newLocation){
     if(newLocation.length<5){
       this._location = "Location: Name must be at least 5 characters long."
     } else{
     this._location = newLocation;
     }
   }

   get location(){
     if(this._location === ''){
       return 'Name Error: Location not set.';
     } else {
     return this._location;
    }
   }
   
   set year(value){
     if(value <= 2013){
       this._year = value;
     } else {
     this._year = 'after 2013';
    }
  }
   
   get year(){

     return this._year;
   }

   constructor(location, year){
    this.location = location;
    this.year = year;
  }
}
 
 let micfis = new Sokaschools('Ire-Akari', 2013);

//  return micfis.location;
 
 let mariny = new Sokaschools('Soka', 2016);
 
 let fazl = new Sokaschools('Monatan', 1996);
 
 let newloc = "ade";
 console.log(newloc.length);
 
console.log('MICFIS was established in the year ' + micfis.year + ' and is located at ' + micfis.location + '.');

console.log('MARINY School was established in the year ' + mariny.year + ' and is located at ' + mariny.location + '.');

console.log('FAZL-OMAR College was established in the year ' + fazl.year + ' and is located at ' + fazl.location + '.');

 class Sokaschools {
   set location(newLocation){
     if(newLocation.length < 5){
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

   // Add values to existing values
   changeYear(newvalue){
    this.year = parseInt(this.year) + parseInt(newvalue);
  }

   constructor(location, year){
    this.location = location;
    this.year = year;
  }
}
 
 let micfis = new Sokaschools('Ire-Akari', 2013);

 let mariny = new Sokaschools('Soka', 2016);
 
 let fazl = new Sokaschools('Monatan', 1996);
 
console.log('MICFIS was established in the year ' + micfis.year + ' and is located at ' + micfis.location + '.');

console.log('MARINY School was established in the year ' + mariny.year + ' and is located at ' + mariny.location + '.');

console.log('FAZL-OMAR College was established in the year ' + fazl.year + ' and is located at ' + fazl.location + '.');

// console.log(mariny.changeYear(12));


class Person{

  set fname(first){
    this._fname = first;
  }

  get fname(){
    return this._fname;
  }

  set lname(last){
    this._lname = last;
  }

  get lname(){
    return this._lname;
  }

  fullName(greet=false){
    let allName = this.makeName(greet);
    return allName;
  }
  constructor(fname, lname){
    this.fname = fname;
    this.lname = lname;
  }

  makeName(greet){
    if(greet === true){
      return this.addGreet() + ' '+ this._fname + ' '+ this._lname;
    }
      return this._fname + ' '+ this._lname;
    }
  
  addGreet(){
    return "Hello";
  }

}

let father = new Person("Taofeek", "Ajibade");

// console.log(father.fname + ' ' + father.lname);

let mother = new Person("Hibat", "Ajibade")

// console.log(mother.fname + ' ' + mother.lname);

let son = new Person("Abdulhayy", "Ajibade")

// console.log(son.fname + ' ' + son.lname);

console.log(father.fullName(true));
console.log(mother.fullName(true));
console.log(son.fullName(true));
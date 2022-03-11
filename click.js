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

// Another example of class, set and get methods.
class Person{

  set fname(first){
    this._fname = this.validateName(first);
  }

  get fname(){
    return this._fname;
  }

  set lname(last){
    this._lname = this.validateName(last);
  }

  get lname(){
    return this._lname;
  }

  fullName(greet=false){
    let allName = this.makeName(greet);
    return allName;
  }
  constructor(first, last){
    this.fname = this.validateName(first);
    this.lname = this.validateName(last);
  }

  validateName(name){
    if(name != undefined){
      if(name.length>=5){
        return name;
      }
      return "Bad Name";
    }
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

let mother = new Person("Hibat", "Ajibade")

let son = new Person("Abdulhayy", "Ajibade")

console.log(father.fullName(true));
console.log(mother.fullName(true));
console.log(son.fullName(true));


class Address{
  get city(){
    return this._city;
  }

  constructor(city, state){
    this._city = city;
    this._state = state;
  }
}

class Employee{
  get address(){
    return this._address
  }

  constructor(emId, name, address){
    this._emId = emId;
    this._name = name;
    this._address = address;
  }
}

class Customer{
  get address(){
    return this._address
  }

  constructor(custId, name, address){
    this._custId = custId;
    this._name = name;
    this._address = address;
  }
}

let empAddress = new Address('Modakeke', 'Osun');
let staff1 = new Employee(1, 'Taofeek', empAddress);

let custAddress = new Address('Kuta', 'West');
let customer1 = new Customer(1, 'ClearGoal Digital Solutions', custAddress);

console.log(staff1.address.city);
console.log(customer1.address.city);

// Basics of Javascript Inheritance

class Personal{
  set names(n){
    this._names = n;
  }

  get names(){
    return this._names;
  }
  
  constructor(n){
    this._names = n;
  }
}

class Employees extends Personal{
  set title(t){
    this._title = t;
  }
  get title(){
    return this._title
  }
  constructor(n, t){
    super(); //Invokes super first
    this._names = n; //Invokes super's inherited setter
    this._title = t; //set local variable
  }
}

let staff2 = new Employees('Akanbi', 'Director'); //Use Employee Constructor
console.log(staff2.names); //Super's getter
console.log(staff2.title); //Employee's setter

let staff3 = new Employees();
staff3.name = 'Adewale';
staff3.title = 'Developer';

console.log(staff3.name);
console.log(staff3.title);


let human = new Personal('Ajibade');
console.log(human.names)
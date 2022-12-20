//Firstly object method property review ::

const normalPerson = {
    firstName : 'Sharaban',
    lastName : 'Tohura' ,
    salary : 15000 ,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount , tips , tax){
        // console.log(this);
        this.salary = this.salary - amount - tips - tax ;
        return this.salary ;
    } 
}
// console.log(normalPerson);
    normalPerson.chargeBill(150 ,0 , 0);
    normalPerson.chargeBill(850 , 0 , 0);
    normalPerson.chargeBill(400 ,0 ,10);
 console.log("Normal Person Salary Remain :" , normalPerson.salary);

// Now LETS Start Bind Related Details and Code :: (object use bind to borrow method from another object)

const heroPerson = {
   firstName: 'Hridoy' ,
   lastName : 'Khan',
   salary : 25000 ,

}
const friendlyPerson = {
    firstName : 'Abu' ,
    lastName : 'Ubydha',
    salary : 18000 ,
 }

 const businessPerson = {
    firstName : 'Abtahii' ,
    lastName : 'Sameen',
    salary : 50000 ,
 }
//  normalPerson.chargeBill();

//  const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//  heroChargeBill(2000);
//  heroChargeBill(3000);
//  console.log("Hero Person Salary Remain = " ,heroPerson.salary);
//  console.log("Normal person Salary Remain = " ,normalPerson.salary);

 const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
 friendlyPersonChargeBill(500 , 50 ,60);
 console.log("Friendly Person Salary Remain using Bind = " , friendlyPerson.salary);

// Now LETS DISCUSS difference between bind, call and apply ::

normalPerson.chargeBill.call(heroPerson, 900, 50 , 50 ); 
normalPerson.chargeBill.call(heroPerson, 1000, 30 , 20 ); 
console.log("Remaining Salary of HeroPerson Using Call :" ,heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 10,10,10);
console.log("Remaining Salary of FriendlyPerson Using Call :" , friendlyPerson.salary);

// LETS TRY Same Thing with APPLY! :

normalPerson.chargeBill.apply(businessPerson, [4000 ,500 ,500]);
console.log("Remaining Salary of BusinessPerson using Apply :" , businessPerson.salary);


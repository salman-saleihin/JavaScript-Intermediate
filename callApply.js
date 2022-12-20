//Firstly object method property review ::

const normalPerson = {
    firstName : 'Sharaban',
    lastName : 'Tohura' ,
    salary : 15000 ,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        // console.log(this);
        this.salary = this.salary - amount ;
        return this.salary ;
    } 
}
// console.log(normalPerson);
    normalPerson.chargeBill(150);
    normalPerson.chargeBill(850);
    normalPerson.chargeBill(400);
// console.log(normalPerson.salary);

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
//  normalPerson.chargeBill();
 const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
 heroChargeBill(2000);
 heroChargeBill(3000);
 console.log("Hero Person Salary Remain = " ,heroPerson.salary);
 console.log("Normal person Salary Remain = " ,normalPerson.salary);

 const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
 friendlyPersonChargeBill(500);
 console.log("Friendly Person Salary Remain = " , friendlyPerson.salary);

const normalPerson = {
    firstName : 'Sharaban',
    lastName : 'Tohura' ,
    salary : 15000 ,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount ;
        return this.salary ;
    } 
}

// console.log(normalPerson);

normalPerson.chargeBill(150);
normalPerson.chargeBill(850);
normalPerson.chargeBill(400);
console.log(normalPerson.salary);
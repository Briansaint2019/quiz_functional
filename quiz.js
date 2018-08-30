const employees = [{name: "Rick Sanchez", rate: 12.42, hours: 72 }, {name: "Ken Moore", rate: 11.46, hours: 60},
{Name:"James Morgan", Rate: 14.68, Hours: 40 }]

class PayRoll{
constructor(){
this.employees= employees
this.names=this.getNames()
this.fulltime = this.getFullTime()
this.totallabor = this.getTotalLabor()




}
getNames(){
return this.employees.map(nam => {
    return nam.name.sort
})

}

getFullTime(){
return this.employees.filter(nam =>{return nam.Hours>60})
}

getTotalLabor(){
return this.totallabor.reduce((acc, curr, i))=>{
if (i === this.names -1) return((acc, curr))/(i+1).tofixed(2)



}
}

}














const pay = new PayRoll
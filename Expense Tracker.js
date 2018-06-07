let account = {
    name : "Rohan Ganguly",
    expenses : [],
    income : [],
    addExpense : function(desc,amount){
        this.expenses.push({
            desc:desc,
            amount:amount
        })

    
    },
    addIncome : function (desc,amount){
        this.income.push({
            desc : desc,
            amount : amount
        })},
    getAccountSummary : function(){

        let totalExpenses = 0
        let accoutBalance = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense){
            totalExpenses=totalExpenses+expense.amount
            
        })
        this.income.forEach(function(income){

            totalIncome = totalIncome+income.amount
        })
        
        accoutBalance = totalIncome - totalExpenses

        return `${this.name} has $${accoutBalance}. ${this.name}'s income is ${totalIncome} & Total Expense ${totalExpenses}`
    }
    
   
    


}

//add  income array to the account
// addIncome method desc,amount


//expense=> description, amount
//addExpense => description,amount
//getAccountSummary=> total expenses => name has $amount in expenses
account.addIncome('Salary',15000)

account.addExpense('Rent',900)
account.addExpense('coffee',2)
console.log(account.getAccountSummary())

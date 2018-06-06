let myAccount = {
    name : "Rohan Ganguly",
    expenses : 0,
    income :0


}



let addExpense = function (account,amount){
   account.expenses = account.expenses+amount
    

    


}

//create addIncome function. will take 2 arg account number and income
let addIncome = function(account,income){
    account.income = account.income+income
  

}


// resetAccount to reset expense and income of the account to 0.only 1 argument i.e account
let resetAccount=function(account){
    account.expenses=0
    account.income=0


}
//getAccountSummary -print name, expense , income and balance
let getAccountSummary=function(account){
    let balance = account.income-account.expenses
    return{
        summary : `Account for -${account.name} has ${balance}. ${account.income}in income & ${account.expenses} in expenses`

        
    }


}

addIncome(myAccount,2000)

addExpense(myAccount,2.50)
addExpense(myAccount,160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

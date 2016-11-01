var fb =  function() {
    return {
        fizzbuzz:function(value){
            let result = "";
            if (value % 3 === 0) result += "Fizz"
            if (value % 5 === 0) result += "Buzz"
            return (result) ? result : value.toString()
        }
    }
}

module.exports = new fb();

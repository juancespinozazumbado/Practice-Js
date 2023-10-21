//If ypu you can read this code, you would probably take a free cup of coffee.

var your_drink;

var Reverse = function(string){
    return string.split("").reverse().join("");
}

var barista = {
    string_1 : "ers",
    string_2 : Reverse("rap"),
    string_3 : "amet",
    request : function(preference ){
        return `${preference}, Secret word: ${this.string_2}${this.string_3}${this.string_1}`;
            
    }
    
};

your_drink = "Moke";
var result = barista.request(your_drink);

console.log(result);


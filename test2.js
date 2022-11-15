

var cars = [{brand: "Volvo", Model: "V60"},
    {brand: "Volvo", Model: "V60"},
    {brand: "Volvo", Model: "V60"}];

    function loadMyCars(){
        var result = "";
        for(var i = 0; i < cars.length; i++){
            result += "<li>" + cars[i].brand + " " + cars[i].Model + "</li>";
        }

        result += "<h3> Totally " + cars.length  + " amount of cars</h3>"
        document.getElementById("mycars").innerHTML = result;
    }
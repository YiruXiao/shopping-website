var item_list = [
    "French Roast",
    "Trapper Creek",
    "Aeropress",
    "Bodum",
    "brew kit"
]

var shop_chart = {
    "French Roast":{
        "name":"French Roast",
        "quatity":1,
        "price":15
    },
    "Trapper Creek":{
        "name":"Trapper Creek",
        "quatity":1,
        "price":15
    },
    "Aeropress":{
        "name":"Aeropress",
        "quatity":1,
        "price":30
    },
    "Bodum" :{
        "name":"Bodum",
        "quatity":1,
        "price":30
    },
    "brew kit":{
        "name":"brew kit",
        "quatity":1,
        "price":215
    }
}


var total;
var obj;

function writeFeatureList() {
    total = 0;
    obj = fetchShoppingList();
    var str;
    var len = 0;
    for(var i =0; i<obj.length;i++){
        len = len + obj[i].quatity;
    }
    console.log(len);
    document.getElementById("total").innerHTML = len;
    if (obj.length > 0) {
        str += '<div class="cart-item-list"> ';
        for (var i = 0; i < obj.length; i++) {
            str += '<div class="cart-item"> ';

            str += '<div class="cart-box-name"> ';
            str += obj[i].name;
            str += '</div> '

            str += '<div class="cart-box-quatity"> ';
            str += obj[i].quatity;
            str += '</div> '

            str += '<div class="cart-box-price"> ';
            str += "$" + obj[i].quatity*obj[i].price;
            str += '</div> ';

            str += "&nbsp;&nbsp";
            str += '<button class="cart-delete-button" type="button" style="width:2.0vw;height:1.8vw;border-radius:100%;">x</button> ';
            str += '</div> ';


            total += parseFloat(obj[i].quatity*obj[i].price);
            // str += '</div> <!-- end cart-item --> ';
            //
            // str += '<div id="cart-box-price-total"> ';
            // str += '<div class="clearboth"></div> ';
        }
        str += '<div class="cart-item-line"> ';
        str += '</div> ';
        str += '<div class="cart-item-box"> ';
        str += '</div> ';
        str += '<div class="cart-item-total-text"> ';
        str += "SUBTOTAL";
        str += '</div> ';



        str += '<div class="cart-item-subtotal-text">'
        str += '$'+ total.toFixed(2);
        grand = total.toFixed(2);
        str += '</div> ';

        str += '<div class="cart-item-l2"> ';
        str += '</div> ';

        str += '<div class="cart-item-grandtotal-text">'
        str += "TOTAL";
        str += '</div> ';

        str += '<div class="cart-item-grand-text">'
        str += '$'+ parseFloat(grand*1.11).toFixed(2);
        str += '</div> ';


        document.getElementById("checkoutFeature").innerHTML = str;

        var removeButtons = document.getElementsByClassName("cart-delete-button");
        for( let i = 0; i < removeButtons.length; i++ ) {
            removeButtons[i].addEventListener("click", function(){removeElement(i);});
        }
    }

    else {
        str += '</div> ';
        document.getElementById("checkoutFeature").innerHTML = str;
    }
}

function removeElement( n ) {
    obj.splice( n, 1 );
    sessionStorage.setItem("shoppingList", JSON.stringify(obj) );
    writeFeatureList();
}

function fetchShoppingList() {
    var lis;
    if ( sessionStorage.shoppingList)  {
        lis = JSON.parse(sessionStorage.getItem("shoppingList"));
    }
    else {
        lis = [];

    }
    return lis;
}


function clickme(){

    alert("Thank you for submitted your information!")
    for (var i =1; i< 13; i++){
        document.getElementById("text" + i).value = "";
    }

}
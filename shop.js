var x;

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
if(document.getElementById("total").innerHTML == 0){
    writeFeatureList();
};


for(x in shop_chart) {
    var currentItems = shop_chart[x];
    if(x== "French Roast") {
        let c = currentItems;
        document.getElementById('bottom1').addEventListener("click", function () {
            addToShoppingList(c)
        });
    }
    if(x== "Trapper Creek") {
        let c = currentItems;
        document.getElementById('bottom2').addEventListener("click", function () {
            addToShoppingList(c)
        });
    }
    if(x== "Aeropress") {
        let c = currentItems;
        document.getElementById('bottom3').addEventListener("click", function () {
            addToShoppingList(c)
        });
    }
    if(x== "Bodum") {
        let c = currentItems;
        document.getElementById('bottom4').addEventListener("click", function () {
            addToShoppingList(c)
        });
    }
    if(x== "brew kit") {
        let c = currentItems;
        document.getElementById('bottom5').addEventListener("click", function () {
            addToShoppingList(c)
        });
    }


}


function writeFeatureList() {
    var obj;
    obj = fetchShoppingList();

    var len = 0;
    for (var i = 0; i < obj.length; i++) {
        len = len + obj[i].quatity;
    }
    console.log(len);
    document.getElementById('total').innerHTML = len;
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

function addToShoppingList(item) {
    var list = JSON.parse(sessionStorage.getItem("shoppingList"));
    if ( list == null ) {
        list = [];
    }
    var flag = 0;
    for (var i = 0; i < list.length; i++) {
        if (item.name == list[i].name) {
            list[i].quatity += 1;
            flag = 1;
        }
    }

    if (flag == 0) {
        list.push(item);
    }

    if(list.length !=0) {
        var len = 0;
        for(var i=0; i<list.length;i++){
            len= len + list[i].quatity;
        }
        document.getElementById("total").innerHTML = len;
    }
    else  {
        document.getElementById("total").innerHTML = "null";
    }

    sessionStorage.setItem("shoppingList", JSON.stringify(list));}



function clickme(){
    alert("Thank you for submitted your information!")
    for (var i =1; i< 6; i++){
        document.getElementById("text" + i).value = "";
    }

}
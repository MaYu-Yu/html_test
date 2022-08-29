document.addEventListener("DOMContentLoaded", 
    function(event){
        var select = document.getElementById('jumpM');
        select.addEventListener("change", 
            function(){
                selectUrl = this.options[this.options.selectedIndex].value;
                var yes = confirm("Go to "+ selectUrl +" ? (y/n)")
                if (yes){
                    document.location.href=selectUrl;
                }
            }   
        );
    }
);
function add_ol(){
    var ol = document.getElementById('olObj');
    var li = document.createElement("li");
    var txt = document.createTextNode("Marine!");
    li.appendChild(txt);
    ol.appendChild(li);
}

function calc_age(){
    var today = new Date();
    var birthDate = new Date(document.getElementsByName("birthday")[0].value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').value = age;
}
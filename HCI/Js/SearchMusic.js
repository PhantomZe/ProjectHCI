var category=["Rock","Asians","Pop"];
var htmlCategory='<button class="btnFilter" id="active" value="all">Show all</button>';
for(var i=0;i<category.length;i++){
    htmlCategory = htmlCategory+'<button class="btnFilter" value="'+category[i]+'">'+category[i]+'</button>';
}
$('#filterCategory').html(htmlCategory);

filterSelection("all");

var htmlFilterContent="";
for(var i=0;i<category.length;i++){
    for(var j=0;j<5;j++){
        htmlFilterContent = htmlFilterContent+'<img src="./Images/Genre/'+category[i]+'/'+ category[i]+(j+1)+ '.jpg"class="filterImg '+category[i]+'">';
    }
}
$('#filterContent').html(htmlFilterContent);

function filterSelection(c) {
    console.log(c)
  var x, i;
  x = $(".filterImg");
  x.hide();
  if (c == "all"){
    x.show();
  }
  else{
    x = $('.'+c);
    console.log(x);
    x.show();
  }
}

var btns = document.getElementsByClassName("btnFilter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var value=this.value;
    filterSelection(value);
    var current = document.getElementById("active");
    current.id = current.id.replace("active", "");
    this.id = this.id.replace("", "active");
  });
}

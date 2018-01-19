


// creating the top products menu

        function starting_page(){

        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/top_prod.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(top_prod){
            for (var j=0; j<top_prod.length; j++){
        $("#prod_list").append("<hr><li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+top_prod[j].img+"' alt='image du produit' ><figcaption>"+top_prod[j].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>la marque:</span>"+top_prod[j].marque+"<br><span class='big_title'>description: </span><br>"+top_prod[j].description+"</p><p class='col-sm-3'><span class='big_title'>prix: </span> <br><del>"+top_prod[j].exprix +"</del>--<ins>"+top_prod[j].prix+"</ins><br><span class='big_title'>contacter:<br></span> <span class='contact_info'>"+top_prod[j].contact+"</span></p></li><br>");

            }
            },
        


        });

    }
starting_page();

// creating the all products menu
    function show_all(){
        $("#prod_list").empty();
        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/data.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(all){
            for (var m=0; m<all.length; m++){
        $("#prod_list").append("<hr><li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+all[m].img+"' alt='image du produit' ><figcaption>"+all[m].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>la marque:</span>"+all[m].marque+"<br><span class='big_title'>description: </span><br>"+all[m].description+"</p><p class='col-sm-3'><span class='big_title'>prix: </span> <br><del>"+all[m].exprix +"</del>--<ins>"+all[m].prix+"</ins><br><span class='big_title'>contacter:<br></span> <span class='contact_info'>"+all[m].contact+"</span></p></li><br>");

            }
            },
        


        });

    }
// creating the category list in the left sidebar
var all_tags=[];
        function tags_list(){
        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/data.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(all_prod){
                //making tags list
                for (var i=0; i<all_prod.length; i++){
                        if (!all_tags.includes(all_prod[i].nom)){
                            all_tags.push(all_prod[i].nom);
                    
                        }
                        if (!all_tags.includes(all_prod[i].categ)){
                            all_tags.push(all_prod[i].categ);
                    
                        }
                        if (!all_tags.includes(all_prod[i].sous_categ)){
                            all_tags.push(all_prod[i].sous_categ);
                    
                        }
                        if (!all_tags.includes(all_prod[i].marque)){
                            all_tags.push(all_prod[i].marque);
                    
                        }


                 }
                 all_tags=all_tags.sort();
                 for(var s=0; s<all_tags.length; s++){
                     $("#tags_list").append('<li id="'+all_tags[s]+'"class="tag">'+all_tags[s]+'</li>');
                 }

            },


        });
    };

    tags_list();

    // function filter by category
    function filter_by_categ(x){
        $("#prod_list").empty();
            $.ajax({

                type: "GET",
                url: "http://www.vetoplus.net/data.json",
                dataType: "json",
                contentType: "application/json",
                crossDomain: true,
                success: function(data){
                for (var k=0; k<data.length; k++){
                    if (data[k].categ==x){
                        $("#prod_list").append("<hr><li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+data[k].img+"' alt='image du produit' ><figcaption>"+data[k].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>la marque:</span>"+data[k].marque+"<br><span class='big_title'>description :</span><br>"+data[k].description+"</p><p class='col-sm-3'><span class='big_title'>prix:</span><br><del>"+data[k].exprix +"</del>--<ins>"+data[k].prix+"</ins><br><span class='big_title'>contacter: <br>"+data[k].contact+"</p></li><br><hr>");


                    
                    }

                }
            },
        


        });
        };
        
         // function filter by entering input in search field
         function filter_func() {
              // Declare variables
            var search_field ,key_word,filtred_list,filtred_elements;
            search_field = document.getElementById('search_field');
            key_word = search_field.value.toUpperCase();
            filtred_list = document.getElementById("tags_list");
            filtred_elements = filtred_list.getElementsByTagName('li');

            // Loop through all list items, and hide those who don't match the search query

           if (key_word==""){
            for (f = 0; f < filtred_elements.length; f++) {
                
                     filtred_elements[f].style.display = "";
                 }
                }else{
                for (f = 0; f < filtred_elements.length; f++) {
                    if (filtred_elements[f].innerHTML.toUpperCase().indexOf(key_word) > -1) {
                        filtred_elements[f].style.display = "";
                    } else {
                        filtred_elements[f].style.display = "none";
                    }
                }
            
                    
            }
}







function filter_by_tag(tag){
    $("#prod_list").empty();
    $.ajax({
        type: "GET",
        url: "http://www.vetoplus.net/data.json",
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        success: function(all_prod){
            for (var t=0; t<all_prod.length; t++){
                if (all_prod[t].nom==tag || all_prod[t].categ==tag || all_prod[t].sous_categ==tag || all_prod[t].marque==tag){
                    $("#prod_list").append("<hr><li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+all_prod[t].img+"' alt='image du produit' ><figcaption>"+all_prod[t].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>la marque:</span>"+all_prod[t].marque+"<br><span class='big_title'>description :</span><br>"+all_prod[t].description+"</p><p class='col-sm-3'><span class='big_title'>prix:</span><br><del>"+all_prod[t].exprix +"</del>--<ins>"+all_prod[t].prix+"</ins><br><span class='big_title'>contacter: <br>"+all_prod[t].contact+"</p></li><br><hr>");
                }
            }
},
         
    });
};
var the_tag;
$(document).delegate('.tag','click',function(){
    the_tag=$(this).attr('id');
    filter_by_tag(the_tag);
});    
        



// creating the top products menu

        function starting_page(){

        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/top_prod.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(top_prod){
            console.log(top_prod[1].nom);
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
            console.log(all[1].nom+" "+all[1].nom);
            for (var m=0; m<all.length; m++){
        $("#prod_list").append("<hr><li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+all[m].img+"' alt='image du produit' ><figcaption>"+all[m].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>la marque:</span>"+all[m].marque+"<br><span class='big_title'>description: </span><br>"+all[m].description+"</p><p class='col-sm-3'><span class='big_title'>prix: </span> <br><del>"+all[m].exprix +"</del>--<ins>"+all[m].prix+"</ins><br><span class='big_title'>contacter:<br></span> <span class='contact_info'>"+all[m].contact+"</span></p></li><br>");

            }
            },
        


        });

    }
// creating the category list in the left sidebar
        function tags_list(){
        var all_tags;
        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/data.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(all_prod){
                //making tags list
                all_tags=[];
                for (var i=0; i<all_prod.length; i++){
                        if (!all_tags.includes(all_prod[i].nom)){
                            $("#tags_list").append("<li><span>"+all_prod[i].nom+"</span></li>");
                            all_tags.push(all_prod[i].nom);
                    
                        }else if (!all_tags.includes(all_prod[i].categ)){
                            $("#tags_list").append("<li><span>"+all_prod[i].categ+"</span></li>");
                            all_tags.push(all_prod[i].categ);
                    
                        }else if (!all_tags.includes(all_prod[i].sous_categ)){
                            $("#tags_list").append("<li><span>"+all_prod[i].sous_categ+"</span></li>");
                            all_tags.push(all_prod[i].sous_categ);
                    
                        }else if (!all_tags.includes(all_prod[i].sous_categ)){
                            $("#tags_list").append("<li><span>"+all_prod[i].marque+"</span></li>");
                            all_tags.push(all_prod[i].marque);
                    
                        }


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


        var tst_lst =["sjkfh","qsfjfq","abqsf","skjfhq","zkjfhq"];
        for (var y=0; y<tst_lst.length; y++){
            $("#filtred_list ").append("<li style='display:none' class='filt'>"+tst_lst[y]+"</li>");
        }
         // function filter by entering input in search field
         function filter_func() {
              // Declare variables
            var search_field ,key_word,filtred_list,filtred_elements, li, a, i;
            search_field = document.getElementById('search_field');
            key_word = search_field.value.toUpperCase();
            filtred_list = document.getElementById("filtred_list");
            filtred_elements = filtred_list.getElementsByClassName('filt');

            // Loop through all list items, and hide those who don't match the search query

           if (key_word==""){
            for (f = 0; f < filtred_elements.length; f++) {
                
                     filtred_elements[f].style.display = "none";
                 }
                 console.log('works');
                }else{

                console.log('works');
                console.log(filtred_elements.length);
                for (f = 0; f < filtred_elements.length; f++) {
                   console.log('filtering');
                    if (filtred_elements[f].innerHTML.toUpperCase().indexOf(key_word) > -1) {
                        filtred_elements[f].style.display = "";
                    } else {
                        filtred_elements[f].style.display = "none";
                    }
                }
            
                    
            }
             }
         
                 
        
        



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
        $("#prod_list").append("<li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+top_prod[j].img+"' alt='image du produit' ><figcaption>"+top_prod[j].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>description: </span><br>"+top_prod[j].description+"</p><p class='col-sm-3'><span class='big_title'>prix: </span> <br><del>"+top_prod[j].exprix +"</del>--<ins>"+top_prod[j].prix+"</ins><br><span class='big_title'>contacter:<br></span> <span class='contact_info'>"+top_prod[j].contact+"</span></p></li><br>");

            }
            },
        


        });

    }
    starting_page();
    // creating the category list in the left sidebar
        function category_list(){
        
        $.ajax({

            type: "GET",
            url: "http://www.vetoplus.net/data.json",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            success: function(all_prod){
                //making categories
                var sous_categorie=[];
                for (var i=0; i<all_prod.length; i++){
                        if (all_prod[i].categ=="animaleries" && !sous_categorie.includes(all_prod[i].sous_categ)){
                            $("#anim").append("<li>"+all_prod[i].sous_categ+"</li>");
                            sous_categorie.push(all_prod[i].sous_categ);
                        }else if (all_prod[i].categ=="cosmétiques" && !sous_categorie.includes(all_prod[i].sous_categ)){
                            $("#cosm").append("<li>"+all_prod[i].sous_categ+"</li>");
                            sous_categorie.push(all_prod[i].sous_categ);
                        }else if (all_prod[i].categ=="informatiques et bureautiques" && !sous_categorie.includes(all_prod[i].sous_categ)){
                            $("#infor").append("<li>"+all_prod[i].sous_categ+"</li>");
                            sous_categorie.push(all_prod[i].sous_categ);
                        }else if (all_prod[i].categ=="parapharmacetiques" && !sous_categorie.includes(all_prod[i].sous_categ)){
                            $("#parapharm").append("<li>"+all_prod[i].sous_categ+"</li>");
                            sous_categorie.push(all_prod[i].sous_categ);
                        }
                
                }




            },


        });
    };

    category_list();

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
                        $("#prod_list").append("<li class='col-sm-12 prod row'><figure class='col-sm-4'><img src='"+data[k].img+"' alt='image du produit' ><figcaption>"+data[k].nom+"</figcaption></figure><p class='col-sm-5'><span class='big_title'>description :</span><br>"+data[k].description+"</p><p class='col-sm-3'><span class='big_title'>prix:</span><br><del>"+data[k].exprix +"</del>--<ins>"+data[k].prix+"</ins><br><span class='big_title'>contacter: <br>"+data[k].contact+"</p></li><br>");


                    
                    }

                }
            },
        


        });
        };



         // function filter by sub_category

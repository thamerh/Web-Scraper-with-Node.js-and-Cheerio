import request from "request";
import Cheerio  from "cheerio";

export const getdata = async ( req, res) =>{
    
    var json={image:"",siteweb:"",ref:"",price:"",dispo:"",paiment:""}
    try {
   

      let url = req.body.url;
      let image=req.body.image;
      let siteweb=req.body.siteweb;
      json.image=image;
      json.siteweb=siteweb;
       // scarping code 
    request(url,function (error,response,html){
        var $ = Cheerio.load(html)
  
          $(".product-reference").filter(function(){
            var data =$(this);
            var reference = data.children().eq(1).text();
            json.ref=reference;
            console.log( reference)
          })
          $(".current-price").filter(function(){
            var data =$(this);
            var price = data.children().eq(0).text();
            console.log(price)
           json.price=price;
          })
          $("#stock_availability").filter(function(){
            var data =$(this);
           var  dispo = data.children().eq(0).text();
            console.log(dispo)
            json.dispo=dispo;
          })
          $(".product-prices-ntimes-mobile").filter(function(){
            var data =$(this);
            var faciliter = data.children().eq(0).text();
            console.log(faciliter)
            json.paiment=faciliter;
          })
          console.log(json)
        res.json(json)
    })
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}
import express from "express";
import request from "request";
import Cheerio  from "cheerio";
import router from "./router/index.js";
const app =express();
app.use(express.urlencoded({ extended: true }));
// var ref,price,dispo,paiment;
// var json={ref:"",price:"",dispo:"",paiment:""}
// app.get('/reference',(req,res)=>{
//     // scarping code 
//     const url = "https://www.tunisianet.com.tn/pc-portable-tunisie/60036-copy-of-pc-portable-hp-victus-15-fb0022nk-i7-12700h-8-go-gtx-1650-4g.html";
    
//     request(url,function (error,response,html){
//         var $ = Cheerio.load(html)
  
//           $(".product-reference").filter(function(){
//             var data =$(this);
//             var reference = data.children().eq(1).text();
//             json.ref=reference;
//             console.log( reference)
//           })
//           $(".current-price").filter(function(){
//             var data =$(this);
//             var price = data.children().eq(0).text();
//             console.log(price)
//            json.price=price;
//           })
//           $("#stock_availability").filter(function(){
//             var data =$(this);
//            var  dispo = data.children().eq(0).text();
//             console.log(dispo)
//             json.dispo=dispo;
//           })
//           $(".product-prices-ntimes-mobile").filter(function(){
//             var data =$(this);
//             var faciliter = data.children().eq(0).text();
//             console.log(faciliter)
//             json.paiment=faciliter;
//           })
//           console.log(json)
//         res.json(json)
//     })
  
 

// })
app.use(express.json());
app.use(router);


app.listen(5000,()=>{
    console.log("server is listen on port 5000 ");
})
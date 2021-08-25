const axios = require ('axios');
const cheerio = require ('cheerio');
const fs = require('fs');


const url = 'https://www.etsy.com/c/home-and-living?explicit=1&ship_to=ZZ&ref=catfilter_L0';


async function scrapeData(){
    try{
        const {data} = await  axios.get(url)

        const $ = cheerio.load(data);

        const listing = $(".listing-link");

        const products = [];

        listing.each((idx, el)=>{
            const product = { name: "",image:"",price:""};

            product.name = $(el).find('h3').text().replace(/[\n\t]/g,"").trim();
            product.image =$(el).find('.height-placeholder > img ').attr('src') || $(el).find('.height-placeholder > img ').attr('data-src');
            product.price = $(el).find('.currency-value').text().trim();
            
            products.push(product);
        } ) 
        console.log(products)

        fs.writeFile("data/product.json", JSON.stringify(products, null, 2), (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Successfully written data to file");
          });
    }
    catch(err){
        console.log(err)

    }
}

module.exports = scrapeData;
const NFTs =[]

function mintNFT (_name,_group,_power,_gender) {
   const NFT = {
      "name" : _name,
      "group" : _group,
      "power" : _power,
      "gender" :_gender,
     
   }
   NFTs.push(NFT);
   console.log("Character: " +_name);
}


function listNFTs () {
   for(let i = 0; i < NFTs.length; i++ )
      {
         console.log("\nID:\t" +(i +1));
         console.log("Name:\t" + NFTs[i].name);
         console.log("Group:\t" +NFTs[i].group);
         console.log("Power:\t" +NFTs[i].power);
         console.log("Gender:\t" +NFTs[i].gender);
      
      }
}

function getTotalSupply() {
   console.log("\n" + NFTs.length);
}

mintNFT("Iron Man" ,"Avengers",94, "Male");
mintNFT("Thor" ,"Avengers" ,96, "Male");
mintNFT("Spider Man" ,"Avengers" ,90, "Male");
mintNFT("Black Widow" ,"Avengers" ,85 ,"Female");
mintNFT("Batman" ,"Justice League" ,89, "Male");
mintNFT("Wonder Women" ,"Justice League" ,93, "Female");

listNFTs();
getTotalSupply();

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
NFTList = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, color, size) {
    const nft = {};
    nft.name = name;
    nft.color = color;
    nft.size = size;
    NFTList.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("NFT Metadata: ");
    for(i = 0; i < NFTList.length; i++){
        console.log(NFTList[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + NFTList.length);
}

// call your functions below this line
mintNFT("nft", "black", 5);
mintNFT("nft1", "white", 10);
mintNFT("nft2", "red", 7);
mintNFT("nft3", "green", 5);
mintNFT("nft4", "blue", 14);

listNFTs();

getTotalSupply();
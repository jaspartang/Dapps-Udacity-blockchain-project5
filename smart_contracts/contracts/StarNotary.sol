pragma solidity ^0.4.23;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
// import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract StarNotary is ERC721 { 

    struct Star { 
        string name;
        string story;
        string dec;
        string mac;
        string cent;
    }

    uint256 public count;

    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;
    mapping(bytes32 => bool) public starHash;


    function createStar(string  _name,string _story,string  _dec,string  _mac,string  _cent,uint256 _tokenId) public {
        count++;
        uint256 tokenId = count;
        require(keccak256(abi.encodePacked(tokenIdToStarInfo[tokenId].dec)) == keccak256(""));
        Star memory newStar = Star(_name);
        tokenIdToStarInfo[_tokenId] = newStar;

        require(keccak256(abi.encodePacked(_dec)) != keccak256(""));
        require(keccak256(abi.encodePacked(_mac)) != keccak256(""));
        require(keccak256(abi.encodePacked(_cent)) != keccak256(""));
        require(tokenId != 0);
       
        
        Star memory _starInfo = Star(_name,_story,_dec,_mac,_cent);
        tokenIdToStarInfo[tokenId] = _starInfo;

     bytes32 hash = starHash(_dec, _mac, _cent);
        starHash[hash] = true;
        _mint(msg.sender, _tokenId);
    }

    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender);

        starsForSale[_tokenId] = _price;
    }

    function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0);
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost);

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if(msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }
    }
    function starHash(string ra, string dec, string mag) private pure returns(bytes32) {
        return keccak256(abi.encodePacked(ra, dec, mag));
    }
}
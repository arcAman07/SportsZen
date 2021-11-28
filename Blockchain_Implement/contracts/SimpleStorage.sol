pragma solidity ^0.6.0;

contract SimpleStorage {

    uint256 favoriteNumber;
    string favoriteName;
    bool favoriteBool;

    struct People {
        uint256 favoriteNumber;
        string favoriteName;

    }

    mapping(string => uint256) public nametoNumber;

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns(uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber,_name));
        nametoNumber[_name] = _favoriteNumber;
    }
}
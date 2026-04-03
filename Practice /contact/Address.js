const _id=Symbol('id');
const _roadNo=Symbol('roadNO');
const _city=Symbol('city');
const _region=Symbol('region');
const _country=Symbol('country');
const _postalCode=Symbol('postalCode');


class Address{
    constructor({id,roadNo,city,region,country,postalCode}){
        this[_id]=id;
        this[_roadNo]=roadNo || "";
        this[_city]=city || "";
        this[_region]=region || "";
        this[_country]=country || "";
        this[_postalCode]=postalCode || ""; 
    }

    get id(){
        return this[_id];
    }


    get roadNo(){
        return this[_roadNo];
    }

    set roadNo(roadNo){
        this[_roadNo]=roadNo;
    }

    get city(){
        return this[_city];
    }

    set city(city){
        this[_city]=city;
    }

    get region(){
        return this[_region];
    }

    set region(region){
        this[_region]=region;
    }

    get country(){
        return this[_country];
    }

    set roadNo(country){
        this[_country]=country;
    }

    get postalcode(){
        return this[_postalcode];
    }

    set postalcode(postalcode){
        this[_postalcode]=postalcode;
    }



    toString(){
        return `RoadNo: ${this[_roadNo]},City: ${this[_]} ,Region: ${this[_region]},Country: ${this[_country]},PostalCode: ${this[_postalCode]}`;
    }



}

modeule.exports = Address;
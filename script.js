$(function() {

    var cities = [
        "Mumbai","Visakhapatnam","Coimbatore",
        "Delhi","Bangalore","Pune","Nagpur",
        "Lucknow","Vadodara","Indore","Jalalpur",
        "Bhopal","Kolkata","Kanpur","New Delhi",
        "Faridabad","Rajkot","Ghaziabad","Chennai",
        "Meerut","Agra","Jaipur","Jabalpur","Varanasi",
        "Allahabad","Hyderabad","Noida","Howrah",
        "Thane","Patiala","Chakan","Ahmedabad",
        "Manipala","Mangalore","Panvel","Udupi",
        "Rishikesh","Gurgaon","Mathura","Shahjahanpur",
        "Bagpat","Sriperumbudur","Chandigarh",
        "Ludhiana","Palakkad","Kalyan","Valsad",
        "Bhiwani","Shimla","Dehradun","Patna",
        "Unnao","Tiruvallur","Kanchipuram",
        "Jamshedpur","Gwalior","Karur","Erode",
        "Gorakhpur","Ooty","Haldwani","Bikaner",
        "Puducherry","Nalbari","Bellary","Vellore",
        "Naraina","Mandi","Rupnagar","Jodhpur",
        "Roorkee","Aligarh","Indraprast","Karnal",
        "Tanda","Amritsar","Raipur","Pilani",
        "Bilaspur","Srinagar"
    ]


    function findMatches(wordToMatch){
        return cities.filter(item => item.toLowerCase().includes(wordToMatch.toLowerCase()))
    }
    // for(var i=0; i<findMatches('na').length;i++){
    //     console.log(findMatches("na")[i]);
    // }

    $("input").each(function(){
        console.log(this);
        this.addEventListener('keyup', function(){
            if($(this).hasClass("from")){
                console.log("from");
            }

            // console.log(this);
            console.log($(this).val());
        });
      });



    // $("input").keyup(function(){
    //     alert("The text has been changed.");
    //   });
    // console.log(findMatches("as"));


    // $("#from").after( "<b>Hello</b>" );


   
}); // DOCUMENT READY
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
    filteredCities = [...cities];

    var toValue = $(".to").val();
    var fromValue = $(".from").val();


    function findMatches(wordToMatch){
        return filteredCities.filter(item => item.toLowerCase().includes(wordToMatch.toLowerCase()));
    }

    function appendData(inputvalue,element){
        for(var i=0; i<findMatches(inputvalue).length;i++){
            $(element).append('<p class="search-result">'+ findMatches(inputvalue)[i]+'</p>');
        }
    }
    
    $("input").each(function(){
        this.addEventListener('keyup', function(){
            if(($(this).val().length)>=2){
                if($(this).hasClass("from")){
                    console.log("from block");
                    $(".from-div").empty();
                    appendData($(this).val(),".from-div");
                    var self = this;
                    $(".search-result").click(function(e){
                        $(self).val($(this).text());
                        console.log('filteredCities', filteredCities);
                        filteredCities = filteredCities.filter(e => e !== $(this).text())
                        // console.log(cities);
                        console.log('after filteredCities', filteredCities);

                        $(".from-div").empty();
                        e.stopPropagation();
                    });
                    console.log('$(this).val()', $(this).val().length);
                    if($(this).val().length < 3){
                        console.log('inside length');
                        filteredCities = [...cities];
                        filteredCities = filteredCities.filter(e => e !== $('.to').val());
                    }
                }
                else{
                    console.log("to block");
                    $(".to-div").empty();
                    appendData($(this).val(),".to-div")
                    var self = this;
                    $(".search-result").click(function(e){
                        $(self).val($(this).text());
                        filteredCities = filteredCities.filter(e => e !== $(this).text())
                        // cities = cities.filter(e => e !== $(this).text())
                        // console.log(cities);

                        $(".to-div").empty();
                        e.stopPropagation();
                    });

                    if($(this).val().length < 3){
                        filteredCities = [...cities];
                        filteredCities = filteredCities.filter(e => e !== $('.from').val());
                    }
                }
            }
        });
      });

      $(document).click(function(){
        $(".search-result").hide();
        });

   
}); // DOCUMENT READY



// var data2 =[];
// data2 = cities.filter(function(item){
//      return item !== 'Srinagar'
// })
// console.log("data2");
// console.log(data2);
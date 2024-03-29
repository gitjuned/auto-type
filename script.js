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
    var filteredCities = [...cities];

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
                        filteredCities = filteredCities.filter(e => e !== $(this).text())
                        $(".from-div").empty();
                        e.stopPropagation();
                    });
                    if($(this).val().length < 3){
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

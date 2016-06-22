jQuery.noConflict();
(function($) {
    "use strict";
    kintone.events.on("app.record.index.show", function(recordlist) {

       //stop the script if the user is not viewing the Custom view
        if (recordlist.viewId != 20879) { //change the view ID to your own view ID
            return; 
        }
        
        setTimeout(function(){
            $(".intro").fadeOut();
            kintone.api(kintone.api.url('/k/v1/form', true), 'GET', {
                "app":kintone.app.getId()
                }, function(formdata) {
                        //console.log(formdata);
                        //array numbers may vary depending on the structure of your app. uncomment the above code and check the retrieved array.
                        var date_label = formdata.properties[0].label;
                        var creator_label = formdata.properties[2].label;
                        var company_label = formdata.properties[3].label;
                        var status_label = formdata.properties[1].label;
                        var details_label = formdata.properties[4].label;
                       
                        $( ".textinner" ).append("<p align=\"center\">Customization IV</p>");
                        $( ".textinner" ).append("<p align=\"center\"; style=\"font-family: Impact, Charcoal, sans-serif; font-size:160%;\";>A NEW DAILY REPORT</p>");
                        for (var i = 0; i < recordlist.records.length; i++){
                        $( ".textinner" ).append( "<p>"+ recordlist.records[i].report_date.value + " " + recordlist.records[i].report_creator.value[0].name + "<br />" );
                        $( ".textinner" ).append( company_label + ": "+ recordlist.records[i].report_company.value + "<br />" );                     
                        $( ".textinner" ).append( status_label + ": "+ recordlist.records[i].report_status.value + "<br />" );
                        $( ".textinner" ).append( details_label + ": "+ recordlist.records[i].report_details.value + "<br />" );
                        $( ".textinner" ).append( "------------------------------------ </p>" );  
                    }
                }, function(error) {
                    alert(error);
                }
            );

        
        },3000);
        
        setTimeout(function(){
 //         $(".title")[0].className.animVal += " titleanimation";
          $(".title")[0].className.baseVal += " titleanimation";
          
        },5000);
        
        setTimeout(function(){
          $(".title").fadeOut();
        },15000);
        
        setTimeout(function(){
          $(".textinner").addClass("textanimation");
        },8000);
        
    });
})(jQuery);

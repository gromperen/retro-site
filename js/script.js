/*

! function ($) {
    var OS = {
        init: function() {
            var self = this;
            self.setBodyHeight();
        },
        setBodyHeight: function() {
            $("body").css("height", window.innerHeight), 
            setTimeout(this.setBodyHeight, 100)
        }
    };
    OS.init(),

    $("#readmebut").on("click", (function(e) {
        alert(1);
        e.preventDefault(), e.stopPropagation(), $(".window.readmetxt").addClass("focus").show("slow");
    }));


} (jQuery);
*/


$(document).ready(function(){
    var OS = {
        init: function() {
            var self = this;
            self.setBodyHeight();
        },
        setBodyHeight: function() {
            $("body").css("height", window.innerHeight), 
            setTimeout(this.setBodyHeight, 100)
        }
    };
    OS.init(),

    $("#readmebut").on("click", (function() {
        $(".window.readmetxt").addClass("focus").show("slow");
    })),
    $(".window .close").on("click", (function() {
        $(this).parent().parent().hide();
    }))
    
    ;
  });
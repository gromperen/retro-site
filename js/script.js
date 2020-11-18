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
    OS.init();
} (jQuery);
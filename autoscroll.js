// verticalScroller.js
// Made By - Ankit Jain
// Date - 11/09/2016


// jQuery Function scroller
// add return value to make that users can clear Interval
(function( $ ){
   $.fn.scroller = function(options) {
        var s;//define return value
        options = options || '{"delay" : 2000 ,"amount" : 100 }';
        options = JSON.parse(options);
        this.each(function () {
            this.delay = parseInt(options["delay"]) || 2000;
            this.amount = parseInt(options["amount"]) || 100;
            this.autoScroll = $(this);
            this.iScrollHeight = this.autoScroll.prop("scrollHeight");
            this.iScrollTop = this.autoScroll.prop("scrollTop");
            this.iHeight = this.autoScroll.height();

            var self = this;
            this.timerId = setInterval(function () {
                if(self.iScrollTop+self.iHeight < self.iScrollHeight)
                {
                    self.iScrollTop = self.autoScroll.prop("scrollTop");
                    self.iScrollTop+=self.amount;
                    self.autoScroll.animate(
                        {scrollTop: self.iScrollTop},
                        "slow",
                        "linear");
                }
                else
                {
                    self.iScrollTop-=self.iScrollTop;
                    self.autoScroll.animate(
                        {scrollTop: "0px"},
                        "fast",
                        "swing");
                }
            }, self.delay);
            ret = this.timerId;//set last timerId to return value
        });
        return ret;//return ret;
    };
})( jQuery );

// Vanilla Js Scroller function

function Scroller(options) {
    var element = JSON.parse(options)["element"];
    $(element).scroller(options);
}

// With HTML using data-config

var ele = document.querySelectorAll(".scroller");
var i=0;
var options = "";
var element = "";
for(i=0; i < ele.length ; i+=1) {
    options = ele[i].dataset.config;
    element = "#"+ele[i].id;
    $(element).scroller(options);
}

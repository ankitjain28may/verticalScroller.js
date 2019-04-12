// verticalScroller.js
// Made By - Ankit Jain
// Date - 11/09/2016


// jQuery Function scroller
(function( $ ){
   $.fn.scroller = function(options) {
        options = options || '{"delay" : 2000 ,"amount" : 100, "direction" : "vertical" }';
        options = JSON.parse(options);
        this.each(function () {
            this.delay = parseInt(options["delay"]) || 2000;
            this.amount = parseInt(options["amount"]) || 100;
            this.direction = options["direction"] || "vertical";
            this.autoScroll = $(this);
            this.iScrollSize = this.direction === "vertical"
                ? this.autoScroll.prop("scrollHeight")
                : this.autoScroll.prop("scrollWidth");
            this.iScrollInitial = this.direction === "vertical"
                ? this.autoScroll.prop("scrollTop")
                : this.autoScroll.prop("scrollLeft");
            this.iSize = this.direction === "vertical"
                ? this.autoScroll.height()
                : this.autoScroll.width();

            var self = this;
            this.timerId = setInterval(function () {
                console.log(self.direction);
                var animatePropKey = self.direction === "vertical" ? "scrollTop" : "scrollLeft";
                if(self.iScrollInitial+self.iSize < self.iScrollSize)
                {
                    self.iScrollInitial = self.autoScroll.prop(animatePropKey);
                    self.iScrollInitial+=self.amount;
                    var animateProp = {};
                    animateProp[animatePropKey] = self.iScrollInitial;
                    self.autoScroll.animate(animateProp, "slow", "linear");
                }
                else
                {
                    self.iScrollInitial-=self.iScrollInitial;
                    var animateProp = {};
                    animateProp[animatePropKey] = "0px";
                    self.autoScroll.animate(animateProp, "fast", "swing");
                }
            }, self.delay);
        });
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
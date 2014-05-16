/**
 * Created by rachel on 5/10/14.
 */



// we'll fill this later with real thngs
$(function() {
    Backbone.pubSub = _.extend({}, Backbone.Events);


 //   App.router = new App.Router;

    window.tangelo = new App.Views.AppView({
        el: $('body')
    });




    $(".pomodoro").append("<div id='DateCountdown' data-date='2014-01-01 00:00:00' style='width: 500px;'></div>");


    $("#DateCountdown").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.1,
        "fg_width": 0.013333333333333334,
        "circle_bg_color": "#60686F",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#FFCC66",
                "show": false
            },
            "Hours": {
                "text": "Hours",
                "color": "#99CCFF",
                "show": false
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#F39C12",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#F39C12",
                "show": true
            }
        }
    });

    // Initialize the Backbone router.
     Backbone.history.start();
});
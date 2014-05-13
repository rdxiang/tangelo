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


    // Initialize the Backbone router.
     Backbone.history.start();
});
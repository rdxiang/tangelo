/**
 * Created by rachel on 5/10/14.
 */


// we'll fill this later with real thngs
$(function() {
    Backbone.pubSub = _.extend({}, Backbone.Events);

    // Initialize Backbone views.
    //  err do something

    App.router = new App.Router;

    // Initialize the Backbone router.
    Backbone.history.start();
});
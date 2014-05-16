/**
 * Created by rachel on 5/13/14.
 */


App.Views.AppView = Backbone.View.extend({
    el: $('body'),


    initialize: function () {
       _.bindAll(this, 'render');


      //  this.collection = new App.collections.TaskCollection();
        this.render();
    },

    render: function () {
        var self = this;
        console.log("whooo");

        this.taskList = new App.Views.TaskList({
         //  el: $( ".tasklist")
        });


     //   this.pomodoro = new App.Views.Pomodoro();



    //    this.collection.bind('add', this.pagelist.appendItem);
      //  this.collection.bind('change:selected', this.pagepreview.changePage);

    }

});


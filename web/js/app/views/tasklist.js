/**
 * Created by rachel on 5/13/14.
 */


App.Views.TaskList = Backbone.View.extend({

    el: $('.tasklist'),
    events: {
        'keypress .newTask' : 'updateOnEnter'

    },

    initialize:  function(){

        console.log("who!!o");

        _.bindAll(this, 'render', 'appendItem' , 'updateOnEnter');

        this.collection = new App.Collections.TaskCollection();


        this.collection.bind('add', this.appendItem);
        // trigger events?
        this.render();

    },

    render:  function(){
        for (var item in this.collection.models){
            this.appendItem(item);
        }
        return this;
     },

    updateOnEnter: function() {


        console.log("who!!o");
        if (event.keyCode == 13){
            var inputValue = $('input.newTask').val().trim();
            if (inputValue == "")
            {
                console.log("input value was nothing");
                return;}


            var date = (new Date).getTime();

            var item = new App.Models.TaskModel({
                name: inputValue,
                timeStamp: date

            });

            console.log(item);


            $('input.newTask').val("");
            console.log("added item?");
            this.collection.add(item);

        }

        // add item
    },





    appendItem: function( item ){
        console.log ("appending");

        console.log(item);
        if (!item){
            console.log("nothing!");
            return;
        }

       var taskView = new App.Views.TaskView({
            model: item
        });

        $(this.el).append(taskView.render().el);


    }
});


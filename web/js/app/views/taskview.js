/**
 * Created by rachel on 5/13/14.
 */

App.Views.TaskView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#template-task').html()),
    events: {
        'click span.plus': 'plusPomodoro',
        'click span.minus': 'minusPomodoro'
        // click delete => remove model

    },

    initialize: function(){

        _.bindAll(this, 'render', 'plusPomodoro', 'minusPomodoro');

        this.$el.attr("class", "list-group-item");
        this.model.on('change', this.render, this);
    },

    render: function (){

        console.log("Task vieww!");

        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    plusPomodoro: function(){
        this.model.set({
            totalPom: this.model.get("totalPom") +1
        });
        console.log("added pom");
    },

    minusPomodoro: function(){
        this.model.set({
            totalPom: this.model.get("totalPom") -1
        });


    }


});
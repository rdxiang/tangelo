/**
 * Created by rachel on 5/13/14.
 */

App.Views.TaskView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#template-task').html()),

    initialize: function(){

        _.bindAll(this, 'render');

        this.$el.attr("class", "list-group-item");
    },

    render: function (){

        console.log("Task vieww!");

        $(this.el).html(this.template(this.model.toJSON()));
        return this;


    }


});
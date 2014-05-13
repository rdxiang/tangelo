/**
 * Created by rachel on 5/13/14.
 */


App.Models.TaskModel = Backbone.Model.extend({
    defaults: {
        name: 'Todo',
        totalPom: 1,
        completedPom: 0,
        completed: false
    }



});
import Ember from 'ember';

export default Ember.Controller.extend({
  isDone: false,

  current: '',

  completed: Ember.computed( 'model', 'current', function() {
    var tasks = this.get('model');
    var current = this.get('current');

    let finished = current === 'complete';
    let unfinished = current === 'incomplete';

    if (finished) {
      return tasks.filter((task) => {
        return task.get('isDone') === true;
      });
    }

    if (unfinished) {
      return tasks.filter((task) => {
        return task.get('isDone') === false;
      });
    }

    console.log('tasks');
    return tasks;
  }),

  actions: {
    save(description, deadline) {
      this.get('store').createRecord('task', {
        description,
        deadline
      }).save();
    },
    showAll() {
      this.set('current', '');
    },
    showCompleted() {
      this.set('current', 'complete');
      console.log('current');
    },
    showIncomplete() {
      this.set('current', 'incomplete');
      console.log('current');
    },
    editTask() {

    },
    delete(task) {
      task.deleteRecord();
      task.save();
    }
  }
});

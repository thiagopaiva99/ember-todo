import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task')
  },

  actions: {
    delete(task) {
      task.deleteRecord()
      task.save()
    },
    toggleTask(task) {
      let isDone = task.get('isDone')
      task.set('isDone', !isDone)
      task.save()
    }
  }
})

import Ember from 'ember'

export default Ember.Controller.extend({
  isDone: false,
  current: '',
  completed: Ember.computed( 'model', 'current', function() {
    let tasks      = this.get('model')
    let current    = this.get('current')

    let finished   = current === 'complete'
    let unfinished = current === 'incomplete'

    if ( finished )   return tasks.filter((task) => task.get('isDone') === true)
    if ( unfinished ) return tasks.filter((task) => task.get('isDone') === false)

    return tasks
  }),
  actions: {
    showAll() { this.set('current', '') },
    showCompleted() { this.set('current', 'complete') },
    showIncomplete() { this.set('current', 'incomplete') },
    editTask(task) { this.transitionToRoute('edit', task.get('id')) }
  }
})

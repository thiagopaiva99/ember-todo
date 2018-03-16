import Ember from 'ember'

export default Ember.Route.extend({
    actions: {
        save(description, deadline) {
          this.get('store').createRecord('task', {
            description,
            deadline
          }).save().then(() => this.transitionTo('application'))
        }
    }
})

export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('edit'),
    this.use('crossFade', {duration: 2000})
  )
  
  this.transition(
    this.fromRoute('index'),
    this.toRoute('new'),
    this.use('crossFade', {duration: 1000})
  )
}

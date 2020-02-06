let input = document.getElementById('input-task')
let add_task = document.getElementById('add-task')
let all = document.getElementsByTagName('button')[4]
let done = document.getElementsByTagName('button')[2]
let deleted = document.getElementsByTagName('button')[3]
let todo = document.getElementsByTagName('button')[1]
let body = document.getElementsByTagName('body')[0]
let list_all = document.getElementById('list-all')
console.log(document.getElementsByTagName('button'))
deleted.style.display ="none"



add_task.addEventListener('click', (event) => {

  event.preventDefault()
  var li = document.createElement('li')
  let span = document.createElement('span')
  let li_content = document.createTextNode(input.value)
  span.appendChild(li_content)
  span.classList.add('col-9')
  li.appendChild(span)
  list_all.appendChild(li)
  li.classList.add( 'li', 'bg-light', 'p-3', 'row')

  
  //drag
  li.setAttribute("draggable", "true")
  
  input.value = ""

//VALIDER
let valider = document.createElement('button')
valider.style.border = "none"
valider.classList.add('bg-light', 'col-1')
let fafa1 = document.createElement('i')
fafa1.classList.add("fas","fa-check-circle")
fafa1.style.color = "blue"
valider.appendChild(fafa1)
li.appendChild(valider)


valider.addEventListener('click', () => {
  li.style.backgroundColor = "green"
  li.classList = 'done li bg-ligh p-3 row'
  valider.classList = "bg-success col-1"
  edit.classList = 'bg-success col-1'
  delete1.classList = "bg-success col-1"  

})
valider.addEventListener('dblclick', () => {
  li.classList.add('bg-light')
  li.classList.remove('done')
  valider.classList.remove("bg-success")
  edit.classList.remove('bg-success')
  delete1.classList.remove ("bg-success")
})

//remove event listenner 

//EDIT
let edit = document.createElement('button')
edit.style.border = "none"
edit.classList.add('bg-light', 'col-1')
let fafa2 = document.createElement('i')
fafa2.style.color = "yellow"
fafa2.classList.add("fas", "fa-edit")
edit.appendChild(fafa2)
li.appendChild(edit)


edit.addEventListener('click', () => {
  valider.style.display = "none"
  delete1.style.display = "none"
  fafa2.classList = "fas fa-save"
  span.contentEditable = "true"
  fafa2.classList = "fas fa-save"
})
edit.addEventListener('dblclick', () => {
  valider.style.display = ""
  delete1.style.display = ""
  li.style.backgroundColor = "white"
  fafa2.classList = "fas fa-edit"
  
  

})


//DELETE
let delete1 = document.createElement('button')
delete1.style.border = "none"
delete1.classList.add('bg-light', 'col-1')
let fafa3 = document.createElement('i')
fafa3.classList.add("fas","fa-trash-alt")
fafa3.style.color = "red"
delete1.appendChild(fafa3)
li.appendChild(delete1)

delete1.addEventListener('click', () => {
  delete1.parentNode.parentNode.removeChild(li)
})


})


let groupli = document.getElementsByClassName('li')
let class1 = document.getElementsByClassName('done')


//BUTTONS 


//all
all.addEventListener('click', () => {
  edit.classList.add('bg-light', 'col-1')
  valider.classList.add('bg-light', 'col-1')
  delete1.classList.add('bg-light', 'col-1')
  for (var i=0;i<groupli.length;i+=1){
    groupli[i].style.display = 'block';
    
}
})


//done
done.addEventListener('click', () => {
  class1 = document.getElementsByClassName('done')
  edit.classList.add('bg-light', 'col-1')
  valider.classList.add('bg-light', 'col-1')
  delete1.classList.add('bg-light', 'col-1')
  for (var i=0;i<groupli.length;i+=1){
  groupli[i].style.display = 'none';
  
}

  for (var i=0;i<class1.length;i+=1){
  class1[i].style.display = 'block';
  
  }
})


//todo
todo.addEventListener('click', () => {
  class1 = document.getElementsByClassName('done')
  groupli = document.getElementsByClassName('li')
  edit.classList.add('bg-light', 'col-1')
  valider.classList.add('bg-light', 'col-1')
  delete1.classList.add('bg-light', 'col-1')

  for (var i=0;i<groupli.length;i+=1){
    groupli[i].style.display = 'block';
    
 }


  for (var i=0;i<class1.length;i+=1){
    class1[i].style.display = 'none';
    
}
 })

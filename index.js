const submitBtn = document.querySelector(".submit_btn");
const input = document.querySelector(".input");
const task_section = document.querySelector(".task-section")

submitBtn.addEventListener("click" , (e) => {
  e.preventDefault()
  const  task  = input.value
  console.log(task)
  
if(!task){
  alert("Input field empty")
  return;
}


  const  task_content = document.createElement("div");
   task_content.classList.add("task-content")

   const  task_content_input = document.createElement("input");
   task_content_input.classList.add("task-section-para")
   task_content_input.type = "text"
   task_content_input.setAttribute("readonly","readonly")
   task_content_input.value = task

   const  task_content_actions = document.createElement("div")
    task_content_actions.classList.add("task-content-actions")

   const  task_content_edit = document.createElement("div")
   task_content_edit.innerHTML = "Edit"
   task_content_edit.classList.add("actionBtn", "edit") 

   const  task_content_delete = document.createElement("div")
   task_content_delete.innerHTML = "Delete"
   task_content_delete.classList.add("actionBtn", "delete")


   task_content.appendChild(task_content_input)
   task_content.appendChild(task_content_actions)
   task_content_actions.appendChild(task_content_edit)
   task_content_actions.appendChild(task_content_delete)


   task_section.appendChild(task_content)

   input.value = ""


   
   task_content_edit.addEventListener("click" , () => {
      if(task_content_edit.innerText.toLowerCase() == "edit") {
            task_content_input.removeAttribute("readonly")
            task_content_edit.innerText = "Save"
      }else {
        task_content_input.setAttribute("readonly" , "readonly")
        task_content_edit.innerText = "Edit"
      }
   })   

     task_content_delete.addEventListener("click", ()=> {
      task_section.removeChild(task_content)

     
    
    
    
    })





   
   })
   


  
  
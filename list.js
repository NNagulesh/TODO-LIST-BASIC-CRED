//FINAL TASK IQUBE
//TODO LIST BASIC CRED
//MADE BY NAGULESH

const list = []
let filter1 = "ALL";
const dat=document.querySelector("#dateInput")
const input=document.querySelector("#new-task-input");
const list_el=document.querySelector("#tasks");
const box=document.querySelector("#select1")
const form=document.querySelector("#new-task-form");
window.addEventListener('load',()=>{
   
    form.addEventListener('submit',(e)=>{      
        e.preventDefault();
        if(filter1 === "ALL"){
            display()
        }
        input.value = ""
        dat.value = ""
        
    });
});

function display(){
        list_el.replaceChildren()
        list.push({todo:input.value,
                   date:dat.value
                 })
        if (filter1==="TODAY") {
            let myList = filter1 === "TODAY" ?  list.filter((el) => new Date(el.date).toLocaleDateString() === new Date().toLocaleDateString()) : list

            myList.forEach((el,i) =>{

                const task_el=document.createElement("div")
                task_el.classList.add("task")
                 
                const task_content_el=document.createElement("div")
                task_content_el.classList.add("content")
                        
                list_el.appendChild(task_el);
                task_el.appendChild(task_content_el);
        
                const task_input_el = document.createElement('input');
                task_input_el.classList.add('text');
                task_input_el.type = 'text';
                task_input_el.value = el.todo;
                task_input_el.setAttribute('readonly', 'readonly');
        
                task_content_el.appendChild(task_input_el);
        
                const task_actions_el = document.createElement('div');
                task_actions_el.classList.add('actions');
    
                const date_el=document.createElement('div');
                date_el.innerText=el.date;
                date_el.type='text'
                date_el.id=''
                task_content_el.appendChild(date_el);
                
                const task_edit_el = document.createElement('button');
                task_edit_el.classList.add('edit');
                task_edit_el.innerText = 'Completed';
        
                const task_delete_el = document.createElement('button');
                task_delete_el.classList.add('delete');
                task_delete_el.innerText = 'Delete';
        
                
                task_actions_el.appendChild(task_edit_el);
                task_actions_el.appendChild(task_delete_el);
        
                task_el.appendChild(task_actions_el);
        
                list_el.appendChild(task_el);
                localStorage.setItem('todos',JSON.stringify(task_el));
        
                input.value = '';
                
                task_edit_el.addEventListener('click',(e)=>{
                    task_input_el.style.textDecoration='line-through'        
                })
        
                task_delete_el.addEventListener('click', (e) => {
                    list_el.removeChild(task_el);
                    list.splice(i,1)
                });
            })
            
        }else{
      

        list.filter((el) => el.todo !== "").forEach((el,i) => {

            const task_el=document.createElement("div")
            task_el.classList.add("task")
             
            const task_content_el=document.createElement("div")
            task_content_el.classList.add("content")
                    
            list_el.appendChild(task_el);
            task_el.appendChild(task_content_el);
    
            const task_input_el = document.createElement('input');
            task_input_el.classList.add('text');
            task_input_el.type = 'text';
            task_input_el.value = el.todo;
            task_input_el.setAttribute('readonly', 'readonly');
    
            task_content_el.appendChild(task_input_el);
    
            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const date_el=document.createElement('div');
            date_el.innerText=el.date;
            date_el.type='text'
            date_el.id=''
            task_content_el.appendChild(date_el);
            
            const task_edit_el = document.createElement('button');
            task_edit_el.classList.add('edit');
            task_edit_el.innerText = 'Completed';
    
            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerText = 'Delete';
    
            
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
    
            task_el.appendChild(task_actions_el);
    
            list_el.appendChild(task_el);
            localStorage.setItem('todos',JSON.stringify(task_el));
    
            input.value = '';
            
            task_edit_el.addEventListener('click',(e)=>{
                task_input_el.style.textDecoration='line-through'        
            })
    
            task_delete_el.addEventListener('click', (e) => {
                list_el.removeChild(task_el);
                list.splice(i,1)
            });

            
        })
        dat.value = ""
    }
}
function filter(obj){
 filter1 = obj.value 

 display()

}
// task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
                
		// 		task_input_el.removeAttribute("readonly");
		// 		task_input_el.focus();
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		task_input_el.setAttribute("readonly", "readonly");
		// 	}
		// });
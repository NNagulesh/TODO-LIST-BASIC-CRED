//FINAL TASK IQUBE
//TODO LIST BASIC CRED
//MADE BY NAGULESH

let list = []
let filter1 = "ALL";
const dat = document.querySelector("#dateInput")
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const box = document.querySelector("#select1")
const form = document.querySelector("#new-task-form");

document.addEventListener("DOMContentLoaded", (e) => {

    let temp = JSON.parse(localStorage.getItem("todos"))
    temp?.forEach((d) => {
        let dom = new DOMParser().parseFromString(d,"text/html").body
        console.log(dom.firstChild.firstChild.firstChild);   
        list.push({todo:dom.firstChild.firstChild.firstChild.innerHTML,date:dom.firstChild.firstChild.lastChild.innerText,shouldStrike:dom.firstChild.firstChild.firstChild.classList.contains("strike")})
    })

    console.log(list);
    list.forEach((el,i) => {
        let task = document.createElement("div")
        task.classList.add("task")

        let task_content_el = document.createElement("div")
        task_content_el.classList.add("content")
      

        list_el.appendChild(task)
        task.appendChild(task_content_el)

        const task_input_el = document.createElement('div');
        const input_el = document.createElement("input")
        if(el.shouldStrike){
            task_input_el.classList.add("strike")
        }
        input_el.value = el.todo
        task_input_el.appendChild(input_el)
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = el.todo;
        task_input_el.innerHTML = el.todo;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

       

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');


        const date_el = document.createElement('div');
        date_el.innerText = el.date;
        date_el.type = 'text'
        date_el.id = ''
        task_content_el.appendChild(date_el);


        const task_complete_el = document.createElement('button');
        task_complete_el.classList.add('complete');
        task_complete_el.innerText = el.shouldStrike ? "Completed" : "Complete";

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

       
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_complete_el);


        task.appendChild(task_actions_el);

        list_el.appendChild(task);


        task_complete_el.addEventListener('click', (e) => {
            task_complete_el.classList.add("strike")

            el.shouldStrike = true
            task_complete_el.innerText = "Completed"
            saveToLocalStorage()
        })

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task);
            list.splice(i, 1)
            saveToLocalStorage()
        });

    })
  

})

    form.addEventListener('submit', (e) => {
        console.log("form");
        e.preventDefault();
       
        list.push({
            todo: input.value,
            date: dat.value !== "" ? new Date(dat.value).toLocaleDateString() : new Date().toLocaleDateString()
        })
        display()
        saveToLocalStorage()

   
        input.value = ""
        dat.value = ""

    });

function display() {
    console.log(list)   

    list_el.replaceChildren()
    console.log(filter1 === "TODAY");

    if (filter1 === "TODAY") {

        list.filter((el) => el.date === new Date().toLocaleDateString()).forEach((el, i) => {

            const task_el = document.createElement("div")
            task_el.classList.add("task")

            const task_content_el = document.createElement("div")
            task_content_el.classList.add("content")

            list_el.appendChild(task_el);
            task_el.appendChild(task_content_el);

           

            const task_input_el = document.createElement('div');
            const input_el = document.createElement("input")
            input_el.value = el.todo
            task_input_el.appendChild(input_el)
            task_input_el.classList.add('text');
            task_input_el.type = 'text';
            task_input_el.value = el.todo;
            task_input_el.innerHTML = el.todo;
            task_input_el.setAttribute('readonly', 'readonly');

            if(el.shouldStrike){
                task_input_el.classList.add("strike")
            }
            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const date_el = document.createElement('div');
            date_el.innerText = el.date;
            date_el.type = 'text'
            date_el.id = ''
            task_content_el.appendChild(date_el);

          
            const task_complete_el = document.createElement('button');
            task_complete_el.classList.add('complete');
            task_complete_el.innerText = el.shouldStrike ? "Completed" : "complete";

            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerText = 'Delete';



           
            task_actions_el.appendChild(task_delete_el);
            task_actions_el.appendChild(task_complete_el);


            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            input.value = '';

            task_complete_el.addEventListener('click', (e) => {
                el.shouldStrike = true
                task_input_el.classList.add("strike")

                task_complete_el.innerText = "Completed"
                saveToLocalStorage()
            })

            task_delete_el.addEventListener('click', (e) => {
                list_el.removeChild(task_el);
                list.splice(i, 1)
                saveToLocalStorage()
            });
        })
        console.log(list);

    } else {
        console.log("Came here");

        console.log(list.filter((el) => el.todo !== ""));



        list.filter((el) => el.todo !== "").forEach((el, i) => {

            console.log(el);
                const task_el = document.createElement("div")
                task_el.classList.add("task")

                const task_content_el = document.createElement("div")
                task_content_el.classList.add("content")

                list_el.appendChild(task_el);
                task_el.appendChild(task_content_el);

                const task_input_el = document.createElement('div');
                const input_el = document.createElement("input")
                input_el.value = el.todo
                task_input_el.appendChild(input_el)
                task_input_el.classList.add('text');
                task_input_el.type = 'text';
                task_input_el.value = el.todo;
                task_input_el.innerHTML = el.todo;
                task_input_el.setAttribute('readonly', 'readonly');
                if(el.shouldStrike){
                    task_input_el.classList.add("strike")
                }

                task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const date_el = document.createElement('div');
            date_el.innerText = el.date;
            date_el.type = 'text'
            date_el.id = ''
            task_content_el.appendChild(date_el);

            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerText = 'Delete';

            const task_complete_el = document.createElement('button');
            task_complete_el.classList.add('complete');
            task_complete_el.innerText = el.shouldStrike ? "Completed" : "complete";


           
            task_actions_el.appendChild(task_delete_el);
            task_actions_el.appendChild(task_complete_el);

            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);
            localStorage.setItem('todos', JSON.stringify(task_el));

            input.value = '';

            task_complete_el.addEventListener('click', (e) => {
                el.shouldStrike = true
                task_input_el.classList.add("strike")

               
                task_complete_el.innerText = "Completed"
                saveToLocalStorage()

            })

            task_delete_el.addEventListener('click', (e) => {
                console.log(list);
                console.log("before" + i);
                list_el.removeChild(task_el);

                let newElements = document.querySelectorAll('.task')
                list.length = 0
                newElements.forEach((el) => {
                    list.push({ todo: el.firstChild.firstChild.value, date: el.firstChild.lastChild.innerText })
                })

                console.log(list);
                saveToLocalStorage()
            });


        })
        dat.value = ""
    }
}

function saveToLocalStorage(){
    console.log("store");
    let todos = Array.from(document.querySelectorAll(".task"))
    localStorage.setItem("todos",JSON.stringify(todos.map(el => el.outerHTML)))
}

function filter(obj) {
    filter1 = obj.value

    display()

}

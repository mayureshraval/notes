const taskContainer = document.querySelector('.taskContainer');
const inputTask = document.querySelector('#inputtask');
const addBtn = document.getElementById('addBtn');

const doneAll = document.getElementById('doneAll');
const dltAll = document.getElementById('dltAll');

addBtn.addEventListener('click',()=>{

    if(inputTask.value==''){
        alert('Please enter a task');
    }
    else{
            const taskWrapper = document.createElement('div');
            taskWrapper.setAttribute('class','taskWrapper');

                const p = document.createElement('p');
                p.setAttribute('id','task');
                p.classList.add('common');
                p.innerHTML = inputTask.value;
                inputTask.value = '';
                taskWrapper.append(p);

                const doneBtn = document.createElement('button');
                doneBtn.setAttribute('id','Done');
                doneBtn.classList.add('common');
                doneBtn.innerHTML = 'Done';
                taskWrapper.append(doneBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('id','Delete');
                deleteBtn.classList.add('common');
                deleteBtn.innerHTML = 'Delete';
                taskWrapper.append(deleteBtn);

        taskContainer.append(taskWrapper);

        doneBtn.addEventListener('click',()=>{

            if(p.style.textDecoration=='line-through'){
                p.style.textDecoration = 'none';
                doneBtn.innerHTML = 'Done';
                }
                else{
                    p.style.textDecoration = 'line-through';
                    doneBtn.innerHTML = 'Undo';
                }
           
        })
        
        deleteBtn.addEventListener('click',()=>{
            taskWrapper.remove();
        })
    }
})

inputTask.addEventListener('keydown',()=>{

    if(event.code=='Enter'){
        if(inputTask.value==''){
        alert('Please enter a task');
        }
        else{
        const taskWrapper = document.createElement('div');
        taskWrapper.setAttribute('class','taskWrapper');

        const p = document.createElement('p');
        p.setAttribute('id','task');
        p.classList.add('common');
        p.innerHTML = inputTask.value;
        inputTask.value = '';
        taskWrapper.append(p);

        const doneBtn = document.createElement('button');
        doneBtn.setAttribute('id','Done');
        doneBtn.classList.add('common');
        doneBtn.innerHTML = 'Done';
        taskWrapper.append(doneBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id','Delete');
        deleteBtn.classList.add('common');
        deleteBtn.innerHTML = 'Delete';
        taskWrapper.append(deleteBtn);

            taskContainer.append(taskWrapper);

            doneBtn.addEventListener('click',()=>{

                if(p.style.textDecoration=='line-through'){
                    p.style.textDecoration = 'none';
                    doneBtn.innerHTML = 'Done';
                    }
                    else{
                        p.style.textDecoration = 'line-through';
                        doneBtn.innerHTML = 'Undo';
                    }
            
            })
            
            deleteBtn.addEventListener('click',()=>{
                taskWrapper.remove();
            })
        }
    }
    
    })

    

doneAll.addEventListener('click',()=>{

        if(doneAll.innerHTML=='All Done'){
            for (let i = 0; i < taskContainer.children.length; i++) {
                taskContainer.children[i].firstElementChild.style.textDecoration='line-through';
                taskContainer.children[i].children[1].innerHTML='Undo';
            }
            doneAll.innerHTML='Undo All';
        }
        else{
            for (let i = 0; i < taskContainer.children.length; i++) {
                taskContainer.children[i].firstElementChild.style.textDecoration='none';
                taskContainer.children[i].children[1].innerHTML='Done';
            }
            doneAll.innerHTML='All Done';
        }
        
    })

         

dltAll.addEventListener('click',()=>{
    while (taskContainer.children.length>0) {
     taskContainer.children[0].remove();
    }
})


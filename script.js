
document.getElementById("todListLink").addEventListener("click", function (event) {
    event.preventDefault();
  
   
    document.getElementById("home").style.display = "none";
  

    document.getElementById("todoSection").style.display = "block";
  });
  

  
document.getElementById("toListLink").addEventListener("click", function (event) {
    event.preventDefault(); 
  

    document.getElementById("home").style.display = "none";
  

    document.getElementById("todoSection").style.display = "block";
  });
  document.getElementById("homeLink").addEventListener("click", function (event) {
    event.preventDefault(); 
  

    document.getElementById("todoSection").style.display = "none";
  
    document.getElementById("home").style.display = "block";
  });
  


let count=0;

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data =>{
 
    const ul = document.getElementById('todo-list');
    data.forEach(element => {
    const li= document.createElement('li');
    li.textContent=element.title;
 
// try

const checkboxContainer=document.createElement('div');
checkboxContainer.className= 'checkbox-container';


    const checkbox =document.createElement('input');
    checkbox.type='checkbox';
 
    const label=document.createElement("span");
    label.textContent="completed";
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    li.appendChild(checkboxContainer);
    // li.append(label);
    ul.appendChild(li);


    checkbox.addEventListener('change', () =>{
        if(checkbox.checked) {
            count++;
       


        } else{
            count--;
        }
        checkCount();
 

    });

    
  });

})
.catch(error => console.error('Error fetching todos:', error));

function checkCount(){
 return new Promise((resolve,reject)=> {

    if (count >= 5) {
        resolve();
    }
    
 }) .then(()=> {
alert("5 Tasks have been Successfully completed");

 });



}


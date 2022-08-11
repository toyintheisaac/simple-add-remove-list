const myList = document.getElementById("myList");
const listBinding = new ListBinding(myList);


function addElement(){
    const newListAdd = document.getElementById('newListAdd').value;
    listBinding.add(newListAdd);
    document.getElementById('newListAdd').value='';
}
function removeElement(){
    const newListAdd = document.getElementById('newListAdd').value;
    listBinding.remove(newListAdd);
    document.getElementById('newListAdd').value='';
}
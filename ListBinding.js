class ListBinding{
    constructor(list){
        this.listSelector = list;
        this.myList = [];
    }
    static createElementList (listText){
        const li = document.createElement('li');
        li.textContent =listText;
        return li;
    }
    static checkIndex (listArray, valueToFind){
        let allList = listArray;
        for (let i = 0; i < allList.length; i++) {
            if(allList[i]==valueToFind){
                return i ;
                break;
            }
        } 
    }
    add(list){
        if(list!=''){
            this.myList.push(list.trim()); 
            this.update();
        }else{
            document.getElementById('errorMsg').style.color='green'; 
            document.getElementById('errorMsg').innerHTML='Error Adding Empty String';  
        }
    }
    remove(list){
        if(list!=''){
        const delIndex = list.trim();
        //const delIndex= parseInt(list);
        let allList = ListBinding.checkIndex(this.myList, delIndex);
        this.myList.splice(allList, 1); 
            this.update();
        }else{
            document.getElementById('errorMsg').style.color='red'; 
            document.getElementById('errorMsg').innerHTML='Error Deleting Empty String';  
        }
    }

     update(){
         while(this.listSelector.firstChild){
            this.listSelector.removeChild(this.listSelector.firstChild);
         }
        for(let text of this.myList){
            this.listSelector.appendChild(ListBinding.createElementList(text));
        }
        
     }

}
var inputText= document.getElementById('inputText'); //html에서 inputText ID가진 element

inputText.focus(); // 웹페이지 열면 input칸에 커서 올라가 있게
inputText.onkeyup=function(event){ //input칸에서 enter 키누르면 (onkeyup) 아래의 일이 이뤄지게
    if(event.which === 13){ //enter key: 13번임
        var itemText= inputText.value; // input칸 안에다가 적은 값

        //trim 함수 쓰면 여기서 스페이스만 입력하는 경우 방지 가능
        //아무것도 안쓰거나 스페이스만 썼으면 아무런 일도 안 일어나게
        if(!itemText || itemText.trim()==="") return false;
        
        addNewItem(document.getElementById('todolist'), itemText);

        //입력된 다음에 input칸에 다시 포커스를 잡아주고 그 영역을 선택해주자.
        inputText.focus();
        inputText.select();
    }
};

var donelist=document.getElementById('donelist');

function moveItem(){
    //this===listItem    
    var listItemID=this.id;
    var listItem= document.getElementById(listItemID);
    var parentID=listItem.parentElement;
    console.log(parentID)
    if(parentID==donelist){
        todolist.appendChild(listItem);
    }
    else{
        donelist.appendChild(listItem);
    }
}

//팝업창 띄워서 값 받아서 수정하는 방식 
function renameItem(){
    // this === pencilIcon
    var newText= prompt("what should this item be renamed to?");
    if(!newText || newText.trim()==="") return false;  //blank 방지

    var spanID=this.id.replace('pencilIcon_','');
    var span=document.getElementById('item_'+spanID);
    span.innerText= newText;
}

function mouseover(){
    //this===li
    var IconID=this.id.replace('li_','');
    var pencilIcon=document.getElementById('pencilIcon_'+IconID);
    var deleteIcon=document.getElementById('deleteIcon_'+IconID);
    pencilIcon.style.visibility='visible';
    deleteIcon.style.visibility='visible';
}

function mouseout(){
    //this===li
    var IconID=this.id.replace('li_','');
    var pencilIcon=document.getElementById('pencilIcon_'+IconID);
    var deleteIcon=document.getElementById('deleteIcon_'+IconID);
    pencilIcon.style.visibility='hidden';
    deleteIcon.style.visibility='hidden';
}

/*
1. creates 'list item'
2. appends it to the 'list' parameter.
*/
function addNewItem(list,itemText){ 
    var date= new Date();  
    var id=""+ date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id='li_'+id;
    listItem.ondblclick= moveItem;

    var span= document.createElement('span');
    span.id='item_'+id;
    span.innerText=itemText;

    var pencilIcon=document.createElement('i');
    pencilIcon.className='far fa-edit';
    pencilIcon.id='pencilIcon_'+id;
    pencilIcon.onclick=renameItem;
    
    var deleteIcon=document.createElement('i');
    deleteIcon.className='far fa-trash-alt';
    deleteIcon.id='deleteIcon_'+id;
    deleteIcon.onclick=removeItem;

    listItem.appendChild(pencilIcon);
    listItem.appendChild(span);
    listItem.appendChild(deleteIcon);

    //listItem에는 이미 ondblclick이라는 event가 binding되어 있다
    //따라서 addEventListener로 event를 추가해줘야 한다
    listItem.addEventListener('mouseover', mouseover); //mouseover: 마우를 올리면
    listItem.addEventListener('mouseout',mouseout);//mouseout: 마우스를 떼면
    list.appendChild(listItem);
}

function removeItem(donelist){
    //this==deleteIcon
    var listItemId=this.id.replace('deleteIcon_','');
    document.getElementById('li_'+listItemId).style.display="none";
}

let siteName = document.getElementById("name");
let url = document.getElementById("url");

let bookmarks = JSON.parse(localStorage.getItem("BookMark")) || [];

display();


function addBookmark(){
    let newBookmark = {
        Name: siteName.value , 
        Url : url.value
    };
    bookmarks.push(newBookmark);
    localStorage.setItem("BookMark" , JSON.stringify(bookmarks));
    //clearData();
    display();
}

function clearData(){
    siteName.value='';
    url.value='';
}

function display(){
    let table = '';
    for (let i =0 ; i<bookmarks.length;i++){
        table += `<tr>
                        <td>${i+1}</td>
                        <td>${bookmarks[i].Name}</td>
                        <td><a target="_blank" href="${bookmarks[i].Url}" class="btn btn-success"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
                        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
                    </tr>`
    }
    document.getElementById("tableBody").innerHTML = table;
}

function deleteSite(index){
    bookmarks.splice(index,1);
    localStorage.BookMark = JSON.stringify(bookmarks);
    display();
    
}


 function getID(id){
    
    document.getElementById('deletepost').value = id

}

function edit(id) {
    var title = document.getElementById('title'+id).innerText
    var desc = document.getElementById('desc'+id).innerText
    document.getElementById('_id').value = id
    document.getElementById('edittitle').value = title
    document.getElementById('editdesc').value = desc


}

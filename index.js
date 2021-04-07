/*function getExistingNotes() {
    let notes = localStorage.getItem('notes');
    if(!notes){
        return null
    }
    return JSON.parse(notes)
}

getNoteId() {
    let noteObject = getExistingNotes();
    if(!noteObject){
        return 1;
    }


}


function getExistingNotes(){
    for (i=0;i<localStorage.length;i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key);
        // right here, I need to figure out how to output the values
        // on the page
        console.log(value) 
        newNote = document.createElement('li');
        newNote.innerHTML = value;
        document.getElementById("notes-list").appendChild(newNote);
        //document.getElementById("list-item").innerHTML = "Changing things!"
    }

}
*/
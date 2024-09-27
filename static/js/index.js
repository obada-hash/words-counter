
function getWords(){
    
    const paragraph = document.getElementById('paragraph').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/count', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onload= function() {
         if(this.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById('wordCount').textContent = `Word count: ${response.word_count} | Character count: ${response.char_count}`;
            console.log('succeeded');
         }
    }

    xhr.send(JSON.stringify({text:paragraph}));
    
}

function clearPar() {
    document.getElementById('paragraph').value = '';
    document.getElementById('wordCount').textContent = 'Word count: 0 | Character Count: 0';
    console.log('paragraph cleared');

}

//getWords()
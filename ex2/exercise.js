fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    var div = document.createElement('div');
    var arrayData = Object.values(data);
    var arrayKey = Object.keys(data);

    for(var i = 0; i < arrayData.length; i++){
        var txteNode = document.createTextNode(arrayKey[i] + ': ' + arrayData[i] + ',  ');
        var pTag = document.createElement('p');
        pTag.appendChild(txteNode)
        div.appendChild(pTag);

        if(arrayKey[i] === 'title'){
            pTag.style.backgroundColor = 'green';
            pTag.style.color = 'white';
            pTag.style.fontWeight = 'bold';
            pTag.style.fontSize = '1.3em';
        }
    }

    document.body.appendChild(div);
  });





function newImage(url, left, bottom){
    let newObject = document.createElement('img')
    newObject.src = url
    newObject.style.position = 'fixed'
    newObject.style.left = left + 'px'
    newObject.style.bottom = bottom + 'px'
    document.body.append(newObject)

    newObject.addEventListener('dblclick', function(){
        newObject.remove()
    })
    
    
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)



    let newItem = newImage
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)




// Use the newItem function to add the following items to the game:

// assets/shield.png (165px from the left, 185px from the bottom)
// assets/staff.png (600px from the left, 100px from the bottom)
// It should look like this when you're finished:

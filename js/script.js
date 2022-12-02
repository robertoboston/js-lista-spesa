const list = ['sale','pasta','acqua','pomodoro','mozzarella']

const listContainer = document.querySelector('.list')

let i= 0
while(i < list.length){
    let item = list[i]
    
    let listItem= document.createElement('li')

    listItem.innerText= item

    listContainer.append(listItem)

    i++
}


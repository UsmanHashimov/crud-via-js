let items = [];
let nextId = 1;

function createItem() {
  const input = document.querySelector('#create input[type="text"]');
  if (input.value.trim() !== '') {
    const newItem = {
      id: nextId++,
      description: input.value.trim()
    };
    items.push(newItem);
    input.value = '';
    renderItems();
  }
}

function updateItem() {
    const idInput = document.getElementById('updateId');
    const descriptionInput = document.getElementById('updateDescription');
    const id = parseInt(idInput.value, 10);
    const itemIndex = items.findIndex(item => item.id === id);
  
    if (itemIndex !== -1 && descriptionInput.value.trim() !== '') {
      items[itemIndex].description = descriptionInput.value.trim();
      renderItems();
    }
    idInput.value = '';
    descriptionInput.value = '';
  }
  

function deleteItem() {
  const idInput = document.querySelector('#delete input[type="text"]');
  const id = parseInt(idInput.value, 10);
  items = items.filter(item => item.id !== id);
  idInput.value = '';
  renderItems();
}

function renderItems() {
  const list = document.querySelector('#readall ul');
  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.id}: ${item.description}`;
    list.appendChild(li);
  });
}

document.querySelector('#create button').addEventListener('click', createItem);
document.querySelector('#update button').addEventListener('click', updateItem);
document.querySelector('#delete button').addEventListener('click', deleteItem);

renderItems();

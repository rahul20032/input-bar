document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');
    const inputField = document.getElementById('inputField');
  
    addItemButton.addEventListener('click', function() {
      addItem();
    });
  
    function addItem() {
      const value = inputField.value.trim();
  
      if (value !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
  
        const itemText = document.createElement('input');
        itemText.value = value;
        itemText.disabled = true;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
          itemList.removeChild(newItem);
        };
  
        newItem.appendChild(itemText);
        newItem.appendChild(deleteButton);
        itemList.appendChild(newItem);
  
        inputField.value = '';
      }
    }
  });
  
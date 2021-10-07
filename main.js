// Elements
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

// Events
form.addEventListener('submit', addItem); // Form Submit Event
itemList.addEventListener('click', removeItem); // Delete Event
filter.addEventListener('keyup', filterItems); // Filter Event

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get Input Value
    const newItem = document.querySelector('#item').value;

    // Create New li Element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // Create Delete Button Element
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);

    // Add Item to List
    itemList.appendChild(li);

    // Clear Text Input
    document.querySelector('#item').value = '';
}

// Remove Item

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const item = e.target.previousSibling.textContent;
        if (confirm(`Are You sure to delete '${item}' ?`)) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items

function filterItems(e) {
    // Convert text to lowercase
    const text = e.target.value.toLowerCase();

    // Get List
    const items = itemList.getElementsByTagName('li');

    // Convert HTML Collections to Array
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent;
        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

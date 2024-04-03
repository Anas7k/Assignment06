// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const table = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
const countOutput = document.getElementById('empCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = row.insertCell();
    const cellName = row.insertCell();
    const cellExtension = row.insertCell();
    const cellEmail = row.insertCell();
    const cellDepartment = row.insertCell();
    const cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this employee?')) {
            const row = deleteButton.closest('tr'); 
            table.deleteRow(row.rowIndex);
            employeeCount--;
            countOutput.textContent = employeeCount;
        }
    });
    cellDelete.appendChild(deleteButton);
    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    countOutput.textContent = employeeCount;
});

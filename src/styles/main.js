import people from './people.json';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const columns = ['Name', 'Gender', 'Born', 'Died', 'Age', 'Century'];

  const headerRow = document.createElement('tr');

  columns.forEach((col) => {
    const th = document.createElement('th');

    th.textContent = col;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  people.forEach((person) => {
    const row = document.createElement('tr');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    `;

    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
});

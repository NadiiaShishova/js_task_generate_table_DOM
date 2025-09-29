import people from './people.json';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');

  if (!table) {
    return;
  }

  const headers = ['Name', 'Gender', 'Born', 'Died', 'Age', 'Century'];
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  headers.forEach((title) => {
    const th = document.createElement('th');

    th.textContent = title;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  people.forEach(({ name: personName, sex, born, died }) => {
    const row = document.createElement('tr');

    const age = died - born;
    const century = Math.ceil(died / 100);

    const cells = [
      personName,
      sex === 'm' ? 'Male' : 'Female',
      born,
      died,
      age,
      century,
    ];

    cells.forEach((value) => {
      const td = document.createElement('td');

      td.textContent = value;
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
});

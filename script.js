fetch('repos.json')
  .then(res => res.json())
  .then(repos => {
    const list = document.getElementById('repo-list');
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${repo.url}" class="text-blue-600 hover:underline" target="_blank">
          ${repo.name}
        </a>
      `;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Gagal memuat repos.json:', err));

const birthDate = new Date('2001-11-28T17:00:00Z');
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

function updateAge() {
  const now = new Date();
  const age = (now - birthDate) / MS_PER_YEAR;
  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = age.toFixed(11);
  }
  requestAnimationFrame(updateAge);
}

updateAge();

const startDate = new Date('2023-11-01');
const now = new Date();
const diffTime = Math.abs(now - startDate);
const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
const years = Math.floor(diffMonths / 12);
const months = diffMonths % 12;

let durationText = '';
if (years > 0) durationText += `${years} year${years > 1 ? 's' : ''}`;
if (months > 0) durationText += `${years > 0 ? ' and ' : ''}${months} month${months > 1 ? 's' : ''}`;
if (durationText === '') durationText = 'less than a month';

document.getElementById('serviceDuration').textContent = durationText;

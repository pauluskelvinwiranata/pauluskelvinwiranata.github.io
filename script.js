fetch('repos.json')
    .then(res => res.json())
    .then(repos => {
      const list = document.getElementById('repo-list');
      repos.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${repo.url}" class="text-blue-600 hover:underline" target="_blank">${repo.name}</a>`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error('Gagal memuat repos.json:', err));
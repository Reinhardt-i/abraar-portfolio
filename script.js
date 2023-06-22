// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile menu when a menu item is clicked
const menuItems = document.querySelectorAll('.nav-menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Reveal Animation
const scrollRevealItems = document.querySelectorAll('.scroll-reveal');

const scrollRevealOptions = {
  threshold: 0.5 // Adjust this value to control when the animation triggers
};

const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, scrollRevealOptions);

scrollRevealItems.forEach(item => {
  scrollRevealObserver.observe(item);
});

// Fetch and display GitHub repositories
const repoCardsContainer = document.getElementById('repo-cards');

fetch('https://api.github.com/users/Reinhardt-i/repos')
  .then(response => response.json())
  .then(data => {
    const topRepos = data.slice(0, 4); // Get the top 4 repositories

    topRepos.forEach(repo => {
      const repoCard = document.createElement('div');
      repoCard.classList.add('repo-card');

      const repoName = document.createElement('h3');
      repoName.innerText = repo.name;

      const repoDescription = document.createElement('p');
      repoDescription.innerText = repo.description;

      const repoLanguage = document.createElement('p');
      repoLanguage.innerText = `Language: ${repo.language}`;

      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.innerText = 'View on GitHub';

      repoCard.appendChild(repoName);
      repoCard.appendChild(repoDescription);
      repoCard.appendChild(repoLanguage);
      repoCard.appendChild(repoLink);

      repoCardsContainer.appendChild(repoCard);
    });
  })
  .catch(error => console.log(error));

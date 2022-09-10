// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@           PRELOADER          @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.remove();
  }, 3000);
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@    ADD HEADER BOX SHADOW     @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
  if (this.scrollY > 10) {
    header.classList.add('header-box-shadow');
  } else {
    header.classList.remove('header-box-shadow');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@     CHANGE THEME COLOR       @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const themeButton = document.getElementById('theme-btn'),
  currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  document.body.classList.add('dark-theme');
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('currentTheme', ' ');
  } else {
    localStorage.removeItem('currentTheme');
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW HEADER SEARCH      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const headerSearch = document.getElementById('header-search'),
  searchButton = document.getElementById('search-btn'),
  searchClose = document.getElementById('search-close');

searchButton.addEventListener('click', () => {
  headerSearch.classList.add('show-header-search');
});

searchClose.addEventListener('click', () => {
  headerSearch.classList.remove('show-header-search');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW PROFILE MENU       @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const profileMenu = document.getElementById('profile-menu'),
  profileButton = document.getElementById('profile-btn');

profileButton.addEventListener('click', () => {
  profileMenu.classList.toggle('show-profile-menu');
  profileButton.classList.toggle('change-direction-profile-btn');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@         SHOW SIDEBAR         @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sidebar = document.getElementById('nav'),
  menuButton = document.getElementById('menu-btn'),
  sidebarClose = document.getElementById('nav-close');

menuButton.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  menuButton.style.display = 'none';
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  menuButton.style.display = 'flex';
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@  ADD ACTIVE CLASS TO NAV LINKS  @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', function () {
    navLinks.forEach((n) => {
      n.classList.remove('nav-link-active');
      this.classList.add('nav-link-active');
    });
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@       SHOW REPORT DETAILS       @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const reportButtons = document.querySelectorAll('.report__btn'),
  reportDetails = document.querySelectorAll('.report__details');

reportButtons.forEach((r) => {
  r.addEventListener('click', function () {
    reportDetails.classList.add('show-report-details');
  });
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@@@   chartjs.org   @@@@@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const chart = document.getElementById('chart').getContext('2d');

new Chart(chart, {
  type: 'line',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
    ],

    datasets: [
      {
        label: 'BTC',
        data: [
          30000, 33000, 50000, 60000, 58000, 35000, 33000, 40000, 47000, 38000,
          68000,
        ],
        borderColor: 'hsl(7, 100%, 50%)',
        borderWidth: 2,
      },
      {
        label: 'ETH',
        data: [
          33000, 38000, 70000, 62000, 50000, 50000, 55000, 46000, 43000, 32000,
          60000,
        ],
        borderColor: 'hsl(256, 100%, 65%)',
        borderWidth: 2,
      },
      {
        label: 'TET',
        data: [
          20000, 21000, 22000, 21000, 20000, 20000, 22000, 23000, 20000, 21000,
          20000,
        ],
        borderColor: 'hsl(86, 100%, 45%)',
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});



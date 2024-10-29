window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".search-btn"); // Jangan lupa tambahkan ini jika searchBtn digunakan

    // Event listener untuk tombol close
    closeBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    // Event listener untuk tombol search
    searchBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    // Fungsi untuk mengubah ikon tombol menu
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
};


const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie chart initialization (Chart.js)
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });


    // Fungsi untuk mengecek apakah elemen visible dalam viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menambahkan animasi ke elemen yang visible
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Event listener untuk scroll dan resize
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('resize', handleScrollAnimation);

// Animasi untuk card dan charts container saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
        }, 100 * index); // Setiap card muncul dengan delay 100ms
    });

    // Animasi untuk charts container dan komponennya
    const chartsContainer = document.querySelector('.charts-container');
    const chart = document.querySelector('.chart');
    const budgets = document.querySelectorAll('.budget');

    // Animasi charts container setelah cards
    setTimeout(() => {
        if(chartsContainer) {
            chartsContainer.classList.add('active');
        }
    }, cards.length * 100 + 100); // Delay 100ms setelah semua card selesai

    // Animasi untuk chart
    setTimeout(() => {
        if(chart) {
            chart.classList.add('active');
        }
    }, cards.length * 100 + 200); // Delay 200ms setelah charts container

    // Animasi untuk budget items
    budgets.forEach((budget, index) => {
        setTimeout(() => {
            budget.classList.add('active');
        }, cards.length * 100 + 100 + (100 * index)); // Delay 300ms + 100ms per budget item
    });
});

// Initial check saat halaman pertama kali dimuat
setTimeout(handleScrollAnimation, 100);


window.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector(".sidebar");
    const nightModeBtn = document.getElementById("night-mode-btn");
    let isNightMode = false;
    
    // Event listener untuk tombol night mode
    nightModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("night-mode");
        sidebar.classList.toggle("night-mode");
        this.classList.toggle("bx-moon");
        this.classList.toggle("bx-sun");
        isNightMode = !isNightMode;
    });
});
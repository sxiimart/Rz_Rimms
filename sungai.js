

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    const themePath = document.getElementById('themePath');
  
    if (theme === 'dark') {
      themeIcon.classList.add('moon-icon');
      themeIcon.classList.remove('sun-icon');
      themePath.setAttribute('d', 'M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z');
    } else {
      themeIcon.classList.add('sun-icon');
      themeIcon.classList.remove('moon-icon');
      themePath.setAttribute('d', 'M12 2v2m0 16v2m8.485-8.485l-1.414 1.414m-11.314 0l-1.414-1.414M22 12h-2M4 12H2m16.485-8.485l-1.414 1.414M5.515 5.515L4.1 4.1M12 4a8 8 0 100 16 8 8 0 000-16z');
    }
  });
  
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  
    const themeIcon = document.getElementById('themeIcon');
    const themePath = document.getElementById('themePath');
  
    if (document.documentElement.classList.contains('dark')) {
      themeIcon.classList.add('moon-icon');
      themeIcon.classList.remove('sun-icon');
      themePath.setAttribute('d', 'M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.add('sun-icon');
      themeIcon.classList.remove('moon-icon');
      themePath.setAttribute('d', 'M12 2v2m0 16v2m8.485-8.485l-1.414 1.414m-11.314 0l-1.414-1.414M22 12h-2M4 12H2m16.485-8.485l-1.414 1.414M5.515 5.515L4.1 4.1M12 4a8 8 0 100 16 8 8 0 000-16z');
      localStorage.setItem('theme', 'light');
    }
  }
  
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  
  
  let lastScrollTop = 0;
      const header = document.getElementById("header");
  
      window.addEventListener("scroll", function() {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
          if (currentScroll > lastScrollTop) {
              // Scroll Down
              header.classList.add("hidden");
              header.classList.remove("visible");
          } else {
              // Scroll Up
              header.classList.remove("hidden");
              header.classList.add("visible");
          }
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      }, false);
  
      document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      
        window.addEventListener("scroll", function () {
          if (window.scrollY > window.innerHeight / 2) {
            scrollToTopBtn.classList.remove("opacity-0");
            scrollToTopBtn.classList.add("opacity-100");
          } else {
            scrollToTopBtn.classList.remove("opacity-100");
            scrollToTopBtn.classList.add("opacity-0");
          }
        });
      
        // jQuery smooth scroll
        $('#scrollToTopBtn').on('click', function() {
          $('html, body').animate({
              scrollTop: 0
          }, 1000); // Durasi animasi dalam milidetik (misalnya 800ms)
      });
    
  
    });
    
  
  
  
  const mobileMenu = document.getElementById('mobileMenu');
          const mobileMenuButton = document.getElementById('mobileMenuButton');
          const hamburgerIcon = `<svg class="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                                  </svg>`;
          const closeIcon = `<svg class="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                              </svg>`;
  
          mobileMenuButton.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
              mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') ? hamburgerIcon : closeIcon;
              mobileMenuButton.setAttribute('aria-expanded', !mobileMenu.classList.contains('hidden'));
          });
  
          
          function updateTime() {
            const now = new Date();
            const options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZoneName: "short",
            };
            const formattedDate = now.toLocaleDateString("id-ID", options);
            document.getElementById("current-time").textContent = formattedDate;
          }
        
          updateTime();
          setInterval(updateTime, 1000);
        
        
   
          // Animasi Perkata
            
            const text = "Programmer";
            const animatedText = document.getElementById("animated-text");
      
            let index = 0;
            let isInAnimation = true;
      
            function animateText() {
              if (isInAnimation) {
                animatedText.textContent = text.slice(0, index);
                index++;
                if (index > text.length) {
                  isInAnimation = false;
                  index = text.length;
                }
              } else {
                animatedText.textContent = text.slice(0, index);
                index--;
                if (index < 0) {
                  isInAnimation = true;
                  index = 0;
                }
              }
            }
  
     
      
            setInterval(animateText, 300); // Adjust the interval for speed
  
            
  
            var swiper = new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              loop: true, // Mengaktifkan looping untuk kembali ke gambar pertama setelah gambar terakhir
            });
  
          function updateImageSources() {
              var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.querySelectorAll('.swiper-slide img').forEach(img => {
                  if (isDarkMode) {
                      img.src = img.getAttribute('data-dark-src');
                  } else {
                      img.src = img.getAttribute('data-light-src');
                  }
              });
          }
  
          // Update images on load
          updateImageSources();
  
          // Update images on theme change
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateImageSources);
  
  
            
          
  
  $(document).ready(function(){
      $('.slider').slick({
        autoplay: true, // Menjalankan slider otomatis
        autoplaySpeed: 3500 // Durasi antara setiap slide (dalam milidetik)
      });
    });
  
  
  
  
  // Fungsi untuk mengecek apakah elemen dalam viewport
  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('load', function() {
    const shootingStarElement = document.querySelector('.shooting-star');
    shootingStarElement.style.display = 'block';
  });
  
  // Fungsi untuk mengatur lebar progress bar dan animasi angka persentase
  function setProgressBarWidth(elementId, percentage) {
    var progressBar = document.getElementById(elementId);
    var progressText = document.getElementById(elementId + '-text');
    progressBar.style.width = percentage + '%';
  
    var currentPercentage = 0;
    var increment = 1;
    var interval = setInterval(function() {
      if (currentPercentage <= percentage) {
        progressText.textContent = currentPercentage + '%';
        currentPercentage += increment;
      } else {
        clearInterval(interval);
        progressText.textContent = percentage + '%'; // Ensure the final percentage is set
      }
    }, 50);
  }
  
  // Fungsi untuk mengaktifkan animasi progress bar saat discroll AOS
  function animateProgressBarOnScroll() {
    var progressBars = [
      { id: 'progress-html', percentage: 75 },
      { id: 'progress-css', percentage: 75 },
      { id: 'progress-js', percentage: 50 },
      { id: 'progress-python', percentage: 50 },
      { id: 'progress-cpp', percentage: 40 },
      { id: 'progress-tailwind', percentage: 75 },
      { id: 'progress-php', percentage: 60 },
      { id: 'progress-react', percentage: 40 },
    ];
  
    progressBars.forEach(function(bar) {
      var progressBar = document.getElementById('progress-bar-' + bar.id.split('-')[1]);
      if (isInViewport(progressBar) && !progressBar.classList.contains('animated')) {
        setProgressBarWidth(bar.id, bar.percentage);
        progressBar.classList.add('animated'); // Mark this progress bar as animated
      }
    });
  }
  
  // Event listener untuk discroll AOS
  window.addEventListener('scroll', animateProgressBarOnScroll);
  
  // Untuk memastikan progress bar sudah diatur jika sudah berada dalam viewport pada saat pertama kali halaman dimuat
  document.addEventListener('DOMContentLoaded', animateProgressBarOnScroll);
  
  window.addEventListener('load', function () {
    const img = document.querySelector('img');
    const snakeAnimation = document.querySelector('.snake-animation');
  
    img.addEventListener('load', function () {
      snakeAnimation.style.borderRadius = `${this.offsetWidth / 2}px`;
    });
  });
  
  (function () {
    emailjs.init("AYI2F68CLS6rDJO-N");
  })();
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Validasi name dan message
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Harap isi semua bidang.",
        text: "Pastikan Anda mengisi nama dan pesan.",
      });
      return;
    }
  
    if (!/^[A-Za-z\s]{1,50}$/.test(name) || !/^[A-Za-z\s]{1,50}$/.test(message))  {
      Swal.fire({
        icon: "error",
        title: "Harap isi yang sesuai.",
        text: "Nama atau message hanya boleh berisi huruf dan spasi .",
      });
      return;
    }
  
    // Simple sanitization
      const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
      console.log('Sanitized Input:', {
        name: name,
        email: email,
        message: sanitizedMessage
      });
  
    // Validasi email menggunakan regex untuk memeriksa domain lengkap
    const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i;
  
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Email tidak valid.",
        text: "Harap masukkan email yang valid.",
      });
      return;
    }
  
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
  
    emailjs
      .send("service_3kmbuwb", "template_90hwkrc", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            icon: "success",
            title: "Sukses!",
            text: "Pesan Anda telah terkirim.",
          });
        },
        function (error) {
          console.error("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Gagal mengirim pesan.",
            text: "Terjadi kesalahan saat mengirim pesan.",
          });
        }
      );
  }
  
 
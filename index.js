        // Formni olish
        const form = document.getElementById('emailForm');
        
        // Form yuborilganda ishga tushadigan funktsiya
        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Formning default xatti-harakatini to'xtatish
            
            // Elektron pochta manzilini olish
            const email = document.getElementById('email').value;
            
            // Pochta manzilini localStorage'ga saqlash
            localStorage.setItem('userEmail', email);
            
            // Saqlangan elektron pochta manzilini konsolga chiqarish
            console.log('Saqlangan elektron pochta:', localStorage.getItem('userEmail'));
            
            // Xabar berish
            alert('Elektron pochta manzilingiz saqlandi!');
        });
        document.querySelector('.scroll-button').addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight * 8, // 5 ekran balandligiga siljish
                behavior: 'smooth' // Siljishni yumshoq qilish
            });
        });
        
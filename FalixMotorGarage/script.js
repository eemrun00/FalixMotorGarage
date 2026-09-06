// ================= NAVBAR DROPDOWN =================

function toggleMenu(menuId) {

    const menu = document.getElementById(menuId);

    // Tutup semua dropdown lain
    document.querySelectorAll(".dropdown-menu").forEach(function(item) {

        if (item.id !== menuId) {
            item.classList.remove("show");
        }

    });

    // Buka / tutup dropdown yang dipilih
    menu.classList.toggle("show");
}


// Tutup dropdown bila klik tempat lain
document.addEventListener("click", function(event) {

    if (!event.target.closest(".nav-dropdown")) {

        document.querySelectorAll(".dropdown-menu").forEach(function(menu) {
            menu.classList.remove("show");
        });

    }

});

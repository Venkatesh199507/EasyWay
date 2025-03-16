(function () {
    const languageData = {
        ta: {
            name: "பெயர்",
            password: "கடவுச்சொல்",
        },
        en: {
            name: "Name",
            password: "Password",
        },
        hin: {
            name: "नाम",
            password: "पासवर्ड",
        },
    };
    window.changeLanguage = function (lang) {
        document.getElementById("label-name").textContent = languageData[lang].name;
        document.getElementById("label-pass").textContent = languageData[lang].password;
    };
})();

// Using Google Translator
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            includedLanguages: "en,ta,ml,hi",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
    );
}

const items = [
    { name: "iPhone 13", category: "Electronics", price: "₹799", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000" },
    { name: "Samsung Galaxy S21", category: "Electronics", price: "₹699", image: "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21/gallery/in-galaxy-s21-5g-g991-sm-g991bzvdinu-368335541?$684_547_PNG$" },
    { name: "MacBook Pro", category: "Electronics", price: "₹1299", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359481" },
    { name: "Dell XPS 13", category: "Electronics", price: "₹999", image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,0&resMode=sharp2&size=3319,2405" },
    { name: "LG OLED TV", category: "Electronics", price: "₹1499", image: "https://www.lg.com/us/images/tvs/md07500365/gallery/medium01.jpg" },
    { name: "Apple Watch", category: "Electronics", price: "₹399", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP0Y3ref_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&.v=1660715723116" },
    { name: "Sony Headphones", category: "Electronics", price: "₹299", image: "https://www.sony.com/image/4a9e0b1b5e5b5b5e5b5b5e5b5b5e5b5b?fmt=pjpeg&wid=330&hei=330" },
    { name: "Canon EOS R5", category: "Electronics", price: "₹3899", image: "https://www.canon.com/image/canon-eos-r5-front-view?wid=500&hei=500" },
    { name: "Nintendo Switch", category: "Electronics", price: "₹299", image: "https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/package_redblue.jpg" },
    { name: "PlayStation 5", category: "Electronics", price: "₹499", image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$1600px$" },
    { name: "Banana", category: "Grocery", price: "₹0.99", image: "https://www.freepngimg.com/thumb/banana/13-banana-png-image-thumb.png" },
    { name: "Apple", category: "Grocery", price: "₹1.49", image: "https://www.freepngimg.com/thumb/apple/10-red-apple-png-image-thumb.png" },
    { name: "Milk", category: "Grocery", price: "₹2.99", image: "https://www.freepngimg.com/thumb/milk/7-milk-png-image-thumb.png" },
    { name: "Bread", category: "Grocery", price: "₹1.99", image: "https://www.freepngimg.com/thumb/bread/7-bread-png-image-thumb.png" },
    { name: "Eggs", category: "Grocery", price: "₹3.49", image: "https://www.freepngimg.com/thumb/egg/6-egg-png-image-thumb.png" },
    { name: "Chicken", category: "Grocery", price: "₹5.99", image: "https://www.freepngimg.com/thumb/chicken/7-chicken-png-image-thumb.png" },
    { name: "Rice", category: "Grocery", price: "₹4.99", image: "https://www.freepngimg.com/thumb/rice/7-rice-png-image-thumb.png" },
    { name: "Pasta", category: "Grocery", price: "₹1.49", image: "https://www.freepngimg.com/thumb/pasta/7-pasta-png-image-thumb.png" },
    { name: "Tomato", category: "Grocery", price: "₹0.79", image: "https://www.freepngimg.com/thumb/tomato/7-tomato-png-image-thumb.png" },
    { name: "Potato", category: "Grocery", price: "₹0.49", image: "https://www.freepngimg.com/thumb/potato/7-potato-png-image-thumb.png" },
    { name: "T-Shirt", category: "Clothing", price: "₹19.99", image: "https://www.freepngimg.com/thumb/t_shirt/3-2-t-shirt-png-thumb.png" },
    { name: "Jeans", category: "Clothing", price: "₹39.99", image: "https://www.freepngimg.com/thumb/jeans/4-jeans-png-image-thumb.png" },
    { name: "Jacket", category: "Clothing", price: "₹59.99", image: "https://www.freepngimg.com/thumb/jacket/4-jacket-png-image-thumb.png" },
    { name: "Sweater", category: "Clothing", price: "₹29.99", image: "https://www.freepngimg.com/thumb/sweater/4-sweater-png-image-thumb.png" },
    { name: "Dress", category: "Clothing", price: "₹49.99", image: "https://www.freepngimg.com/thumb/dress/4-dress-png-image-thumb.png" },
    { name: "Shoes", category: "Clothing", price: "₹79.99", image: "https://www.freepngimg.com/thumb/shoes/4-shoes-png-image-thumb.png" },
    { name: "Sneakers", category: "Clothing", price: "₹89.99", image: "https://www.freepngimg.com/thumb/sneakers/4-sneakers-png-image-thumb.png" },
    { name: "Hat", category: "Clothing", price: "₹14.99", image: "https://www.freepngimg.com/thumb/hat/4-hat-png-image-thumb.png" },
    { name: "Socks", category: "Clothing", price: "₹9.99", image: "https://www.freepngimg.com/thumb/socks/4-socks-png-image-thumb.png" },
    { name: "Shorts", category: "Clothing", price: "₹24.99", image: "https://www.freepngimg.com/thumb/shorts/4-shorts-png-image-thumb.png" }
];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.form-control');
    const searchButton = document.querySelector('.btn-outline-success');
    const carouselContainer = document.getElementById('carouselExampleIndicators');
    const carouselParent = carouselContainer.parentElement;
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    carouselParent.insertAdjacentElement('afterend', resultsContainer);

    const secondNavbarPlaceholder = document.getElementById('second-navbar-placeholder');
    let cart = [];
    let filteredItems = [];

    // Add event listeners to dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item[data-category]');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            filteredItems = items.filter(item => item.category === category);

            // Hide carousel
            carouselParent.style.display = 'none';

            // Create the second navbar
            createSecondNavbar();

            // Display results
            displayResults(filteredItems);
        });
    });

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        filteredItems = [];

        // Check if the query matches a category
        if (query === "electronics" || query === "grocery" || query === "clothing") {
            filteredItems = items.filter(item => item.category.toLowerCase() === query);
        } else {
            // Otherwise, search by name or category
            filteredItems = items.filter(item =>
                item.name.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            );
        }

        // Hide carousel
        carouselParent.style.display = 'none';

        // Create the second navbar
        createSecondNavbar();

        // Display results
        displayResults(filteredItems);
    });

    function createSecondNavbar() {
        // Clear the placeholder
        secondNavbarPlaceholder.innerHTML = '';

        // Create the second navbar
        const secondNavbar = document.createElement('div');
        secondNavbar.id = 'second-navbar';

        // Add filters
        const filters = document.createElement('div');
        filters.className = 'filters';

        // Price Filter
        const priceFilter = document.createElement('select');
        priceFilter.id = 'price-filter';
        priceFilter.className = 'form-select';
        priceFilter.innerHTML = `
            <option value="all">Price</option>
            <option value="0-50">₹0 - ₹50</option>
            <option value="50-100">₹50 - ₹100</option>
            <option value="100-500">₹100 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000-">₹1000+</option>
        `;
        filters.appendChild(priceFilter);

        // Brand Filter
        const brandFilter = document.createElement('select');
        brandFilter.id = 'brand-filter';
        brandFilter.className = 'form-select';
        brandFilter.innerHTML = `
            <option value="all">Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Dell">Dell</option>
            <option value="LG">LG</option>
            <option value="Sony">Sony</option>
        `;
        filters.appendChild(brandFilter);

        // Add filters to the second navbar
        secondNavbar.appendChild(filters);

        // Add Cart
        const cartSection = document.createElement('div');
        cartSection.className = 'cart';
        cartSection.innerHTML = `
            <div class="dropdown">
                <a href="#" id="cart-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-shopping-cart"></i> Cart (<span id="cart-count">${cart.length}</span>)
                </a>
                <ul class="dropdown-menu" id="cart-dropdown-menu" aria-labelledby="cart-toggle">
                    <li><p class="dropdown-item">Your cart is empty.</p></li>
                </ul>
            </div>
        `;
        secondNavbar.appendChild(cartSection);

        // Append the second navbar to the placeholder
        secondNavbarPlaceholder.appendChild(secondNavbar);

        // Add event listeners for filters
        priceFilter.addEventListener('change', function () {
            const priceRange = priceFilter.value;
            let filteredByPrice = [];

            if (priceRange === "all") {
                filteredByPrice = filteredItems;
            } else {
                const [min, max] = priceRange.split('-').map(Number);
                filteredByPrice = filteredItems.filter(item => {
                    const price = parseFloat(item.price.replace('₹', ''));
                    if (max) {
                        return price >= min && price <= max;
                    } else {
                        return price >= min;
                    }
                });
            }

            displayResults(filteredByPrice);
        });

        brandFilter.addEventListener('change', function () {
            const brand = brandFilter.value;
            let filteredByBrand = [];

            if (brand === "all") {
                filteredByBrand = filteredItems;
            } else {
                filteredByBrand = filteredItems.filter(item => item.name.includes(brand));
            }

            displayResults(filteredByBrand);
        });
    }

    function displayResults(filteredItems) {
        resultsContainer.innerHTML = '';
        if (filteredItems.length === 0) {
            resultsContainer.innerHTML = '<p>No items found.</p>';
        } else {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';

            filteredItems.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.width = '18rem';
                card.style.marginBottom = '15px';

                card.innerHTML = `
                    <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><strong>Category:</strong> ${item.category}</p>
                        <p class="card-text"><strong>Price:</strong> ${item.price}</p>
                        <button class="btn btn-primary add-to-cart" data-item='${JSON.stringify(item)}'>Add to Cart</button>
                    </div>
                `;
                cardContainer.appendChild(card);
            });

            resultsContainer.appendChild(cardContainer);
        }
    }

    // Add to Cart
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const item = JSON.parse(event.target.getAttribute('data-item'));

            // Check if the item already exists in the cart
            const existingItem = cart.find(cartItem => cartItem.name === item.name);

            if (existingItem) {
                // If the item exists, increment the quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it to the cart with a quantity of 1
                item.quantity = 1;
                cart.push(item);
            }

            // Update the cart display
            updateCartDisplay();
        }
    });

    // Remove from Cart (One by One)
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart')) {
            event.stopPropagation(); // Prevent the event from bubbling up and closing the dropdown
            const index = event.target.getAttribute('data-index');
            const item = cart[index];

            if (item.quantity > 1) {
                // If quantity is more than 1, decrement the quantity
                item.quantity -= 1;
            } else {
                // If quantity is 1, remove the item from the cart
                cart.splice(index, 1);
            }

            // Update the cart display
            updateCartDisplay();
        }
    });

    // Clear Cart
    document.addEventListener('click', function (event) {
        if (event.target.id === 'clear-cart') {
            event.preventDefault();
            cart = []; // Clear the cart array
            updateCartDisplay(); // Update the cart display
        }
    });

    // Update Cart Display
    function updateCartDisplay() {
        const cartDropdownMenu = document.getElementById('cart-dropdown-menu');
        if (!cartDropdownMenu) return;

        // Clear the cart dropdown
        cartDropdownMenu.innerHTML = '';

        if (cart.length === 0) {
            cartDropdownMenu.innerHTML = '<li><p class="dropdown-item">Your cart is empty.</p></li>';
            return;
        }

        // Add each item to the dropdown
        let totalPrice = 0;
        cart.forEach((item, index) => {
            // Remove the ₹ symbol and convert the price to a number
            const price = parseFloat(item.price.replace('₹', ''));
            const itemTotal = price * item.quantity;
            totalPrice += itemTotal;

            const li = document.createElement('li');
            li.className = 'dropdown-item';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="mb-0">${item.name}</p>
                        <small class="text-muted">${item.price} x ${item.quantity}</small>
                    </div>
                    <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button>
                </div>
            `;
            cartDropdownMenu.appendChild(li);
        });

        // Add a row for the total price
        const totalLi = document.createElement('li');
        totalLi.className = 'dropdown-item';
        totalLi.innerHTML = `
            <div class="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>₹${totalPrice.toFixed(2)}</strong>
            </div>
        `;
        cartDropdownMenu.appendChild(totalLi);

        // Add a checkout button
        const checkoutLi = document.createElement('li');
        checkoutLi.innerHTML = `
            <a class="dropdown-item text-center btn btn-primary" href="#" id="checkout-button">Checkout</a>
        `;
        cartDropdownMenu.appendChild(checkoutLi);

        // Add a clear cart button
        const clearCartLi = document.createElement('li');
        clearCartLi.innerHTML = `
            <button class="dropdown-item text-center btn btn-warning" id="clear-cart">Clear Cart</button>
        `;
        cartDropdownMenu.appendChild(clearCartLi);

        // Add a close button
        const closeLi = document.createElement('li');
        closeLi.innerHTML = `
            <button class="dropdown-item text-center btn btn-secondary" id="close-cart">Close</button>
        `;
        cartDropdownMenu.appendChild(closeLi);

        // Update the cart count in the navbar
        updateCartCount();
    }

    // Update Cart Count
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    // Close Cart Dropdown
    document.addEventListener('click', function (event) {
        if (event.target.id === 'close-cart') {
            event.preventDefault();
            const cartDropdown = document.querySelector('.dropdown-menu');
            cartDropdown.style.display = 'none'; // Hide the dropdown
        }
    });

    // Cart Toggle
    document.addEventListener('click', function (event) {
        if (event.target.id === 'cart-toggle') {
            event.preventDefault();
            const cartDropdown = document.querySelector('.dropdown-menu');
            if (cartDropdown.style.display === 'none' || !cartDropdown.style.display) {
                cartDropdown.style.display = 'block'; // Show the dropdown
            } else {
                cartDropdown.style.display = 'none'; // Hide the dropdown
            }
        }
    });

    // Payment Functionality
    document.addEventListener('click', function (event) {
        if (event.target.id === 'checkout-button') {
            event.preventDefault();
            alert('Redirecting to payment gateway...');
            // Simulate payment redirection
            window.location.href = 'payment.html'; // Replace with your payment page URL
        }
    });
});






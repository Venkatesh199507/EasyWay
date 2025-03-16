const products = [
    { id: 1, name: "Samsung s25", price: 130000, category: "Electronics", brand: "Samsung", image: "https://www.primemobilestore.com/wp-content/uploads/2024/09/s-24.png" },
    { id: 2, name: "Basmathi Rice", price: 400, category: "Grocery", brand: "Rice", image: "https://wallpapers.com/images/hd/basmati-rice-png-cre97-mkxqpnmn8lz5c9xk.jpg" },
    { id: 3, name: "Men's T-shirt", price: 250, category: "Clothes", subCategory: "Men", subSubCategory: "Adult", brand: "TechnoSport", image: "https://5.imimg.com/data5/NR/KD/XN/SELLER-31619481/men-round-neck-t-shirt.jpeg" },
    { id: 4, name: "Women's Dress", price: 500, category: "Clothes", subCategory: "Women", subSubCategory: "Adult", brand: "Zara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK6VygA5F2s7UfGEXMPFnuuX5bzRCeo1DtfKJNFALcI_njCmgKKwsuAyTU5mT6J9tdv8&usqp=CAU" },
    { id: 5, name: "Kids T-shirt", price: 150, category: "Clothes", subCategory: "Men", subSubCategory: "Kids", brand: "TechnoSport", image: "https://www.vhv.rs/dpng/d/538-5382983_t-shirt-toddler-master-layered-web-kids-t.png" },
    { id: 6, name: "LG TV", price: 50000, category: "Electronics", brand: "LG", image: "https://img.favpng.com/6/5/0/led-backlit-lcd-smart-tv-lg-lj600b-high-definition-television-png-favpng-qXF7uKfkiNPx0zUcnCxAW0kHf.jpg" },
    { id: 7, name: "Black Rice", price: 500, category: "Grocery", brand: "Rice", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/385985343/XA/LP/LS/149906043/black-rice-1-500x500.jpg" },
    { id: 8, name: "Wheat Flour", price: 150, category: "Grocery", brand: "Flour", image: "https://w7.pngwing.com/pngs/549/793/png-transparent-wheat-illustration-wheat-flour-atta-flour-bread-wheat-food-whole-grain-gluten.png" },
    { id: 9, name: "Peanut Oil", price: 350, category: "Grocery", brand: "Oil", image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-grain-and-peanut-oil-image_2238017.jpg" },
    { id: 10, name: "Samba Rice", price: 350, category: "Grocery", brand: "Rice", image: "https://www.kanchiorganicfarms.com/wp-content/uploads/2016/05/KOF-Rice.png" },
    { id: 11, name: "iPhone 16", price: 150000, category: "Electronics", brand: "Apple", image: "https://pngimg.com/d/iphone16_PNG3.png" },
    { id: 12, name: "Jasmine Rice", price: 550, category: "Grocery", brand: "Rice", image: "https://e7.pngegg.com/pngimages/1002/417/png-clipart-jasmine-rice-white-rice-thung-kula-ronghai-cereal-cultures-around-the-world-cooking-number.png" },
    { id: 13, name: "Coconut Oil", price: 200, category: "Grocery", brand: "Oil", image: "https://w7.pngwing.com/pngs/667/352/png-transparent-brown-coconut-oil-bottle-coconut-oil-honey-food-oil-miscellaneous-food-recipe-thumbnail.png" },
    { id: 14, name: "Gingelly Oil", price: 300, category: "Grocery", brand: "Oil", image: "https://e7.pngegg.com/pngimages/739/949/png-clipart-sesame-oil-sesame-oil-seesamiseemned-vegetable-oil-sesame-miscellaneous-nutrition-thumbnail.png" },
    { id: 15, name: "Lenovo Legion", price: 70000, category: "Electronics", brand: "Lenovo", image: "https://psrefstuff.lenovo.com/syspool/Sys/Image/Legion/Legion_5_15ARP8/Legion_5_15ARP8_CT1_01.png" },
    { id: 16, name: "Women's Dress", price: 1850, category: "Clothes", subCategory: "Women", subSubCategory: "Adult", brand: "Zara", image: "https://w7.pngwing.com/pngs/982/812/png-transparent-little-black-dress-clothing-cocktail-dress-skirt-women-with-women-accessories-holidays-atmosphere-thumbnail.png" },
    { id: 17, name: "Olive Oil", price: 800, category: "Grocery", brand: "Oil", image: "https://w7.pngwing.com/pngs/473/711/png-transparent-olive-oil-cooking-oils-wine-olive-oil-food-olive-wine-thumbnail.png" },
    { id: 18, name: "Rice Flour", price: 100, category: "Grocery", brand: "Flour", image: "https://t3.ftcdn.net/jpg/04/32/37/68/360_F_432376883_eCazPhwLTDkBvvkUvSbhQH8mj1SNUzjy.jpg" },
    { id: 19, name: "Mustard Oil", price: 430, category: "Grocery", brand: "Oil", image: "https://img.freepik.com/premium-psd/mustard-oil-uses-traditional-home-remedies_909478-554.jpg" },
    { id: 20, name: "Ragi Flour", price: 500, category: "Grocery", brand: "Flour", image: "https://media.istockphoto.com/id/985916506/photo/ragi-nachni-also-known-as-finger-millet-and-ragi-flour-which-is-a-healthy-food-and-is-gluten.jpg?s=612x612&w=0&k=20&c=4BTt3eiimxc19Z1MHy9tv-gyhc4fpi1Y9OP7S1Cq6oY=" },
    { id: 21, name: "Motorola Edge50", price: 35000, category: "Electronics", brand: "Motorola", image: "https://motorolain.vtexassets.com/arquivos/ids/159119-800-auto?width=800&height=auto&aspect=true" },
    { id: 22, name: "HP Victus", price: 65000, category: "Electronics", brand: "HP", image: "https://in-files.apjonlinecdn.com/landingpages/npi/hp-victus-15-laptop/intel/images/w100_slide2_v2.png" },
    { id: 23, name: "Bamboo Rice", price: 800, category: "Grocery", brand: "Rice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwUYCcGIlCbC5GKo-yIet5uAOjbpQbVHXbg&s" },
    { id: 24, name: "Bamboo Rice", price: 800, category: "Grocery", brand: "Rice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwUYCcGIlCbC5GKo-yIet5uAOjbpQbVHXbg&s" },
    { id: 25, name: "Acer", price: 30000, category: "Electronics", brand: "Acer", image: "https://e7.pngegg.com/pngimages/266/804/png-clipart-laptop-acer-aspire-3-a315-51-intel-core-acer-aspire-notebook-netbook-computer.png" },
    { id: 26, name: "Kids T-shirt", price: 175, category: "Clothes", subCategory: "Men", subSubCategory: "Kids", brand: "TechnoSport", image: "https://strechgear.com/cdn/shop/files/106_b26140da-68e5-4848-b3d9-ce13e7c5bf2e.png?v=1731062645" },
    { id: 27, name: "Kids T-shirt", price: 215, category: "Clothes", subCategory: "Men", subSubCategory: "Kids", brand: "TechnoSport", image: "https://5.imimg.com/data5/SELLER/Default/2023/2/AQ/HT/MS/40983079/technosport-crew-neck-t-shirt-b-109--500x500.jpg" },
    { id: 28, name: "Women's Dress", price: 550, category: "Clothes", subCategory: "Women", subSubCategory: "Adult", brand: "Zara", image: "https://w7.pngwing.com/pngs/757/605/png-transparent-women-s-yellow-sleeveless-dress-dress-see-through-clothing-top-women-dress-tshirt-orange-fashion-thumbnail.png" },
];

const categoryBrands = {
    "Electronics": ["Apple", "Samsung", "LG", "Motorola", "HP", "Lenovo", "Acer"],
    "Clothes": ["TechnoSport", "Zara", "Adidas"],
    "Grocery": ["Rice", "Oil", "Flour"]
};

const subCategories = {
    "Clothes": ["Men", "Women"]
};

const subSubCategories = {
    "Men": ["Kids", "Adult"],
    "Women": ["Kids", "Adult"]
};

let cart = [];

// Render products based on filters
function renderProducts() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const subCategoryFilter = document.getElementById("subCategoryFilter").value;
    const subSubCategoryFilter = document.getElementById("subSubCategoryFilter").value;
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0; // Default to 0 if empty
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity; // Default to Infinity if empty
    const brandFilter = document.getElementById("brandFilter").value;

    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    const filteredProducts = products.filter(product => {
        const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
        const matchesSubCategory = subCategoryFilter === "all" || product.subCategory === subCategoryFilter;
        const matchesSubSubCategory = subSubCategoryFilter === "all" || product.subSubCategory === subSubCategoryFilter;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesBrand = brandFilter === "all" || product.brand === brandFilter;

        return matchesCategory && matchesSubCategory && matchesSubSubCategory && matchesPrice && matchesBrand;
    });

    // Number of columns per row
    const columnsPerRow = 6;

    filteredProducts.forEach((product, index) => {
        // Add product card
        productContainer.innerHTML += `
            <div class="col-6 col-md-4 col-lg-2 product-card">
                <div class="card">
                    <div class="view-icon" onclick="showProductDetails('${product.name}', ${product.price}, '${product.category}', '${product.brand}', '${product.image}')">
                        <i class="fas fa-eye"></i>
                    </div>
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h6 class="card-title">${product.name}</h6>
                        <p class="text-muted">₹${product.price}</p>
                        <button class="btn btn-primary btn-sm add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                    </div>
                </div>
            </div>`;

        // Add break line after each row
        if ((index + 1) % columnsPerRow === 0) {
            productContainer.innerHTML += `<div class="col-12 break-line"></div>`;
        }
    });
}

// Show product details in modal
function showProductDetails(name, price, category, brand, image) {
    document.getElementById("productDetailsImage").src = image;
    document.getElementById("productDetailsName").textContent = name;
    document.getElementById("productDetailsPrice").textContent = `Price: ₹${price}`;
    document.getElementById("productDetailsCategory").textContent = `Category: ${category}`;
    document.getElementById("productDetailsBrand").textContent = `Brand: ${brand}`;

    // Show the modal
    const productDetailsModal = new bootstrap.Modal(document.getElementById("productDetailsModal"));
    productDetailsModal.show();
}

// Add item to cart
function addToCart(name, price) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        // If the product exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        cart.push({ name, price: parseInt(price), quantity: 1 });
    }

    // Update the cart display
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in cart.</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.quantity; // Calculate total price based on quantity
            totalItems += item.quantity; // Calculate total number of items in the cart

            cartItems.innerHTML += `
                <div class="d-flex justify-content-between border-bottom p-2">
                    <span>${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}</span>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>`;
        });
    }

    // Update the total price and cart count
    cartTotal.textContent = total;
    cartCount.textContent = totalItems;
}

// Remove item from cart
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        // If the item has more than 1 quantity, decrease the quantity
        cart[index].quantity -= 1;
    } else {
        // If the item has only 1 quantity, remove it from the cart
        cart.splice(index, 1);
    }

    // Update the cart display
    updateCart();
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Update brand filter based on selected category
function updateBrandFilter() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const brandFilter = document.getElementById("brandFilter");
    brandFilter.innerHTML = "<option value='all'>All Brands</option>";

    if (categoryFilter !== "all") {
        categoryBrands[categoryFilter].forEach(brand => {
            brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
        });
    }
}

// Update sub-category filter based on selected category
function updateSubCategoryFilter() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const subCategoryFilterContainer = document.getElementById("subCategoryFilterContainer");
    const subCategoryFilter = document.getElementById("subCategoryFilter");

    if (categoryFilter === "Clothes") {
        subCategoryFilterContainer.style.display = "block";
        subCategoryFilter.innerHTML = "<option value='all'>All Sub-Categories</option>";
        subCategories[categoryFilter].forEach(subCategory => {
            subCategoryFilter.innerHTML += `<option value="${subCategory}">${subCategory}</option>`;
        });
    } else {
        subCategoryFilterContainer.style.display = "none";
        subCategoryFilter.innerHTML = "<option value='all'>All Sub-Categories</option>";
    }
}

// Update sub-sub-category filter based on selected sub-category
function updateSubSubCategoryFilter() {
    const subCategoryFilter = document.getElementById("subCategoryFilter").value;
    const subSubCategoryFilterContainer = document.getElementById("subSubCategoryFilterContainer");
    const subSubCategoryFilter = document.getElementById("subSubCategoryFilter");

    if (subCategoryFilter !== "all" && subSubCategories[subCategoryFilter]) {
        subSubCategoryFilterContainer.style.display = "block";
        subSubCategoryFilter.innerHTML = "<option value='all'>All Sub-Sub-Categories</option>";
        subSubCategories[subCategoryFilter].forEach(subSubCategory => {
            subSubCategoryFilter.innerHTML += `<option value="${subSubCategory}">${subSubCategory}</option>`;
        });
    } else {
        subSubCategoryFilterContainer.style.display = "none";
        subSubCategoryFilter.innerHTML = "<option value='all'>All Sub-Sub-Categories</option>";
    }
}

// Event listeners for filters
document.getElementById("categoryFilter").addEventListener("change", () => {
    updateBrandFilter();
    updateSubCategoryFilter();
    updateSubSubCategoryFilter();
    renderProducts();
});
document.getElementById("subCategoryFilter").addEventListener("change", () => {
    updateSubSubCategoryFilter();
    renderProducts();
});

// Function to apply price filter
function applyPriceFilter() {
    renderProducts();
}

document.getElementById("brandFilter").addEventListener("change", renderProducts);

// Initial render
updateBrandFilter();
updateSubCategoryFilter();
updateSubSubCategoryFilter();
renderProducts();

// Payment functions
function proceedToPayment() {
    const totalAmount = calculateCartTotal();
    if (totalAmount <= 0) {
        alert("Your cart is empty!");
        return;
    }
    // Open the payment modal
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
}

function payWithCard() {
    // Card payment logic
    alert("Card payment selected.");
}

function payWithCash() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to proceed with cash payment.");
        return;
    }

    // Confirm cash payment
    const confirmPayment = confirm("You have selected Cash on Delivery. Do you want to proceed?");
    if (confirmPayment) {
        generateBill(); // Generate and display the bill
    }
}

function payWithGooglePay() {
    // Google Pay logic
    alert("Google Pay selected.");
}

// Generate bill function
function generateBill() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to generate a bill.");
        return;
    }

    // Create a bill summary
    let billSummary = "📄 **Your Bill Summary**\n\n";
    cart.forEach((item, index) => {
        billSummary += `${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}\n`;
    });

    billSummary += `\n**Total Amount: ₹${calculateCartTotal()}**\n`;
    billSummary += "\nThank you for shopping with us! 🛒";

    // Display the bill summary in the modal
    document.getElementById("billSummary").textContent = billSummary;
    const billModal = new bootstrap.Modal(document.getElementById("billModal"));
    billModal.show();
}

// Print bill function
function printBill() {
    const billContent = document.getElementById("billSummary").textContent;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`<pre>${billContent}</pre>`);
    printWindow.document.close();
    printWindow.print();
}

// Download bill function
function downloadBill() {
    const billContent = document.getElementById("billSummary").textContent;
    const blob = new Blob([billContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bill_summary.txt";
    a.click();
    URL.revokeObjectURL(url);
}

// Refresh the page when the bill modal is closed
document.getElementById("billModal").addEventListener("hidden.bs.modal", function () {
    location.reload(); // Refresh the page
});

// Calculate total amount in the cart
function calculateCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
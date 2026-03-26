// Product Data - Each folder represents one product
const products = [
    {
        id: 1,
        name: "Classic Cable Knit Sweater",
        price: 89.99,
        category: "pullover",
        image: "Sản phẩm 1/main-image-1.jpeg",
        description: "A beautiful cable knit sweater perfect for cold winter days. Made from premium wool blend.",
        variants: [
            { color: "Cream", image: "Sản phẩm 1/main-image-1.jpeg" },
            { color: "Beige", image: "Sản phẩm 1/main-image-2.jpeg" },
            { color: "Gray", image: "Sản phẩm 1/main-image-3.jpeg" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 2,
        name: "Elegant Wool Cardigan",
        price: 79.99,
        category: "cardigan",
        image: "Sản phẩm 2/main-image-1.jpeg",
        description: "Stylish and versatile cardigan that can be dressed up or down for any occasion.",
        variants: [
            { color: "Black", image: "Sản phẩm 2/main-image-1.jpeg" },
            { color: "Navy", image: "Sản phẩm 2/main-image-2.jpeg" },
            { color: "Burgundy", image: "Sản phẩm 2/main-image-3.jpeg" }
        ],
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 3,
        name: "Cozy Turtleneck Sweater",
        price: 69.99,
        category: "pullover",
        image: "Sản phẩm 3/main-image-1.jpeg",
        description: "Timeless turtleneck sweater that's perfect for layering or wearing on its own.",
        variants: [
            { color: "Forest Green", image: "Sản phẩm 3/main-image-1.jpeg" },
            { color: "Camel", image: "Sản phẩm 3/main-image-2.jpeg" },
            { color: "Charcoal", image: "Sản phẩm 3/main-image-3.jpeg" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 4,
        name: "Stylish Knit Vest",
        price: 59.99,
        category: "vest",
        image: "Sản phẩm 4/variant-image-1.jpeg",
        description: "Cozy and warm vest perfect for adding an extra layer of style.",
        variants: [
            { color: "Camel", image: "Sản phẩm 4/variant-image-1.jpeg" },
            { color: "Gray", image: "Sản phẩm 4/variant-image-2.jpeg" },
            { color: "Brown", image: "Sản phẩm 4/variant-image-3.jpeg" },
            { color: "Black", image: "Sản phẩm 4/variant-image-4.jpeg" }
        ],
        sizes: ["S", "M", "L"],
        inStock: true
    },
    {
        id: 5,
        name: "Bohemian Pattern Sweater",
        price: 94.99,
        category: "pullover",
        image: "Sản phẩm 5/main-image-1.jpeg",
        description: "Unique bohemian-inspired sweater with intricate patterns and details.",
        variants: [
            { color: "Multi-color", image: "Sản phẩm 5/main-image-1.jpeg" },
            { color: "Brown", image: "Sản phẩm 5/main-image-2.jpeg" },
            { color: "Cream", image: "Sản phẩm 5/main-image-3.jpeg" }
        ],
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 6,
        name: "Lightweight Summer Cardigan",
        price: 54.99,
        category: "cardigan",
        image: "Sản phẩm 6/variant-image-1.jpeg",
        description: "Perfect lightweight cardigan for spring and summer evenings.",
        variants: [
            { color: "White", image: "Sản phẩm 6/variant-image-1.jpeg" },
            { color: "Lavender", image: "Sản phẩm 6/variant-image-2.jpeg" },
            { color: "Pink", image: "Sản phẩm 6/variant-image-3.jpeg" },
            { color: "Beige", image: "Sản phẩm 6/variant-image-4.jpeg" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 7,
        name: "Premium Cashmere Sweater",
        price: 129.99,
        category: "pullover",
        image: "Sản phẩm 8/main-image-1.jpeg",
        description: "Luxurious cashmere sweater for ultimate comfort and elegance.",
        variants: [
            { color: "Ivory", image: "Sản phẩm 8/main-image-1.jpeg" },
            { color: "Blush", image: "Sản phẩm 8/main-image-2.jpeg" },
            { color: "Sage", image: "Sản phẩm 8/main-image-3.jpeg" },
            { color: "Charcoal", image: "Sản phẩm 8/main-image-4.jpeg" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        inStock: true
    },
    {
        id: 8,
        name: "Modern Layered Vest",
        price: 49.99,
        category: "vest",
        image: "Sản phẩm 9/variant-image-1.jpeg",
        description: "Modern and stylish vest perfect for layering over any outfit.",
        variants: [
            { color: "Navy", image: "Sản phẩm 9/variant-image-1.jpeg" },
            { color: "Khaki", image: "Sản phẩm 9/variant-image-2.jpeg" },
            { color: "Black", image: "Sản phẩm 9/variant-image-3.jpeg" },
            { color: "Olive", image: "Sản phẩm 9/variant-image-4.jpeg" }
        ],
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    }
];

// Shopping Cart
let cart = [];
let wishlist = [];

// Safe localStorage operations
function safeLocalStorageGet(key, defaultValue = []) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn('localStorage access denied, using default value');
        return defaultValue;
    }
}

function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('localStorage access denied, cart data not saved');
    }
}

// Initialize cart and wishlist
cart = safeLocalStorageGet('cart');
wishlist = safeLocalStorageGet('wishlist');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Load featured products on home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFeaturedProducts();
    }
    
    // Load all products on products page
    if (window.location.pathname.includes('products.html')) {
        loadProducts();
    }
    
    // Load product detail
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    }
    
    // Load cart items
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
});

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Load featured products
function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 3);
    const container = document.getElementById('featured-products');
    
    if (container) {
        container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
}

// Load all products
function loadProducts() {
    const container = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    
    if (container) {
        container.innerHTML = products.map(product => createProductCard(product)).join('');
        productCount.textContent = products.length;
    }
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card product-card hover-lift">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="text-muted small">${product.description.substring(0, 80)}...</p>
                    <div class="d-flex gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-warning flex-fill">View Details</a>
                        <button class="btn btn-warning" onclick="addToCartFromList(${product.id})">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load product detail
function loadProductDetail() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        if (productId && !isNaN(productId)) {
            const product = products.find(p => p.id === productId);
            if (product) {
                displayProductDetail(product);
            } else {
                showNotification('Product not found', 'error');
                // Redirect to products page after a short delay
                setTimeout(() => {
                    window.location.href = 'products.html';
                }, 2000);
            }
        } else {
            showNotification('Invalid product ID', 'error');
            // Redirect to products page after a short delay
            setTimeout(() => {
                window.location.href = 'products.html';
            }, 2000);
        }
    } catch (error) {
        console.error('Error loading product detail:', error);
        showNotification('Error loading product', 'error');
        setTimeout(() => {
            window.location.href = 'products.html';
        }, 2000);
    }
}

// Display product detail
function displayProductDetail(product) {
    try {
        // Update basic info
        const titleElement = document.getElementById('product-title');
        const priceElement = document.getElementById('product-price');
        const descElement = document.getElementById('product-description');
        const skuElement = document.getElementById('product-sku');
        
        if (titleElement) titleElement.textContent = product.name;
        if (priceElement) priceElement.textContent = `$${product.price.toFixed(2)}`;
        if (descElement) descElement.textContent = product.description;
        if (skuElement) skuElement.textContent = `HLS-${product.id.toString().padStart(4, '0')}`;
        
        // Update main image
        const mainImage = document.getElementById('main-image');
        if (mainImage) {
            mainImage.src = product.image;
            mainImage.alt = product.name;
        }
        
        // Update variant images
        const variantImagesContainer = document.getElementById('variant-images');
        if (variantImagesContainer && product.variants) {
            variantImagesContainer.innerHTML = product.variants.map((variant, index) => `
                <div class="col-2 col-md-3 mb-2">
                    <img src="${variant.image}" 
                         alt="${variant.color}" 
                         class="img-fluid rounded thumbnail-img ${index === 0 ? 'active' : ''}"
                         onclick="changeMainImage('${variant.image}', this)"
                         style="cursor: pointer; border: 2px solid ${index === 0 ? '#ffc107' : 'transparent'}; transition: all 0.3s ease;">
                </div>
            `).join('');
        }
        
        // Update color variants
        const colorVariantsContainer = document.getElementById('color-variants');
        if (colorVariantsContainer && product.variants) {
            colorVariantsContainer.innerHTML = product.variants.map((variant, index) => `
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="color" id="color-${index}" value="${variant.color}" ${index === 0 ? 'checked' : ''}>
                    <label class="form-check-label" for="color-${index}">${variant.color}</label>
                </div>
            `).join('');
        }
        
        // Update breadcrumb
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        const breadcrumbProduct = document.getElementById('breadcrumb-product');
        if (breadcrumbCategory) breadcrumbCategory.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;
        
        // Load related products
        loadRelatedProducts(product.id, product.category);
    } catch (error) {
        console.error('Error displaying product detail:', error);
        showNotification('Error displaying product details', 'error');
    }
}

// Change main image
function changeMainImage(imageSrc, element) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active state
    document.querySelectorAll('#variant-images img').forEach(img => {
        img.classList.remove('active');
        img.style.border = '2px solid transparent';
    });
    element.classList.add('active');
    element.style.border = '2px solid #ffc107';
}

// Load related products
function loadRelatedProducts(currentProductId, category) {
    const relatedProducts = products.filter(p => p.id !== currentProductId && p.category === category).slice(0, 3);
    const container = document.getElementById('related-products');
    
    if (container) {
        container.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
    }
}

// Add to cart from list
function addToCartFromList(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart(product);
    }
}

// Add to cart
function addToCart(product = null) {
    let productToAdd = product;
    
    if (!product) {
        // Get product from detail page
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        productToAdd = products.find(p => p.id === productId);
    }
    
    if (productToAdd) {
        const existingItem = cart.find(item => item.id === productToAdd.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                image: productToAdd.image,
                quantity: 1
            });
        }
        
        saveCart();
        updateCartCount();
        showNotification('Product added to cart!', 'success');
    }
}

// Load cart items
function loadCartItems() {
    const container = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    
    if (container) {
        if (cart.length === 0) {
            container.style.display = 'none';
            emptyCart.style.display = 'block';
        } else {
            container.style.display = 'block';
            emptyCart.style.display = 'none';
            container.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        }
        
        updateCartSummary();
    }
}

// Create cart item HTML
function createCartItemHTML(item) {
    return `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-4">
                    <h6>${item.name}</h6>
                    <p class="text-muted mb-0">$${item.price.toFixed(2)}</p>
                </div>
                <div class="col-md-3">
                    <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <input type="number" class="form-control text-center quantity-input" value="${item.quantity}" min="1" onchange="setQuantity(${item.id}, this.value)">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            loadCartItems();
        }
    }
}

// Set quantity
function setQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            loadCartItems();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCartItems();
    showNotification('Product removed from cart', 'info');
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    // Update summary elements
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Save cart to localStorage
function saveCart() {
    safeLocalStorageSet('cart', cart);
}

// Search products
function searchProducts(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return false;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        if (window.location.pathname.includes('products.html')) {
            displaySearchResults(filteredProducts, searchTerm);
        } else {
            // Redirect to products page with search
            window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    return false;
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const container = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    
    if (container) {
        if (results.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h4>No products found for "${searchTerm}"</h4>
                    <p class="text-muted">Try searching with different keywords</p>
                </div>
            `;
        } else {
            container.innerHTML = results.map(product => createProductCard(product)).join('');
        }
        
        productCount.textContent = results.length;
    }
}

// Apply filters
function applyFilters() {
    // This is a placeholder for filter functionality
    showNotification('Filters applied', 'success');
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sort-select').value;
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const container = document.getElementById('products-grid');
    if (container) {
        container.innerHTML = sortedProducts.map(product => createProductCard(product)).join('');
    }
}

// Quantity controls for product detail
function increaseQuantity() {
    const input = document.getElementById('quantity');
    if (input) {
        input.value = Math.min(parseInt(input.value) + 1, 10);
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (input) {
        input.value = Math.max(parseInt(input.value) - 1, 1);
    }
}

// Add to wishlist
function addToWishlist() {
    showNotification('Added to wishlist!', 'success');
}

// Apply coupon
function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value;
    const messageElement = document.getElementById('coupon-message');
    
    if (couponCode.toLowerCase() === 'welcome10') {
        messageElement.innerHTML = '<div class="alert alert-success">Coupon applied! 10% discount added.</div>';
        // Apply discount logic here
    } else {
        messageElement.innerHTML = '<div class="alert alert-danger">Invalid coupon code.</div>';
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
}

// Complete checkout
function completeCheckout() {
    showNotification('Order placed successfully! Thank you for your purchase.', 'success');
    cart = [];
    saveCart();
    updateCartCount();
    loadCartItems();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    if (modal) {
        modal.hide();
    }
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    showNotification('Message sent successfully! We will get back to you soon.', 'success');
    event.target.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
    notification.style.zIndex = '9999';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Size selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-btn')) {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
});

// Load more reviews
function loadMoreReviews() {
    showNotification('More reviews loaded', 'info');
}

// Handle newsletter submission
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification(`Successfully subscribed with email: ${email}`, 'success');
    event.target.reset();
}

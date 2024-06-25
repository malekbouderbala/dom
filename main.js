document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // Example data - replace with dynamic data fetching or server-side rendering
    const items = [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 15 },
        { name: 'Item 3', price: 20 }
    ];

    // Function to render items in the cart
    function renderItems() {
        itemsContainer.innerHTML = '';
        let totalPrice = 0;

        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span class="item-name">${item.name}</span>
                <div class="item-actions">
                    <button class="quantity-btn decrease">-</button>
                    <span class="item-quantity">1</span>
                    <button class="quantity-btn increase">+</button>
                    <button class="like-btn">♡</button>
                    <button class="delete-btn">Delete</button>
                </div>
                <span class="item-price">$${item.price}</span>
            `;
            itemsContainer.appendChild(itemElement);

            // Calculate total price
            totalPrice += item.price;
        });

        // Update total price display
        totalPriceElement.textContent = `$${totalPrice}`;
    }

    // Initial render
    renderItems();

    // Event delegation for dynamic elements (like-btn, delete-btn, quantity-btn)
    itemsContainer.addEventListener('click', function(event) {
        const target = event.target;
        const item = target.closest('.cart-item');

        if (!item) return;

        if (target.classList.contains('delete-btn')) {
            // Delete item
            const itemIndex = Array.from(itemsContainer.children).indexOf(item);
            items.splice(itemIndex, 1);
            renderItems();
        }

        if (target.classList.contains('like-btn')) {
            // Toggle like (change heart color)
            target.classList.toggle('active');
        }

        if (target.classList.contains('increase')) {
            // Increase quantity
            const quantityElement = item.querySelector('.item-quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            // Update total price accordingly (if needed)
        }

        if (target.classList.contains('decrease')) {
            // Decrease quantity
            const quantityElement = item.querySelector('.item-quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                // Update total price accordingly (if needed)
            }
        }
    });
});

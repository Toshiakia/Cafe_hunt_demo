document.addEventListener('DOMContentLoaded', () => {
    const orderItems = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const name = productCard.dataset.name;
            const price = parseFloat(productCard.dataset.price);
            const size = productCard.querySelector('.size-select') ? productCard.querySelector('.size-select').value : '';
            const sugar = productCard.querySelector('#sugar') ? productCard.querySelector('#sugar').value : '';
            const sauce = productCard.querySelector('.sauce-select') ? productCard.querySelector('.sauce-select').value : '';
            const quantity = parseInt(productCard.querySelector('.quantity-input').value);

            // ����������Ŀ����ӵ���������
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.textContent = `${name} - Size: ${size} - Sugar: ${sugar} - Sauce: ${sauce} - Quantity: ${quantity} - Price: $${(price * quantity).toFixed(2)}`;
            orderItems.appendChild(orderItem);

            // ���¶����ܼ�
            updateTotalPrice(price * quantity);
        });
    });

    function updateTotalPrice(amount) {
        totalPrice += amount;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});

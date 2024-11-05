document.addEventListener("DOMContentLoaded", () => {
    // Thêm sản phẩm vào giỏ hàng khi nhấn nút
    document.querySelector(".add-to-cart").addEventListener("click", async () => {
      const productId = document.querySelector("#product-id").value; // ID sản phẩm

    try {
        const response = await fetch("/productDetail/add-to-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId }),
        });
        const result = await response.json();
        if (result.message) {
            alert("Product added to cart!");
        } else {
            alert("Failed to add product to cart.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
    });
});
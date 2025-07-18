// Product images
const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop'
];

let currentQuantity = 1;
const maxStock = 15;

// Image gallery functionality
function changeImage(index) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = images[index];
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

// Quantity functionality
function increaseQuantity() {
    if (currentQuantity < maxStock) {
        currentQuantity++;
        document.getElementById('quantity').textContent = currentQuantity;
    }
}

function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity').textContent = currentQuantity;
    }
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Review form functionality
function toggleReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.classList.toggle('active');
    
    // Clear the textarea when opening
    if (reviewForm.classList.contains('active')) {
        document.getElementById('reviewText').value = '';
        document.getElementById('reviewText').focus();
    }
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value.trim();
    
    if (reviewText === '') {
        alert('Please write a review before submitting.');
        return;
    }

    // Create new review element
    const reviewsList = document.getElementById('reviewsList');
    const newReview = document.createElement('div');
    newReview.style.borderBottom = '1px solid #e5e7eb';
    newReview.style.paddingBottom = '1rem';
    newReview.style.marginBottom = '1rem';
    
    newReview.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div class="stars">
                <svg class="star filled" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="star filled" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="star filled" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="star filled" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="star filled" viewBox="0 0 20 20" style="width: 16px; height: 16px;">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            </div>
            <span style="font-weight: 500;">You</span>
            <span style="font-size: 0.875rem; color: #6b7280;">Verified Purchase</span>
        </div>
        <p style="color: #374151;">${reviewText}</p>
    `;
    
    // Add the new review to the top of the list
    reviewsList.insertBefore(newReview, reviewsList.firstChild);
    
    // Hide the review form and clear the textarea
    document.getElementById('reviewForm').classList.remove('active');
    document.getElementById('reviewText').value = '';
    
    alert('Thank you for your review!');
}

function cancelReview() {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.classList.remove('active');
    document.getElementById('reviewText').value = '';
}

// Cart functionality
function addToCart() {
    alert(`Added ${currentQuantity} item(s) to cart!`);
}

// Wishlist functionality
function toggleWishlist() {
    alert('Added to wishlist!');
}

// Share functionality
function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: 'Premium Wireless Headphones',
            text: 'Check out these amazing headphones!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Product link copied to clipboard!');
        });
    }
}
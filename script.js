// ContentHub - Static JavaScript

// Global state
let downloadingItems = new Set();
let mobileMenuOpen = false;
let currentVideoData = null;

// Anime video data
const animeVideoData = {
    'anime-1': {
        title: 'Attack on Titan - Preview',
        description: 'Experience the epic action and drama of Attack on Titan. Follow Eren and his friends as they battle against the titans threatening humanity.',
        quality: '1080p HD',
        duration: '24 min',
        episodes: '75+ Episodes',
        downloadTitle: 'Attack on Titan'
    },
    'anime-2': {
        title: 'Spirited Away - Preview',
        description: 'Join Chihiro on her magical adventure in the spirit world. A timeless Studio Ghibli masterpiece full of wonder and imagination.',
        quality: '4K Ultra HD',
        duration: '125 min',
        episodes: 'Feature Film',
        downloadTitle: 'Spirited Away'
    },
    'anime-3': {
        title: 'Demon Slayer - Preview',
        description: 'Follow Tanjiro\'s journey to become a demon slayer and save his sister. Stunning animation and intense battle sequences.',
        quality: '1080p HD',
        duration: '24 min',
        episodes: '32+ Episodes',
        downloadTitle: 'Demon Slayer'
    },
    'anime-4': {
        title: 'One Piece - Preview',
        description: 'Set sail with Monkey D. Luffy and his crew on the greatest adventure ever! The longest-running and most beloved anime series.',
        quality: '1080p HD',
        duration: '24 min',
        episodes: '1000+ Episodes',
        downloadTitle: 'One Piece'
    }
};

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenu && menuIcon) {
        if (mobileMenuOpen) {
            mobileMenu.classList.add('active');
            menuIcon.textContent = '✕';
        } else {
            mobileMenu.classList.remove('active');
            menuIcon.textContent = '☰';
        }
    }
}

// Download content function
async function downloadContent(itemId, itemTitle) {
    const buttonSelector = `[data-testid*="download"][data-testid*="${itemId}"]`;
    const button = document.querySelector(buttonSelector);
    
    if (!button || downloadingItems.has(itemId)) {
        return;
    }
    
    // Add to downloading set
    downloadingItems.add(itemId);
    
    // Update button state
    updateButtonState(button, true);
    
    try {
        // Simulate download process
        await simulateDownload();
        
        // Show success message
        showNotification(`${itemTitle} downloaded successfully!`, 'success');
        
    } catch (error) {
        // Show error message
        showNotification(`Failed to download ${itemTitle}. Please try again.`, 'error');
    } finally {
        // Remove from downloading set and reset button
        setTimeout(() => {
            downloadingItems.delete(itemId);
            updateButtonState(button, false);
        }, 2000);
    }
}

// Download font function
async function downloadFont(fontId, fontName) {
    const buttonSelector = `[data-testid="button-download-font-${fontId}"]`;
    const button = document.querySelector(buttonSelector);
    
    if (!button || downloadingItems.has(`font-${fontId}`)) {
        return;
    }
    
    // Add to downloading set
    downloadingItems.add(`font-${fontId}`);
    
    // Update button state
    updateButtonState(button, true);
    
    try {
        // Simulate download process
        await simulateDownload();
        
        // Show success message
        showNotification(`${fontName} font downloaded successfully!`, 'success');
        
    } catch (error) {
        // Show error message
        showNotification(`Failed to download ${fontName} font. Please try again.`, 'error');
    } finally {
        // Remove from downloading set and reset button
        setTimeout(() => {
            downloadingItems.delete(`font-${fontId}`);
            updateButtonState(button, false);
        }, 2000);
    }
}

// Update button state
function updateButtonState(button, isLoading) {
    if (!button) return;
    
    const btnText = button.querySelector('.btn-text');
    const btnIcon = button.querySelector('.btn-icon');
    
    if (isLoading) {
        button.disabled = true;
        if (btnIcon) btnIcon.innerHTML = '<span class="loading-spinner"></span>';
        if (btnText) btnText.textContent = 'Downloading...';
    } else {
        button.disabled = false;
        if (btnIcon) btnIcon.textContent = '⬇';
        if (btnText) btnText.textContent = 'Download';
    }
}

// Simulate download process
function simulateDownload() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

// Watch preview function
function watchPreview() {
    showNotification('Preview feature coming soon!', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        maxWidth: '400px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        fontSize: '0.875rem'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#3b82f6';
            break;
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content cards and sections
    const elementsToObserve = document.querySelectorAll('.content-card, .font-card, .section-header');
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        // ESC key closes mobile menu or video modal
        if (event.key === 'Escape') {
            const videoModal = document.getElementById('video-modal');
            if (videoModal && videoModal.classList.contains('active')) {
                closeVideoPreview();
            } else if (mobileMenuOpen) {
                toggleMobileMenu();
            }
        }
        
        // Enter key on focused buttons
        if (event.key === 'Enter' && event.target.tagName === 'BUTTON') {
            event.target.click();
        }
    });
}

// Video modal controls
function setupVideoModalControls() {
    const modal = document.getElementById('video-modal');
    
    if (modal) {
        // Close modal when clicking overlay
        modal.addEventListener('click', (event) => {
            if (event.target === modal || event.target.classList.contains('video-modal-overlay')) {
                closeVideoPreview();
            }
        });
        
        // Prevent modal from closing when clicking video content
        const modalContent = modal.querySelector('.video-modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }
    }
}

// Add loading spinner CSS if not already present
function addLoadingSpinnerCSS() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .loading-spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading spinner CSS
    addLoadingSpinnerCSS();
    
    // Setup scroll listeners
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup video modal keyboard controls
    setupVideoModalControls();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (mobileMenuOpen && !event.target.closest('.nav-container')) {
            toggleMobileMenu();
        }
    });
    
    // Add smooth scrolling to hash links
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            scrollToSection(targetId);
        }, 100);
    }
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to ContentHub! Start exploring our premium downloads.', 'info');
    }, 1000);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on desktop resize
    if (window.innerWidth >= 768 && mobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Video Preview Functions
function openVideoPreview(animeId) {
    const modal = document.getElementById('video-modal');
    const videoTitle = document.getElementById('video-title');
    const videoInfo = document.getElementById('video-info');
    const videoData = animeVideoData[animeId];
    
    if (!videoData) {
        showNotification('Video preview not available', 'error');
        return;
    }
    
    currentVideoData = videoData;
    
    // Update modal content
    videoTitle.textContent = videoData.title;
    
    // Update video info
    videoInfo.innerHTML = `
        <p class="video-description">${videoData.description}</p>
        <div class="video-specs">
            <span class="spec">Quality: ${videoData.quality}</span>
            <span class="spec">Duration: ${videoData.duration}</span>
            <span class="spec">Episodes: ${videoData.episodes}</span>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Show notification
    showNotification(`Opening ${videoData.downloadTitle} preview`, 'info');
}

function closeVideoPreview() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('preview-video');
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Pause video if playing
    if (video && !video.paused) {
        video.pause();
    }
    
    currentVideoData = null;
}

function downloadFromPreview() {
    if (currentVideoData) {
        closeVideoPreview();
        // Simulate download with a slight delay
        setTimeout(() => {
            showNotification(`Starting download of ${currentVideoData.downloadTitle}...`, 'success');
        }, 300);
    }
}

// Enhanced notification for video previews
function showVideoNotification(message, type = 'info') {
    showNotification(message, type);
}

// Export functions for global access (if needed)
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.downloadContent = downloadContent;
window.downloadFont = downloadFont;
window.watchPreview = watchPreview;
window.openVideoPreview = openVideoPreview;
window.closeVideoPreview = closeVideoPreview;
window.downloadFromPreview = downloadFromPreview;
// StreamFlix JavaScript functionality

// Sample content data (similar to what the backend provided)
const contentData = {
    trending: [
        {
            id: "trending-1",
            title: "Dark Waters",
            description: "A thrilling mystery that explores the depths of human nature.",
            imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.7,
            type: "movie",
            quality: "HD"
        },
        {
            id: "trending-2",
            title: "Neon Future",
            description: "A sci-fi masterpiece set in a dystopian future.",
            imageUrl: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.2,
            type: "movie",
            quality: "4K"
        },
        {
            id: "trending-3",
            title: "Midnight Terror",
            description: "A haunting horror experience that will keep you on edge.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.4,
            type: "movie",
            quality: "HD"
        },
        {
            id: "trending-4",
            title: "Mountain Quest",
            description: "An epic adventure through breathtaking landscapes.",
            imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.9,
            type: "movie",
            quality: "4K"
        },
        {
            id: "trending-5",
            title: "Shadow Detective",
            description: "A gripping mystery with noir elements.",
            imageUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.6,
            type: "movie",
            quality: "HD"
        },
        {
            id: "trending-6",
            title: "Love Beyond",
            description: "A romantic tale that transcends time and space.",
            imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.1,
            type: "movie",
            quality: "HD"
        }
    ],
    topRated: [
        {
            id: "top-rated-1",
            title: "Breaking Point",
            description: "A crime drama that pushes characters to their limits.",
            imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 9.5,
            type: "series",
            quality: "HD",
            seasons: 5
        },
        {
            id: "top-rated-2",
            title: "Future Worlds",
            description: "Explore different futures in this sci-fi anthology.",
            imageUrl: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.2,
            type: "series",
            quality: "4K",
            seasons: 3
        },
        {
            id: "top-rated-3",
            title: "Royal Crown",
            description: "A period drama about power and family.",
            imageUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 9.1,
            type: "series",
            quality: "HD",
            seasons: 6
        },
        {
            id: "top-rated-4",
            title: "Mind Games",
            description: "Psychological thriller with twists and turns.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 9.3,
            type: "series",
            quality: "4K",
            seasons: 2
        },
        {
            id: "top-rated-5",
            title: "Wild Earth",
            description: "Nature documentary showcasing our planet's beauty.",
            imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.7,
            type: "documentary",
            quality: "4K",
            seasons: 1
        }
    ],
    action: [
        {
            id: "action-1",
            title: "Thunder Strike",
            description: "Superhero action with incredible special effects.",
            imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.5,
            type: "movie",
            quality: "4K"
        },
        {
            id: "action-2",
            title: "Speed Demon",
            description: "High-octane racing and chase sequences.",
            imageUrl: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.2,
            type: "movie",
            quality: "HD"
        },
        {
            id: "action-3",
            title: "Battle Zone",
            description: "Military action with intense combat scenes.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.7,
            type: "movie",
            quality: "4K"
        },
        {
            id: "action-4",
            title: "Agent Shadow",
            description: "Spy thriller with international intrigue.",
            imageUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.9,
            type: "movie",
            quality: "HD"
        },
        {
            id: "action-5",
            title: "Dragon Fist",
            description: "Martial arts action with stunning choreography.",
            imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.4,
            type: "movie",
            quality: "4K"
        }
    ],
    anime: [
        {
            id: "anime-1",
            title: "Spirit Warriors",
            description: "Epic anime about warriors protecting the spirit world.",
            imageUrl: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.4,
            type: "anime",
            quality: "4K",
            episodes: 24
        },
        {
            id: "anime-2",
            title: "Mech Genesis",
            description: "Mecha anime with giant robots and space battles.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 9.1,
            type: "anime",
            quality: "HD",
            episodes: 26
        },
        {
            id: "anime-3",
            title: "Magic Academy",
            description: "Fantasy anime about young mages learning their craft.",
            imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.9,
            type: "anime",
            quality: "4K",
            episodes: 12
        },
        {
            id: "anime-4",
            title: "School Days",
            description: "Slice of life anime about high school friendship.",
            imageUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.7,
            type: "anime",
            quality: "HD",
            episodes: 13
        },
        {
            id: "anime-5",
            title: "Blade Master",
            description: "Action anime featuring sword fighting techniques.",
            imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.2,
            type: "anime",
            quality: "4K",
            episodes: 25
        }
    ],
    drama: [
        {
            id: "drama-1",
            title: "The Last Letter",
            description: "Emotional drama about family and forgiveness.",
            imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.0,
            type: "movie",
            quality: "4K"
        },
        {
            id: "drama-2",
            title: "Family Ties",
            description: "Multi-generational family drama spanning decades.",
            imageUrl: "https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.8,
            type: "movie",
            quality: "HD"
        },
        {
            id: "drama-3",
            title: "War Stories",
            description: "Historical drama about courage in wartime.",
            imageUrl: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 9.1,
            type: "movie",
            quality: "4K"
        },
        {
            id: "drama-4",
            title: "Growing Up",
            description: "Coming of age story about self-discovery.",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2023,
            rating: 8.6,
            type: "movie",
            quality: "HD"
        },
        {
            id: "drama-5",
            title: "True Story",
            description: "Biographical drama based on real events.",
            imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
            year: 2024,
            rating: 8.9,
            type: "movie",
            quality: "4K"
        }
    ]
};

// DOM Elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('section[id]');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateContent();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    // Handle navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Handle mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Handle navigation clicks
    [...navLinks, ...mobileLinks].forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            navigateToSection(targetId);
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            const mobileIcon = mobileMenuToggle.querySelector('i');
            mobileIcon.classList.replace('fa-times', 'fa-bars');
        });
    });
}

// Navigate to specific section
function navigateToSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // Scroll to top if not home section
        if (sectionId !== 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Update mobile nav links
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Populate content carousels
function populateContent() {
    populateCarousel('trending-carousel', contentData.trending);
    populateCarousel('top-rated-carousel', contentData.topRated);
    populateCarousel('action-carousel', contentData.action);
    populateCarousel('anime-carousel', contentData.anime);
    populateCarousel('drama-carousel', contentData.drama);
}

// Create content cards for carousel
function populateCarousel(carouselId, content) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    carousel.innerHTML = '';

    content.forEach(item => {
        const card = createContentCard(item);
        carousel.appendChild(card);
    });
}

// Create individual content card
function createContentCard(content) {
    const card = document.createElement('div');
    card.className = 'content-card';

    const contentInfo = getContentInfo(content);
    
    card.innerHTML = `
        <img src="${content.imageUrl}" alt="${content.title}" loading="lazy">
        <div class="card-overlay">
            <div class="card-title">${content.title}</div>
            <div class="card-info">
                <span class="quality-badge">${content.quality}</span>
                <span>${contentInfo}</span>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${content.rating}</span>
                </div>
            </div>
            <div class="card-description">${content.description}</div>
        </div>
    `;

    // Add click event for card interaction
    card.addEventListener('click', function() {
        showContentModal(content);
    });

    return card;
}

// Get content information (seasons, episodes, or year)
function getContentInfo(content) {
    if (content.type === 'series' || content.type === 'anime') {
        if (content.seasons) {
            return `${content.seasons} Season${content.seasons > 1 ? 's' : ''}`;
        }
        if (content.episodes) {
            return `${content.episodes} Episodes`;
        }
    }
    return content.year.toString();
}

// Show content modal (placeholder for future functionality)
function showContentModal(content) {
    alert(`You selected: ${content.title}\n\n${content.description}\n\nRating: ${content.rating}/10`);
}

// Initialize scroll effects and animations
function initializeScrollEffects() {
    // Smooth scrolling for carousel navigation
    const carousels = document.querySelectorAll('.content-carousel');
    
    carousels.forEach(carousel => {
        // Add scroll buttons for desktop
        const row = carousel.closest('.content-row');
        if (row && window.innerWidth > 768) {
            addScrollButtons(carousel, row);
        }

        // Enable horizontal scrolling with mouse wheel
        carousel.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content rows for animation
    document.querySelectorAll('.content-row').forEach(row => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(30px)';
        row.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(row);
    });
}

// Add scroll buttons to carousel
function addScrollButtons(carousel, row) {
    const leftButton = document.createElement('button');
    leftButton.className = 'carousel-scroll-btn carousel-scroll-left';
    leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftButton.style.cssText = `
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.7);
        border: none;
        color: white;
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 18px;
    `;

    const rightButton = document.createElement('button');
    rightButton.className = 'carousel-scroll-btn carousel-scroll-right';
    rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightButton.style.cssText = leftButton.style.cssText.replace('left: 10px', 'right: 10px');

    row.style.position = 'relative';
    row.appendChild(leftButton);
    row.appendChild(rightButton);

    // Show buttons on hover
    row.addEventListener('mouseenter', function() {
        leftButton.style.opacity = '1';
        rightButton.style.opacity = '1';
    });

    row.addEventListener('mouseleave', function() {
        leftButton.style.opacity = '0';
        rightButton.style.opacity = '0';
    });

    // Button functionality
    leftButton.addEventListener('click', function() {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', function() {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    // Reinitialize scroll effects if needed
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.carousel-scroll-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.carousel-scroll-btn').forEach(btn => {
            btn.style.display = 'block';
        });
    }
});

// Initialize with home section visible
document.addEventListener('DOMContentLoaded', function() {
    navigateToSection('home');
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x600/333333/ffffff?text=No+Image';
        });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click animations
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn, .content-card, .nav-link')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
});
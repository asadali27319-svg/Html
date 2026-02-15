// Course Data for 2026
const courses = [
    // Programming Courses
    {
        id: 1,
        title: "Complete Python Mastery 2026",
        category: "programming",
        description: "Master Python programming from basics to advanced topics including AI and machine learning.",
        duration: "45 hours",
        lessons: "120 lessons",
        icon: "fab fa-python"
    },
    {
        id: 2,
        title: "JavaScript Full Stack Development",
        category: "programming",
        description: "Complete web development with JavaScript, Node.js, React, and modern frameworks.",
        duration: "60 hours",
        lessons: "150 lessons",
        icon: "fab fa-js"
    },
    {
        id: 3,
        title: "Java Programming Complete Guide",
        category: "programming",
        description: "Learn Java from scratch to advanced concepts with real-world projects.",
        duration: "50 hours",
        lessons: "130 lessons",
        icon: "fab fa-java"
    },
    {
        id: 4,
        title: "C++ Programming Masterclass",
        category: "programming",
        description: "Master C++ programming with data structures, algorithms, and system programming.",
        duration: "55 hours",
        lessons: "140 lessons",
        icon: "fas fa-code"
    },
    {
        id: 5,
        title: "Rust Programming Complete Course",
        category: "programming",
        description: "Learn Rust programming language for system-level development and WebAssembly.",
        duration: "40 hours",
        lessons: "100 lessons",
        icon: "fas fa-cogs"
    },
    {
        id: 6,
        title: "Go (Golang) Development Bootcamp",
        category: "programming",
        description: "Build scalable applications with Go programming language.",
        duration: "35 hours",
        lessons: "90 lessons",
        icon: "fas fa-server"
    },
    {
        id: 7,
        title: "Swift iOS App Development",
        category: "programming",
        description: "Create beautiful iOS applications with Swift and SwiftUI.",
        duration: "48 hours",
        lessons: "125 lessons",
        icon: "fab fa-swift"
    },
    {
        id: 8,
        title: "Kotlin Android Development",
        category: "programming",
        description: "Build modern Android apps with Kotlin and Jetpack Compose.",
        duration: "42 hours",
        lessons: "110 lessons",
        icon: "fab fa-android"
    },
    
    // Design Courses
    {
        id: 9,
        title: "UI/UX Design Masterclass",
        category: "design",
        description: "Complete UI/UX design from wireframing to prototyping with Figma.",
        duration: "38 hours",
        lessons: "95 lessons",
        icon: "fas fa-palette"
    },
    {
        id: 10,
        title: "Graphic Design Professional",
        category: "design",
        description: "Master graphic design principles with Adobe Creative Suite.",
        duration: "44 hours",
        lessons: "115 lessons",
        icon: "fas fa-pen-nib"
    },
    {
        id: 11,
        title: "Motion Graphics & Animation",
        category: "design",
        description: "Create stunning animations and motion graphics with After Effects.",
        duration: "36 hours",
        lessons: "90 lessons",
        icon: "fas fa-film"
    },
    {
        id: 12,
        title: "3D Modeling & Animation",
        category: "design",
        description: "Learn 3D modeling with Blender and create realistic animations.",
        duration: "52 hours",
        lessons: "135 lessons",
        icon: "fas fa-cube"
    },
    {
        id: 13,
        title: "Logo Design Workshop",
        category: "design",
        description: "Design professional logos from concept to final delivery.",
        duration: "25 hours",
        lessons: "65 lessons",
        icon: "fas fa-vector-square"
    },
    {
        id: 14,
        title: "Web Design Fundamentals",
        category: "design",
        description: "Learn HTML, CSS, and design principles for modern websites.",
        duration: "30 hours",
        lessons: "80 lessons",
        icon: "fas fa-laptop-code"
    },
    
    // Business Courses
    {
        id: 15,
        title: "Business Administration MBA",
        category: "business",
        description: "Complete business management course covering all essential topics.",
        duration: "65 hours",
        lessons: "160 lessons",
        icon: "fas fa-briefcase"
    },
    {
        id: 16,
        title: "Financial Analysis & Planning",
        category: "business",
        description: "Master financial analysis, budgeting, and strategic planning.",
        duration: "40 hours",
        lessons: "100 lessons",
        icon: "fas fa-chart-line"
    },
    {
        id: 17,
        title: "Project Management Professional",
        category: "business",
        description: "Prepare for PMP certification with practical project management skills.",
        duration: "45 hours",
        lessons: "120 lessons",
        icon: "fas fa-tasks"
    },
    {
        id: 18,
        title: "Entrepreneurship Fundamentals",
        category: "business",
        description: "Learn how to start and grow your own business successfully.",
        duration: "35 hours",
        lessons: "85 lessons",
        icon: "fas fa-lightbulb"
    },
    {
        id: 19,
        title: "Human Resources Management",
        category: "business",
        description: "Complete HR course covering recruitment, training, and employee relations.",
        duration: "38 hours",
        lessons: "95 lessons",
        icon: "fas fa-users"
    },
    {
        id: 20,
        title: "Supply Chain Management",
        category: "business",
        description: "Learn logistics, procurement, and supply chain optimization.",
        duration: "42 hours",
        lessons: "105 lessons",
        icon: "fas fa-truck"
    },
    
    // Marketing Courses
    {
        id: 21,
        title: "Digital Marketing Complete Course",
        category: "marketing",
        description: "Master SEO, SEM, social media marketing, and email marketing.",
        duration: "48 hours",
        lessons: "125 lessons",
        icon: "fas fa-bullhorn"
    },
    {
        id: 22,
        title: "Social Media Marketing Mastery",
        category: "marketing",
        description: "Build your brand on Instagram, Facebook, Twitter, LinkedIn, and TikTok.",
        duration: "32 hours",
        lessons: "80 lessons",
        icon: "fab fa-instagram"
    },
    {
        id: 23,
        title: "SEO & Content Marketing",
        category: "marketing",
        description: "Learn to rank websites and create compelling content strategies.",
        duration: "36 hours",
        lessons: "90 lessons",
        icon: "fas fa-search"
    },
    {
        id: 24,
        title: "Email Marketing Automation",
        category: "marketing",
        description: "Create effective email campaigns and marketing automation workflows.",
        duration: "28 hours",
        lessons: "70 lessons",
        icon: "fas fa-envelope"
    },
    {
        id: 25,
        title: "Google Ads & PPC Advertising",
        category: "marketing",
        description: "Master Google Ads and pay-per-click advertising strategies.",
        duration: "34 hours",
        lessons: "85 lessons",
        icon: "fab fa-google"
    },
    {
        id: 26,
        title: "Brand Strategy & Positioning",
        category: "marketing",
        description: "Build powerful brands with effective positioning and messaging.",
        duration: "30 hours",
        lessons: "75 lessons",
        icon: "fas fa-flag"
    },
    
    // Data Science Courses
    {
        id: 27,
        title: "Data Science with Python",
        category: "data-science",
        description: "Complete data science course covering Python, Pandas, NumPy, and visualization.",
        duration: "55 hours",
        lessons: "145 lessons",
        icon: "fas fa-database"
    },
    {
        id: 28,
        title: "Machine Learning & AI",
        category: "data-science",
        description: "Master machine learning algorithms and artificial intelligence concepts.",
        duration: "60 hours",
        lessons: "155 lessons",
        icon: "fas fa-brain"
    },
    {
        id: 29,
        title: "Deep Learning & Neural Networks",
        category: "data-science",
        description: "Build deep learning models with TensorFlow and PyTorch.",
        duration: "50 hours",
        lessons: "130 lessons",
        icon: "fas fa-network-wired"
    },
    {
        id: 30,
        title: "Data Analytics & Visualization",
        category: "data-science",
        description: "Learn data analysis with Tableau, Power BI, and visualization techniques.",
        duration: "42 hours",
        lessons: "110 lessons",
        icon: "fas fa-chart-bar"
    },
    {
        id: 31,
        title: "Big Data Technologies",
        category: "data-science",
        description: "Master Hadoop, Spark, and other big data frameworks.",
        duration: "46 hours",
        lessons: "120 lessons",
        icon: "fas fa-server"
    },
    {
        id: 32,
        title: "Natural Language Processing",
        category: "data-science",
        description: "Build NLP applications with Python and transformer models.",
        duration: "44 hours",
        lessons: "115 lessons",
        icon: "fas fa-comments"
    },
    {
        id: 33,
        title: "Business Intelligence Analytics",
        category: "data-science",
        description: "Learn BI tools and techniques for business data analysis.",
        duration: "38 hours",
        lessons: "95 lessons",
        icon: "fas fa-chart-pie"
    },
    {
        id: 34,
        title: "Statistics & Probability",
        category: "data-science",
        description: "Master statistical concepts and probability theory for data science.",
        duration: "36 hours",
        lessons: "90 lessons",
        icon: "fas fa-calculator"
    },
    
    // Additional Programming Courses
    {
        id: 35,
        title: "Web3 & Blockchain Development",
        category: "programming",
        description: "Build decentralized applications and smart contracts.",
        duration: "48 hours",
        lessons: "125 lessons",
        icon: "fas fa-link"
    },
    {
        id: 36,
        title: "DevOps & Cloud Computing",
        category: "programming",
        description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines.",
        duration: "52 hours",
        lessons: "135 lessons",
        icon: "fas fa-cloud"
    },
    {
        id: 37,
        title: "Cybersecurity Fundamentals",
        category: "programming",
        description: "Learn ethical hacking, network security, and cyber defense.",
        duration: "46 hours",
        lessons: "120 lessons",
        icon: "fas fa-shield-alt"
    },
    {
        id: 38,
        title: "React Native Mobile Development",
        category: "programming",
        description: "Build cross-platform mobile apps with React Native.",
        duration: "40 hours",
        lessons: "105 lessons",
        icon: "fab fa-react"
    },
    {
        id: 39,
        title: "Vue.js Complete Guide",
        category: "programming",
        description: "Master Vue.js framework for building modern web applications.",
        duration: "35 hours",
        lessons: "90 lessons",
        icon: "fab fa-vuejs"
    },
    {
        id: 40,
        title: "Angular Enterprise Development",
        category: "programming",
        description: "Build enterprise applications with Angular framework.",
        duration: "42 hours",
        lessons: "110 lessons",
        icon: "fab fa-angular"
    },
    
    // More Design Courses
    {
        id: 41,
        title: "Interior Design Fundamentals",
        category: "design",
        description: "Learn interior design principles and space planning.",
        duration: "38 hours",
        lessons: "95 lessons",
        icon: "fas fa-home"
    },
    {
        id: 42,
        title: "Fashion Design Essentials",
        category: "design",
        description: "Master fashion design from sketching to garment construction.",
        duration: "44 hours",
        lessons: "115 lessons",
        icon: "fas fa-tshirt"
    },
    {
        id: 43,
        title: "Video Editing Pro",
        category: "design",
        description: "Professional video editing with Premiere Pro and DaVinci Resolve.",
        duration: "40 hours",
        lessons: "105 lessons",
        icon: "fas fa-video"
    },
    {
        id: 44,
        title: "Photography Masterclass",
        category: "design",
        description: "Learn professional photography techniques and post-processing.",
        duration: "36 hours",
        lessons: "90 lessons",
        icon: "fas fa-camera"
    },
    {
        id: 45,
        title: "UX Research Methods",
        category: "design",
        description: "Conduct user research and create user personas and journey maps.",
        duration: "30 hours",
        lessons: "75 lessons",
        icon: "fas fa-user-research"
    },
    
    // More Business Courses
    {
        id: 46,
        title: "Leadership & Management",
        category: "business",
        description: "Develop leadership skills and effective team management.",
        duration: "34 hours",
        lessons: "85 lessons",
        icon: "fas fa-user-tie"
    },
    {
        id: 47,
        title: "Risk Management",
        category: "business",
        description: "Learn to identify, assess, and mitigate business risks.",
        duration: "32 hours",
        lessons: "80 lessons",
        icon: "fas fa-exclamation-triangle"
    },
    {
        id: 48,
        title: "International Business",
        category: "business",
        description: "Understand global business operations and cross-cultural management.",
        duration: "36 hours",
        lessons: "90 lessons",
        icon: "fas fa-globe"
    },
    {
        id: 49,
        title: "Corporate Finance",
        category: "business",
        description: "Master corporate finance, investments, and portfolio management.",
        duration: "42 hours",
        lessons: "110 lessons",
        icon: "fas fa-money-bill-wave"
    },
    {
        id: 50,
        title: "Sales & Negotiation",
        category: "business",
        description: "Become an expert salesperson with proven negotiation techniques.",
        duration: "28 hours",
        lessons: "70 lessons",
        icon: "fas fa-handshake"
    }
];

// Password Configuration
const CORRECT_PASSWORD = "Sohail782767@#a";

// DOM Elements
const coursesGrid = document.getElementById('coursesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const passwordOverlay = document.getElementById('passwordOverlay');
const mainContent = document.getElementById('mainContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderCourses(courses);
    setupEventListeners();
});

// Render courses to the grid
function renderCourses(coursesToRender) {
    coursesGrid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        coursesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No courses found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    coursesToRender.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.style.animationDelay = `${index * 0.1}s`;
        
        courseCard.innerHTML = `
            <div class="course-image">
                <i class="${course.icon}"></i>
                <span class="course-category">${course.category.replace('-', ' ')}</span>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-book"></i> ${course.lessons}</span>
                </div>
                <div class="course-actions">
                    <button class="btn" onclick="enrollCourse(${course.id})">Enroll Now</button>
                    <button class="btn btn-secondary" onclick="downloadPDF(${course.id})">
                        <i class="fas fa-download"></i> PDF
                    </button>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderCourses(filteredCourses);
}

// Filter by category
function handleFilter(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || course.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderCourses(filteredCourses);
}

// Enroll in a course
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        showNotification(`Successfully enrolled in ${course.title}!`, 'success');
    }
}

// Download PDF
function downloadPDF(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        showNotification(`Downloading PDF for ${course.title}...`, 'success');
        // Simulate PDF download
        setTimeout(() => {
            showNotification('PDF downloaded successfully!', 'success');
        }, 1500);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Mobile menu toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

// Setup event listeners
function setupEventListeners() {
    // Search button click
    searchBtn.addEventListener('click', handleSearch);
    
    // Search input enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Search input real-time filtering
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => handleFilter(e.target.dataset.category));
    });
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
}

// Make functions globally available for onclick handlers
window.enrollCourse = enrollCourse;
window.downloadPDF = downloadPDF;

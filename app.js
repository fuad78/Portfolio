document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');
    const blogContainer = document.querySelector('.all-blog-posts');

    if (hamburger && mobile_menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    }

    if (header) {
        document.addEventListener('scroll', () => {
            var scroll_position = window.scrollY;
            header.style.backgroundColor = scroll_position > 250 ? '#29323c' : 'transparent';
        });
    }

    if (menu_item && mobile_menu) {
        menu_item.forEach((item) => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobile_menu.classList.toggle('active');
            });
        });
    }

    if (blogContainer) {
        const blogPosts = [
            {
                title: "Troubleshooting Common Hardware Issues: A Beginner's Guide",
                author: "Mike Rodriguez",
                description: "Hardware issues can be daunting for beginners. This guide covers common hardware problems and provides step-by-step solutions to help you troubleshoot and fix these issues efficiently....",
                link: "https://www.pluralsight.com/blog/tutorials/troubleshooting-hardware"
            },
            {
                title: "Top 10 Cybersecurity Practices for Small Businesses",
                author: "KM FUAD HASAN",
                description: "Learn essential cybersecurity tips to protect your small business from potential threats.",
                link: "https://www.fortinet.com/resources/cyberglossary/10-cybersecurity-tips-small-business"
            }
        ];

        blogPosts.forEach(post => {
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');

            blogPost.innerHTML = `
                <div class="blog-info">
                    <h1>${post.title}</h1>
                    <h2>${post.author}</h2>
                    <p>${post.description}</p>
                    <a href="${post.link}" class="read-more" target="_blank">Read More</a>
                </div>
            `;

            blogContainer.appendChild(blogPost);
        });
    } else {
        console.warn("Blog container element '.all-blog-posts' not found.");
    }
});

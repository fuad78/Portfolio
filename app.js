
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const form = document.querySelector('#contact-form');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// end section
document.addEventListener('DOMContentLoaded', () => {
	const blogContainer = document.querySelector('.all-blog-posts');
  
	// Example blog posts data
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
		description: "Hardware issues can be daunting for beginners. This guide covers common hardware problems and provides step-by-step solutions to help you troubleshoot and fix these issues efficiently....",
		link: "https://www.fortinet.com/resources/cyberglossary/10-cybersecurity-tips-small-business"
	  }
	  // Add more blog posts here
	];
  
	blogPosts.forEach(post => {
	  const blogPost = document.createElement('div');
	  blogPost.classList.add('blog-post');
  
	  blogPost.innerHTML = `
		<div class="blog-info">
		  <h1>${post.title}</h1>
		  <h2>${post.author}</h2>
		  <p>${post.description}</p>
		  <a href="${post.link}" class="read-more">Read More</a>
		</div>
	  `;
  
	  blogContainer.appendChild(blogPost);
	});
  });
  


function filterPosts(country) {
  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {
    if (country === 'all' || post.dataset.country === country) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

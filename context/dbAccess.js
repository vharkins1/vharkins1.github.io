const fetchLikes = async (pageId) => {
  try {
    const response = await fetch(`https://your-api-endpoint.com/get-likes?pageId=${pageId}`);
    const data = await response.json();
    console.log('Likes:', data.likes);
    // Update UI with the number of likes
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
};

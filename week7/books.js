
export async function fetchBooks() {
  try {
    const response = await fetch('books.json'); // no './'
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching books:', err);
    return [];
  }
}

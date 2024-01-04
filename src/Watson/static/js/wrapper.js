const container = document.getElementById('scroll-container');
const contentWrapper = document.getElementById('dataframe-container');
const itemHeight = 20; // Height of each item
const buffer = 5; // Number of items to render outside the viewport

function renderItems(scrollTop) {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
    const endIndex = Math.min(data.length, startIndex + buffer + Math.ceil(container.clientHeight / itemHeight));

    // Adjust the top padding to create the illusion of scrolling
    contentWrapper.style.paddingTop = `${startIndex * itemHeight}px`;

    // Render the visible items
    contentWrapper.innerHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
        const item = document.createElement('div');
        item.style.height = `${itemHeight}px`;
        item.textContent = `Item ${data[i]}`; // Replace with actual data
        contentWrapper.appendChild(item);
    }
}

container.addEventListener('scroll', () => {
    renderItems(container.scrollTop);
});

renderItems(0); // Initial render

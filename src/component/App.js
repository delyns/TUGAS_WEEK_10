import React, { useState } from "react";
// Try importing without the .js extension
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  const [showAll, setShowAll] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggleView() {
    setShowAll(!showAll);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  // Filter emojis based on search term
  const filteredEmojis = emojipedia.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show only favorites (for demonstration, we'll consider emojis with IDs 1, 3, 5 as favorites)
  const favoriteEmojis = emojipedia.filter((emoji) =>
    [1, 3, 5].includes(emoji.id)
  );

  // Decide which emoji list to display
  const displayedEmojis = showAll ? filteredEmojis : favoriteEmojis;

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search emojis..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={handleToggleView} className="toggle-button">
          {showAll ? "Show Favorites" : "Show All"}
        </button>
      </div>

      <dl className="dictionary">
        {displayedEmojis.length > 0 ? (
          displayedEmojis.map(createEntry)
        ) : (
          <p className="no-results">
            No emojis found. Try a different search term.
          </p>
        )}
      </dl>
    </div>
  );
}

export default App;

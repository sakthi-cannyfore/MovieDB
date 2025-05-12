import React, { useState, useEffect } from 'react';

const PersonSearch = () => {
  const [searchQuery, setSearchQuery] = useState('Tom Hanks'); // Default search query
  const [people, setPeople] = useState<any[]>([]); // Store people data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const apiKey = '0c2efce2a23fcafc5658862d35fc6291'; // TMDb API key

  useEffect(() => {
    const fetchPersonData = async () => {
      setLoading(true); 

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchQuery}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPeople(data.results); // Set people data
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchPersonData();
  }, [searchQuery]); // Re-run if searchQuery changes

  return (
    <div className="container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a person..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        className="search-input"
      />

      {/* Loader */}
      {loading && <div>Loading...</div>}

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Display people results */}
      {!loading && !error && (
        <div className="person-list">
          {people.length === 0 ? (
            <div>No results found</div>
          ) : (
            people.map((person) => (
              <div key={person.id} className="person-card">
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                      : 'https://via.placeholder.com/200'
                  }
                  alt={person.name}
                  className="person-image"
                />
                <h3>{person.name}</h3>
                <p>{person.known_for_department}</p>
                <p>{person.known_for ? person.known_for[0].title : 'N/A'}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PersonSearch;

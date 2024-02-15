import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

/**
 * Function component for a multi-select tag input.
 *
 * @param {array} selectedTags - The array of currently selected tags.
 * @param {function} onChange - The function to be called when the selected tags change.
 * @return {JSX.Element} The rendered multi-select tag input component.
 */

const MultiSelectTag = ({ selectedTags, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    /**
     * Handles the input change event.
     *
     * @param {event} event - the input change event
     * @return {void} 
     */
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    /**
     * Handles key down event for input.
     *
     * @param {Event} event - the key down event
     */
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue) {
          if (selectedTags.length < 3) {
            const newTags = [...selectedTags, inputValue];
            onChange(newTags);
            setInputValue('');
          } 
        }
      };
  
    /**
     * Function to handle the removal of a tag.
     *
     * @param {type} tagToRemove - the tag to be removed
     * @return {type} undefined
     */
    const handleTagRemove = (tagToRemove) => {
      const newTags = selectedTags.filter(tag => tag !== tagToRemove);
      onChange(newTags);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
      }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={selectedTags.length >= 3 ? 'Max tags reached.' : 'Type and press Enter to add tags (Up to 3)'}
        disabled={selectedTags.length >= 3}
        onKeyPress={handleKeyPress}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
        {selectedTags.map((tag, index) => (
            <div 
                key={index} 
                className="tag-fix" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.border = '1px solid #f08e80'} 
                onMouseLeave={e => e.currentTarget.style.border = '1px solid #ccc'}
            >
            <span>{tag}</span>
            <IoClose onClick={() => handleTagRemove(tag)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectTag;

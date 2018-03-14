import React from 'react'

export default function Note({title, date, tags, text, onEdit = undefined, onRemove = undefined}) {
  const makeTags = tags => tags.reduce((s, tag) => s + '#' + tag, '');
  const pad = s => new String(s).padStart(2, '0'); 
  const formatDate = date =>
    pad(date.getDate()) + "." + 
    pad(date.getMonth() + 1) + "." + 
    pad(date.getFullYear() % 100);

  return (
    <div className="note-small">
      <div className="note-header">
        <h3>{title}</h3>
        <button className="button">
          <i className="fas fa-pencil-alt" onClick={onEdit}/>
        </button>
        <button className="button" onClick={onRemove}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
      <div className="fade">
        <p>{text}</p>
      </div>
      <div className="note-info-bar">
        <h4>{formatDate(date)}</h4>
        <h4>{makeTags(tags)}</h4>
      </div>
    </div>
  );
}

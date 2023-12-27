function SortBy() {
  return (
    <div className="sort">
      Afficher par :
      <select name="sort" id="sort">
        <option value="popularity">⭐ Popularité </option>
        <option value="bump">🚀 Dernier bump </option>
        <option value="members">📈 Nombre de membres </option>
        <option value="online">🔥Membres en ligne </option>
        <option value="random">🎲 Au hasard </option>
      </select>
    </div>
  );
}

export default SortBy;

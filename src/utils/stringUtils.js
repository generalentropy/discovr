export function serverNameCleaner(server) {
  const servername = server.trim();
  const MAX_LENGTH = 22;

  if (server.length > MAX_LENGTH) {
    let cleaned = server.substring(0, MAX_LENGTH);
    // Delete trailing space if necessary
    const output = cleaned.replace(/\s+$/, "");
    return output + "...";
  }

  return servername;
}

export function descriptionCleaner(description) {
  const serverDescription = description.trim();
  const MAX_LENGTH = 150;

  if (serverDescription.length > MAX_LENGTH) {
    let cleaned = description.substring(0, MAX_LENGTH);
    // Delete trailing space if necessary
    const output = cleaned.replace(/\s+$/, "");
    return output + "...";
  }

  return serverDescription;
}

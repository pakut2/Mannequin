function formatDate(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleString().slice(0, -1);
}

export default formatDate;

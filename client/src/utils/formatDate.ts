function formatDate(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleString();
}

export default formatDate;

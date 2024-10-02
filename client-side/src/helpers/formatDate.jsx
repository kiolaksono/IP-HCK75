function formatDate(value) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    return new Date(value).toLocaleDateString("id-ID",options)
}

export default formatDate
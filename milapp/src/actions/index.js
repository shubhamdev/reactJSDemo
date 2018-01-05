export function addCampaigsData(campaigns) {
  return {
    type: 'CAMPAIGS_DATA',
    payload: campaigns
  }
}

export function searchCampaigsData(search) {
  return {
    type: 'SEARCH_CAMPAIGS_DATA',
    payload: search
  }
}


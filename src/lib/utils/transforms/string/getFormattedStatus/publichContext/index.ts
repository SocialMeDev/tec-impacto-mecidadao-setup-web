function getPublishContextValues() {
  return {
    ACTIVE: {
      text: 'Publicado',
      type: 'success',
    },
    INACTIVE: {
      text: 'Despublicado',
      type: 'danger',
    },
  }
}

export default getPublishContextValues()

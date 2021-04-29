import track from '~/apollo/queries/track.gql'
export const state = () => ({
  tacks: ['test'],
  tracks: [],
})

export const mutations = {
  set_user: function (state, user) {
    state.tacks = 2
  },
  set_tracks: function (state, payload) {
    state.tracks = payload
  },
}

export const actions = {
  setActions({ commit }) {
    commit('set_user', '2')
  },
  setTracks({ commit }, { error }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve, reject) => {
      clientApollo
        .query({
          query: track,
          variables: {},
        })
        .then((resp) => {
          commit('set_tracks', resp.data.tracks)
          resolve(resp)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
}

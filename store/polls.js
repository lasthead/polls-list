export const state = () => ({
  conditions: [
    {
      name: 'Условие 1',
      id: 0,
      selectedOption: 0,
      options: {
        0: {
          name: 'Возраст респондента',
          ageFrom: 0,
          ageTo: 0
        },
        1: {
          name: 'Тип карты лояльности',
          selectTypes: {
            0: 'Gold',
            1: 'Bronze',
            2: 'Silver'
          }
        },
        2: {
          name: 'Статус карты лояльности',
          selectTypes: {
            0: 'Не активна',
            1: 'Активна'
          }
        }
      }
    },
    {
      name: 'Условие 2',
      id: 1,
      selectedOption: 1,
      options: {
        0: {
          name: 'Возраст респондента',
          ageFrom: 0,
          ageTo: 0
        },
        1: {
          name: 'Тип карты лояльности',
          selectTypes: {
            0: 'Gold',
            1: 'Bronze',
            2: 'Silver'
          }
        },
        2: {
          name: 'Статус карты лояльности',
          selectTypes: {
            0: 'Не активна',
            1: 'Активна'
          }
        }
      }
    },
    {
      name: 'Условие 3',
      id: 2,
      selectedOption: 2,
      options: {
        0: {
          name: 'Возраст респондента',
          ageFrom: 0,
          ageTo: 0
        },
        1: {
          name: 'Тип карты лояльности',
          selectTypes: {
            0: 'Gold',
            1: 'Bronze',
            2: 'Silver'
          }
        },
        2: {
          name: 'Статус карты лояльности',
          selectTypes: {
            0: 'Не активна',
            1: 'Активна'
          }
        }
      }
    }
  ]
})

export const getters = {
  getConditions: (state) => state.conditions
}

export const mutations = {
  REMOVE_CONDITION_BY_ID(state, id) {
    state.conditions = state.conditions.filter((obj) => obj.id !== id)
  },
  SET_ACTIVE_OPTION(state, { optionId, conditionId }) {
    state.conditions.find(
      (o) => o.id === conditionId
    ).selectedOption = parseInt(optionId)
  },
  ADD_NEW_CONDITION(state) {
    const conditionClone = Object.assign(
      {},
      state.conditions[state.conditions.length - 1]
    )
    const cId = ++conditionClone.id
    conditionClone.name = 'Условие ' + (cId + 1)
    state.conditions.push(conditionClone)
  }
}

export const actions = {
  /**
   * @return {boolean}
   */
  SEND_FORM_DATA({ commit }, value) {
    console.log(value)
    return true
  }
}

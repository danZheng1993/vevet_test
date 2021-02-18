import React from 'react';

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()
const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'setQuery': {
      return {
          ...state,
          query: action.payload
      }
    }
    case 'resetQuery': {
      return {
          ...state,
          query: {},
      };
    }
    case 'updateSchedule': {
      const itemId = action.payload.id;
      return {
        ...state,
        schedules: {
          ...state.schedules,
          [itemId]: {
            ...state.schedules[itemId],
            ...action.payload
          }
        }
      }
    }
    case 'deleteSchedule': {
      const newSchedules = {...state.schedules};
      delete newSchedules[action.payload];
      return {
        ...state,
        schedules: newSchedules,
      }
    }
    case 'setListings': {
      return {
        ...state,
        listings: action.payload,
      }
    }
    case 'setLocation': {
      return {
        ...state,
        searchLocation: action.payload,
      }
    }
    case 'resetLocation': {
      return {
        ...state,
        searchLocation: null,
      }
    }
    case 'setCurrentVet': {
      return {
        ...state,
        currentVet: action.payload,
      }
    }
    case 'resetCurrentVet': {
      return {
        ...state,
        currentVet: null,
      }
    }
    case 'showScheduler': {
      return {
        ...state,
        isShowingScheduler: true,
      }
    }
    case 'hideScheduler': {
      return {
        ...state,
        isShowingScheduler: false,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const AppStateProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(appStateReducer, {
    listings: [],
    searchLocation: null,
    query: {},
    currentVet: null,
    schedules: {},
    isShowingScheduler: false,
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

const useAppState = () => {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider')
  }
  return context
}

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppStateProvider')
  }
  return context
}

const setQuery = (query) => ({ type: 'setQuery', payload: query });
const resetQuery = () => ({ type: 'resetQuery' });
const setLocation = (location) => ({ type: 'setLocation', payload: location });
const resetLocation = () => ({ type: 'resetLocation' });
const setCurrentVet = (vet) => ({ type: 'setCurrentVet', payload: vet });
const resetCurrentVet = () => ({ type: 'resetCurrentVet' });
const setListings = (listings) => ({ type: 'setListings', payload: listings });
const updateSchedule = (schedule) => ({ type: 'updateSchedule', payload: schedule });
const deleteSchedule = (itemId) => ({ type: 'deleteSchedule', payload: itemId });
const showScheduler = () => ({ type: 'showScheduler' });
const hideScheduler = () => ({ type: 'hideScheduler' });


export {
    AppStateProvider,
    useAppState,
    useAppDispatch,
    setQuery,
    resetQuery,
    setListings,
    setLocation,
    resetLocation,
    setCurrentVet,
    resetCurrentVet,
    updateSchedule,
    deleteSchedule,
    showScheduler,
    hideScheduler,
}

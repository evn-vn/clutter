import { connect } from 'react-redux'
import App from './App'
import {
  appProperty,
  getFavourites,
  getFirstName,
  getHandle,
  getHandles,
  getFollow,
  getPostsBy
} from './actions'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFavourites: () => {
      dispatch(getFavourites())
    },
    getFirstName: () => {
      dispatch(getFirstName())
    },
    getMyHandle: () => {
      dispatch(appProperty('Agent_Handle'))
    },
    getHandle: (userHash, isMe, then) => {
      dispatch(getHandle(userHash, isMe, then))
    },
    getHandles: then => {
      dispatch(getHandles(then))
    },
    getFollow: (handle, type, then) => {
      dispatch(getFollow(handle, type, then))
    },
    getPostsBy: (handles, then) => {
      dispatch(getPostsBy(handles, then))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

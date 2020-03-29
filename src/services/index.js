import { dbPromise } from '@/services/db'
// import Store from '@/store'

const objects  =  {
  USERS: 'users',
  LOCATIONS: 'locations'
}

/**
 * Create a user
 * @param userModel
 * @returns {Promise<void>}
 */
const createUser = async (userModel) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readwrite')
  const store = tx.objectStore(objects.USERS)

  const userExist = await store.getKey(userModel.email)

  if (!userExist) {
    store.put(userModel, userModel.email)
    return tx.done
  }
  throw new Error('Email already in use. Please try again.')
}

/**
 * get a user
 * @param email
 * @returns {Promise<void>}
 */
const getUser = async (email) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readwrite')
  const store = tx.objectStore(objects.USERS)

  const userExist = await store.getKey(email)

  if (userExist) {
    const user = await store.get(email)
    await tx.done
    return user
  } else {
    throw new Error('Could not find user.')
  }
}

export {
  createUser,
  getUser
}

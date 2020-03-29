import { dbPromise } from '@/services/db'

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

export {
  createUser
}

import { dbPromise } from '@/services/db'

const objects  =  {
  USERS: 'users',
  BUSINESS: 'business'
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
    store.put(userModel, userModel.id)
    return tx.done
  }
  throw new Error('Email already in use. Please try again.')
}

/**
 * update a user
 * @param userModel
 * @returns {Promise<void>}
 */
const updateUser = async (data) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readwrite')
  const store = tx.objectStore(objects.USERS)

  const userExist = await store.getKey(data.id)

  if (userExist) {
    store.put(data, data.id)
    return tx.done
  }
  throw new Error('Failed to update user. Please contact support.')
}

/**
 * get a user
 * @param email
 * @returns {Promise<void>}
 */
const getUser = async (email) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readonly')
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

const getAllBus = async () => {
  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readonly')
  const store = tx.objectStore(objects.USERS)
  let cursor = await store.openCursor()

  let data = []

  while (cursor) {
    data.push(cursor.value)
    cursor = await cursor.continue();
  }

  return data
}

const getBusById = async (userId) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readonly')
  const store = tx.objectStore(objects.BUSINESS)
  const index = store.index('userIndex')

  console.log('%c userId', 'background: red; color: white;', userId)

  let bus = await index.get(IDBKeyRange.only(userId))

  if (bus) {
    return bus
  }
}

const updateBus = async (data) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readwrite')
  const store = tx.objectStore(objects.BUSINESS)

  store.put(data, data.id)
  return tx.done
}

export {
  createUser,
  getUser,
  updateUser,
  getAllBus,
  updateBus,
  getBusById
}

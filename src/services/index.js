import { dbPromise } from '@/services/db'

const objects  =  {
  USERS: 'users',
  BUSINESS: 'business'
}

/**
 * authenticate a user
 * @param email
 * @param password
 * @returns {Promise<boolean>}
 */
const validateLogin = async (email, password) => {
  if (!email && !password) {
    throw new Error('Email or password cannot be empty')
  }

  const db = await dbPromise()
  const tx = db.transaction(objects.USERS, 'readonly')
  const store = tx.objectStore(objects.USERS)
  const index = store.index('emailIndex')

  let user = await index.get(IDBKeyRange.only(email))

  if (user) {
    let isAuth = user.password === password
    await tx.done
    if (isAuth) {
      return user
    } else {
      throw new Error('Incorrect email or password. Please try again.')
    }
  } else {
    throw new Error('Incorrect email or password. Please try again.')
  }
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

/**
 * get a list of business
 * @returns {Promise<[]>}
 */
const getAllBus = async () => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readonly')
  const store = tx.objectStore(objects.BUSINESS)
  let cursor = await store.openCursor()

  let data = []

  while (cursor) {
    data.push(cursor.value)
    cursor = await cursor.continue();
  }

  return data
}

/**
 * get business by user id
 * @param userId
 * @returns {Promise<DBTypes extends DBSchema ? DBTypes[StoreName]["value"] : any>}
 */
const getBusById = async (userId) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readonly')
  const store = tx.objectStore(objects.BUSINESS)
  const index = store.index('userIndex')

  let bus = await index.get(IDBKeyRange.only(userId))

  if (bus) {
    return bus
  }
}

/**
 * Update business profile
 * @param data
 * @returns {Promise<void>}
 */
const updateBus = async (data) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readwrite')
  const store = tx.objectStore(objects.BUSINESS)

  store.put(data, data.id)
  return tx.done
}

/**
 * search data by key
 * @param key
 * @returns {Promise<[]>}
 * @description search zipcode only for now
 */
const searchQuery = async (key) => {
  const db = await dbPromise()
  const tx = db.transaction(objects.BUSINESS, 'readonly')
  const store = tx.objectStore(objects.BUSINESS)
  const index = store.index('zipcodeIndex')

  let cursor = await index.openCursor(IDBKeyRange.bound(key, key + `\uffff`), 'prev')
  let data = []

  while (cursor) {
    data.push(cursor.value)
    cursor = await cursor.continue();
  }

  return data
}

export {
  createUser,
  getUser,
  updateUser,
  getAllBus,
  updateBus,
  getBusById,
  searchQuery,
  validateLogin
}

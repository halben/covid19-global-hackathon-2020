// eslint-disable-next-line no-unused-vars
import { openDB } from 'idb';

const dbPromise = async () => {
  if (!('indexedDB' in window)) {
    throw new Error('Browser does not support IndexedDB')
  }

  return await openDB('covid_19_app_db', 1, {
    upgrade(database) {
        if (!database.objectStoreNames.contains('users')) {
          database.createObjectStore('users')
        }
        if (!database.objectStoreNames.contains('business')) {
          const store = database.createObjectStore('business')
          store.createIndex('userIndex', 'userId', { unique: true })
        }
    }
  })
}

export {
  dbPromise
}

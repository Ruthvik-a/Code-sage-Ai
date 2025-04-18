import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCeDtu_Qmto9ujkRMJeXz58bLGgdSJnAXs',
  authDomain: 'code-sage-ai-840f6.firebaseapp.com',
  projectId: 'code-sage-ai-840f6',
  storageBucket: 'code-sage-ai-840f6.appspot.com',
  messagingSenderId: '299211996183',
  appId: '1:299211996183:web:cdac95b4bdb8877f123052',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Firestore: Store file metadata
export const addFileMetadata = async (file) => {
  try {
    await addDoc(collection(db, 'files'), {
      name: file.name,
      size: file.size,
      uploadedAt: new Date(),
      hidden: file.hidden || false,
    })
  } catch (err) {
    console.error('Error adding file metadata: ', err)
  }
}

// Firebase Storage: Upload file
export const uploadFile = async (file, hidden = false) => {
  const fileRef = ref(storage, `uploads/${file.name}`)
  const uploadTask = uploadBytesResumable(fileRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // Monitor upload progress (optional)
    },
    (error) => {
      console.error('Error uploading file: ', error)
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
      await addFileMetadata({ name: file.name, size: file.size, hidden })
      alert('File uploaded successfully!')
      return downloadURL
    }
  )
}
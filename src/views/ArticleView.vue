<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ref, onMounted } from 'vue'

const props = defineProps([{ articleId: String }])
const article = ref()
const articleNotExisting = ref(false)

onMounted(async () => {
  const docRef = doc(db('tutorials', articleId))
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return articleNotExisting.value = true
  article.value = docSnap.data()
})

</script>

<template>

</template>
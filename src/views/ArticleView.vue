<!-- <script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const articleId = ref(route.params.articleId)
const article = ref()
const articleNotExisting = ref(false)
const route = useRoute()

// onMounted(async () => {
//   const docRef = doc(db('tutorials', articleId))
//   const docSnap = await getDoc(docRef)

//   if (!docSnap.exists()) return articleNotExisting.value = true
//   article.value = docSnap.data()
// })

// watch(articleId, async (toParams, previousParams) => {
//   const docRef = doc(db('tutorials', toParams))
//   const docSnap = await getDoc(docRef)

//   if (!docSnap.exists()) return articleNotExisting.value = true
//   article.value = docSnap.data()
// })

console.log(articleNotExisting)

</script> -->

<template>

<h1>test</h1>

</template>
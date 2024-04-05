<template>
  <main>
    <!-- Modal -->
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Add your note"
        ></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>

    <!-- Notes Container -->
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div
          class="card"
          v-for="note in notes"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ formatDate(note.date) }}</p>
          <button class="btn remove-btn" @click="removeNote(note.id)">X</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const showModal = ref(false);
const newNote = ref("");
const errorMessage = ref("");
const notes = ref([]);

// Load notes from localStorage on component mount
onMounted(() => {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notes.value = JSON.parse(savedNotes);
  }
});

const getRandomLightColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
};

// Watch for changes in notes array and save to localStorage
watch(
  notes,
  (newNotes) => {
    localStorage.setItem("notes", JSON.stringify(newNotes));
  },
  { deep: true }
);

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = "Note should have more than 10 characters.");
  }

  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(), // Current date
    backgroundColor: getRandomLightColor(),
  });

  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
};

const formatDate = (date) => {
  const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
  return new Date(date).toLocaleDateString("en-US", options);
};

const removeNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  color: white;
  font-size: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.main-text {
  word-wrap: break-word; /* For legacy browsers */
  overflow-wrap: break-word; /* For modern browsers */
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: red;
  margin-top: 7px;
}

.modal p {
  color: red;
}

.remove-btn {
  border-radius: 15px;
  background-color: red;
  color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>

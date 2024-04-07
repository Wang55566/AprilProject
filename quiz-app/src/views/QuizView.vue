<template>
  <div>
    <div>
      <Header :questionStatus="questionStatus" :barPercentage="barPercentage" />
    </div>
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="handleNextQuestion">Next Question</button>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import Question from "../../components/Question.vue";
import Header from "../../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import quizes from "../../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);

const handleNextQuestion = () => {
  if (currentQuestionIndex.value < quiz.questions.length) {
    currentQuestionIndex.value++;
  }
}

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);

const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);
</script>

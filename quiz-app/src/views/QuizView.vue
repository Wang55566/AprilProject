<template>
  <div>
    <div>
      <Header />
    </div>
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Question from "../../components/Question.vue";
import Header from "../../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import quizes from "../../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
</script>

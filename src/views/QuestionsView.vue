<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';

</script>

<template>
  <AppHeader />

  <BaseLayout>
    <BackButton to="/" />

    <h1 class="font-bold text-2xl text-center mb-6 text-yellow-500">Questions</h1>

    <section>
      <ul>
        <li>
          <dl>
            <dt class="question">What's a closure? Where in the code is there a closure?</dt>
            <dd class="answer">It is a way to encapsulate data that you need to use inside of another function using the lexical scope. In Javascript, you can achieve this creating a function inside of another function and returning it. In this way you can use variables in outer function inside of inner function without loss the reference of the data of the outer function. I used it on usePlanetStore where I created 3 functions to get planets, get a planet and get more planets and these functions have access to the state and variables of the store.</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt class="question">Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?</dt>
            <dd class="answer">In any function you can access to variables and trigger actions from outside context of the function. For example, in usePlanetStore inside getPlanets function I’m changing the value of loading ref that triggers an effect on PlanetsView. In this case is expected you want to avoid these cases as much as possible.You can reduce side effects using functions to encapsulate this side effects. Also using pure functions, this means, that you use functions that receive some arguments and return a result and always with the same parameters return the same value.</dd>
          </dl>
        </li>
      </ul>
    </section>
  </BaseLayout>
</template>

<style scoped>
.question {
  @apply font-semibold mb-3;
}

.answer {
  @apply mb-6;
}
</style>

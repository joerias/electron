<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

// const message = ref("");
// const backMessage = ref("");
// const chromeVersion = computed(() => window.api.chromeVersion);
onMounted(() => {});

// const handleClick = async (type: string) => {
// 	if (type === "send") {
// 		window.api.sendValue(message.value);
// 	} else {
// 		const res = await window.api.getValue();
// 		backMessage.value = res;
// 	}
// };
</script>

<template>
	<RouterView />
	<!-- <el-input type="text" v-model="message" placeholder="Enter a message" />
	<el-button @click="handleClick('send')">Send data</el-button>
	<el-button @click="handleClick('get')">Get data</el-button>
	<p>The message of return: {{ backMessage }}</p>
	<p>The chromeVersion is: {{ chromeVersion }}</p> -->
</template>

<style scoped></style>

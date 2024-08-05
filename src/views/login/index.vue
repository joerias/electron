<script setup lang="ts">
defineOptions({
	name: "Login",
});
import { reactive } from "vue";

const form = reactive({
	name: "",
	delivery: false,
});

const onSubmit = () => {
	console.log("submit!");
};
</script>

<template>
	<div class="m-10">
		12312
		<el-form class="w-300" :model="form">
			<el-form-item label="">
				<el-input v-model="form.name" />
			</el-form-item>
			<el-form-item label="Instant delivery">
				<el-switch v-model="form.delivery" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">Create</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<style lang="less" scoped></style>

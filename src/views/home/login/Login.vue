
<script setup lang="ts">

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const loginForm = reactive({
    username:'',
    password:''
})
const login = () => {
    if(loginForm.username === 'admin' && loginForm.password === '123'){
        localStorage.setItem('token','12113123124')
        router.push('/about')
    }else{
        alert('账号或密码错误')
    }
}
</script>

<template>
    <div class="login">
        <el-form 
        ref="ruleFormRef"
        v-model="loginForm"
        class="demo-ruleForm">
            <el-form-item>
                <el-input placeholder="账户名" type="text" v-model="loginForm.username"/>
            </el-form-item>
            <el-form-item  prop="pass" >
                <el-input  type="password"  placeholder="密码" v-model="loginForm.password"/>
            </el-form-item>
            <el-form-item>
                <el-button class="btn" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
    .login{
        padding: 80px 10px 0;
        width: 300px;
        height: 300px;
        border-radius: 5px;
        background: white;
        position: absolute;
        right: 20%;
        top: 30%,
        
    }
    .btn{
        width: 100%;
        background: #4A86DC;
        color: white
    }
</style>
<template>
    <div class="center">
        <center>
            <h1>Redirecting...</h1>
            <p>{{ url }}</p>
        </center>
    </div>
</template>

<style scoped>
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

<script>
export default {
    data() {
        return {
            url: new String(),
        }
    },
    mounted() {
        this.url = this.$route.query?.url;
        location.href = this.url;
    }
}
</script>
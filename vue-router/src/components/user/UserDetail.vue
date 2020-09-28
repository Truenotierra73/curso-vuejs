<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
            :to="link"
            tag="button"
            class="btn btn-danger">
            Edit user
        </router-link>
        <!-- :to="'/user/' + $route.params.id + '/edit'" -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: {
                    id: this.$route.params.id
                },
                query: {
                    locale: 'ar',
                    q: 100
                },
                hash: '#data'
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        const one = 1;
        if (one === 1) {
            next();
        } else {
            next(false);
        }
    }
}
</script>

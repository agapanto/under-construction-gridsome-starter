<template>
    <a class="px-4 mx-0 my-2 col-6 col-lg-4 offset-lg-0 col-xl-3 offset-xl-0 text-decoration-none" :href=linkTo>
        <font-awesome-icon :icon="[iconType, icon]" size="lg" fixed-width />
        {{ label }}
    </a>
</template>


<script>
export default {
    name: 'SocialNetworkIcon',
    props: [
        'iconType',
        'icon',
        'linkTo',
        'label',
    ]
}
</script>

<style lang="scss">
</style>

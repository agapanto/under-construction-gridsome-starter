<template>
    <div class="row">
        <SocialNetworkIcon
            iconType="fab"
            icon="facebook-f"
            linkTo="https://facebook.com"
            label="Facebook"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="instagram"
            linkTo="https://instagram.com"
            label="Instagram"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="twitter"
            linkTo="https://twitter.com"
            label="Twitter"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="whatsapp"
            linkTo="#"
            label="Whatsapp"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="discord"
            linkTo="https://discord.com"
            label="Discord"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="github"
            linkTo="https://github.com"
            label="Github"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="gitlab"
            linkTo="https://gitlab.com"
            label="Gitlab"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="medium"
            linkTo="https://medium.com"
            label="Medium"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="youtube"
            linkTo="https://youtube.com"
            label="Youtube"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="twitch"
            linkTo="https://twitch.tv"
            label="Twitch"
        />
        <SocialNetworkIcon
            iconType="fab"
            icon="airbnb"
            linkTo="https://airbnb.com"
            label="AirBnB"
        />
        <SocialNetworkIcon
            iconType="fas"
            icon="at"
            linkTo="emailto:email@domain.fake"
            label="Email"
        />
    </div>
</template>


<script>
import SocialNetworkIcon from '../components/SocialNetworkIcon'

export default {
    name: 'SocialNetworks',
    components: {
        SocialNetworkIcon,
    },
    props: []
}
</script>

<style lang="scss">
</style>

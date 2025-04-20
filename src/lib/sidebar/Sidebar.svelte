<script lang="ts">
    import SparklesText from '$lib/sidebar/SparklesName.svelte'
    import Logo from './Logo.svelte'
    import Menu from './Menu.svelte'
</script>

<aside class="grid grid-rows-[93%_auto] pt-5 md:border-r-2 border-dashed border-black">
    <div class="p-6 md:w-72">
        <Logo />
        <SparklesText text="Khoa Nguyen-Dinh" class="mt-2 mb-8" />
        <Menu />
        <!-- <Card class="">music</Card> -->
    </div>
</aside>

<style lang="scss">
    @import '../../variables.scss';
</style>

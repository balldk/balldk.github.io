<script lang="ts">
    import SparklesText from '$lib/sidebar/SparklesName.svelte'
    import Logo from './Logo.svelte'
    import Menu from './Menu.svelte'
</script>

<aside class="grid md:grid-rows-[90%_auto] pt-5 md:border-r-2 border-dashed border-black">
    <div class="p-6 md:w-72">
        <Logo />
        <SparklesText text="Khoa Nguyen-Dinh" class="mt-2 mb-8" />
        <Menu />
        <!-- <Card class="">music</Card> -->
    </div>
    <!-- <div class="px-6">
        <div class="card">hello</div>
    </div> -->
</aside>

<style lang="scss">
    @import '../../variables.scss';
</style>

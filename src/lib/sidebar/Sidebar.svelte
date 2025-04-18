<script lang="ts">
    import Card from '$lib/Card.svelte'
    import Contacts from './Contacts.svelte'
    import Logo from './Logo.svelte'
    import Menu from './Menu.svelte'
</script>

<aside class="grid grid-rows-[93%_auto] pt-5 md:border-r-2 border-dashed border-black">
    <div class="p-6 md:w-72">
        <Logo />
        <h1 class="sidebar-heading text-center">Khoa Nguyen-Dinh</h1>
        <Menu />
        <!-- <Card class="">music</Card> -->
    </div>
    <!-- <Contacts /> -->
</aside>

<style lang="scss">
    @import '../../variables.scss';
    .sidebar-heading {
        font-family: 'Danh Da', 'Arial Narrow', Arial, sans-serif;
        font-size: 2.6em;
        font-size-adjust: 0.455;
        text-wrap: nowrap;
    }
</style>

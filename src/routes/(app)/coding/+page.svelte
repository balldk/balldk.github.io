<script lang="ts">
    import ProjectList from '$lib/coding/ProjectList.svelte'
    const imageModules = import.meta.glob(
        '/img/project/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
        { eager: true, query: { enhanced: true } }
    ) as any
</script>

<svelte:head>
    <title>Coding</title>
</svelte:head>

<h1>Coding</h1>

<ProjectList />

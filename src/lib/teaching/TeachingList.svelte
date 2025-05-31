<script>
    import TeachingListItem from './TeachingListItem.svelte'

    let teachingList = [
        {
            uni: 'HCMUS-VNU',
            term: 'Fall 2024',
            title: 'Discrete Structure',
            description: "Exercise instructor for APCS, following Rosen's book.",
        },
        {
            uni: 'HCMUS-VNU',
            term: 'Fall 2024',
            title: 'Discrete Math',
            description: 'Exercise instructor for CS major',
        },
        {
            uni: 'HCMUS-VNU',
            term: 'Fall 2024',
            title: 'Linear Algebra',
            description: 'Exercise instructor for Math major',
        },
    ]
</script>

{#each teachingList as item}
    <TeachingListItem {...item} />
{/each}
<div class="w-full border-dashed border-t-1"></div>

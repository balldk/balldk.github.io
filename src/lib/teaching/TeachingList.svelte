<script>
    import TeachingListItem from './TeachingListItem.svelte'

    let teachingList = [
        {
            uni: 'UVA',
            term: 'Fall 2025',
            title: 'Basic Real Analysis',
            description: 'Discussion session leader and grader',
            imgUrl: '/img/uva-logo.png',
        },
        {
            uni: 'HCMUS',
            term: 'Fall 2024',
            title: 'Discrete Structure',
            description: "Problem session instructor for APCS, following Rosen's book.",
            imgUrl: '/img/hcmus-logo.png',
        },
        {
            uni: 'HCMUS',
            term: 'Fall 2024',
            title: 'Discrete Math',
            description: 'Problem session instructor for CS major',
            imgUrl: '/img/hcmus-logo.png',
        },
        {
            uni: 'HCMUS',
            term: 'Fall 2024',
            title: 'Linear Algebra',
            description: 'Problem session instructor for Math major',
            imgUrl: '/img/hcmus-logo.png',
        },
    ]
</script>

{#each teachingList as item}
    <TeachingListItem {...item} />
{/each}
<div class="w-full border-dashed border-t-1"></div>
